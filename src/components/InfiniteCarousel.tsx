import React, { useState, useRef, useEffect, useCallback } from "react";
import { lerp, clamp01 } from "util/math-ext";
import {Image} from "react-bootstrap";

import "css/infinite-carousel.scss"; // Create this file for the CSS

interface InfiniteCarouselProps {
  autoPlayVelocity?: number;
  debugName? : string;
  extend?: number;
  allowMove?: boolean;

  children: React.ReactNode;
}

const InfiniteCarousel : React.FC<InfiniteCarouselProps> = ({ autoPlayVelocity = 1, debugName="", extend=2, allowMove=true, children }) => {
  //const [index, setIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isInView, setIsInView] = useState(0);

  const [offset, setOffset] = useState(0); // Offset during drag
  const [startOffset, setStartOffset] = useState(0); // Offset during drag
  const [velocity, setVelocity] = useState(0); // Velocity for inertia
  const [totalWidth, setTotalWidth] = useState(0); // Total width of all slides
  
  const startX = useRef(0);
  const diffX = useRef(0);
  const prevTime = useRef(0);
  const isHover = useRef(false);
  const isSwiping = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTime = useRef(0);
  
  const playerInstances = useRef<Map<HTMLIFrameElement, YT.Player>>(new Map()); // Map of iframe src to player instances


  // #region Youtube API =======================================================================
  // Load YouTube API script dynamically
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.body.appendChild(tag);

    // Set up the YT global object
    window.onYouTubeIframeAPIReady = () => {
      console.log('YouTube Iframe API ready');
    };
  }, []);

  /**
   * Maps HTMLIFrameElement to a YT.Player and then calls method for the player
   */
  const callOnPlayerForFrame = useCallback((iframe: HTMLIFrameElement,
    callback: (player: YT.Player) => void
  ) => {
    // Check if we already have an instance of the player for this iframe
    if (!playerInstances.current.has(iframe)) {
      const newPlayer = new YT.Player(iframe, {
        events: {
          onReady: (event) => {
            iframe.dataset.playerReady = "true";
            callback(event.target);
          },
          // onStateChange: (event) => { const playerState = event.data; },
        },
      });
      playerInstances.current.set(iframe, newPlayer); // Store the new player instance
    } else {
      const currentPlayer = playerInstances.current.get(iframe);
      if (currentPlayer && iframe.dataset.playerReady === "true")
        callback(currentPlayer);
    }
  }, []);
  // ===========================================================================================

  // #region Infinite Swipe Looping ============================================================
  /**
  * measures the width of the carousel to properly handle infinte swipe looping
  */
  const measureWidths = useCallback(() => {
    // console.log('measureWidths');
    if(!trackRef.current) {
      setTimeout(measureWidths, 100);
      return;
    }
    const children = Array.from(trackRef.current.children);
    const widths = children.map((child) => (child as HTMLElement).offsetWidth);
    const total = widths.reduce((acc, w) => acc + w, 0);
    
    if (total <= 0) {
      setTimeout(measureWidths, 100);
      return;
    }
    // console.log('setTotalWidth', total);
    setTotalWidth(total);
  }, []);

  /**
  * waits for images and video to load properly, before measuring widths
  */
  const waitForMediaToLoad = useCallback(() => {
    const mediaElements = trackRef.current?.querySelectorAll('img, video') ?? [];
    const promises = Array.from(mediaElements).map((media) => {
      // Type narrowing to access `complete` for images and `readyState` for videos
      if (media instanceof HTMLImageElement) {
        return new Promise<void>((resolve) => {
          if (media.complete) {
            resolve();
          } else {
            media.addEventListener('load', ()=>resolve(), { once: true });
            media.addEventListener('error', ()=>resolve(), { once: true });
          }
        });
      } else if (media instanceof HTMLVideoElement) {
        return new Promise<void>((resolve) => {
          if (media.readyState >= 3) { // READY_STATE.HAVE_FUTURE_DATA or higher
            resolve();
          } else {
            media.addEventListener('loadeddata', ()=>resolve(), { once: true });
            media.addEventListener('error', ()=>resolve(), { once: true });
          }
        });
      }
      return Promise.resolve(); // Fallback for unsupported elements
    });
  
    return Promise.all(promises);
  }, []);
  /**
   * Loops the offset value to create an infinite scrolling effect.
   */
  const loopOffset = useCallback((x: number) => {
    // Reset position for infinite loop
    let retVal = x;
    while (retVal < -totalWidth / 3) retVal = retVal + (totalWidth / 3);
    while (retVal > 0) retVal = retVal - (totalWidth / 3);
    // console.log('newOffset', x);
    return retVal;
  }, [totalWidth]);

  // Measure widths of slides on mount
  useEffect(() => {
    waitForMediaToLoad().then(() => {
      measureWidths();
      setIsReady(true);
    });

    window.addEventListener('resize', measureWidths);
    const mutObserver = new MutationObserver(measureWidths);
    const resObserver = new ResizeObserver(measureWidths);

    if (trackRef.current) {
      mutObserver.observe(trackRef.current, { childList: true, subtree: true });
      resObserver.observe(trackRef.current);
      Array.from(trackRef.current.children).forEach((child) => { resObserver.observe(child); });
    }

    return () => {
      window.removeEventListener('resize', measureWidths);
      if (mutObserver) mutObserver.disconnect();
      if (resObserver) resObserver.disconnect();
    };
  }, [measureWidths, waitForMediaToLoad]);

  /**
   * animate Swiping Velocity
   */
  useEffect(() => {
    let frameId : number;

    const animateSwipingVelocity = () => {
      // console.log('animate Swiping Velocity');
      const target = isHover.current ? 0 : isInView * autoPlayVelocity;
      if (isSwiping.current || 
        (Math.abs(target) < 0.01 && Math.abs(velocity) < 0.01) // no auto play and velocity is down
      ) 
      {
        frameId = requestAnimationFrame(animateSwipingVelocity);
        return;
      }
      const nextV = lerp(velocity, target, 0.05);

      setOffset((prev) => {
        const newOffset = prev + velocity;
        return loopOffset(newOffset);
      });
      
      // console.log('v', velocity);
      setVelocity(nextV);
    
      frameId = requestAnimationFrame(animateSwipingVelocity);
    };

    frameId = requestAnimationFrame(animateSwipingVelocity);
    return () => {
      cancelAnimationFrame(frameId);
    }
  }, [autoPlayVelocity, isInView, loopOffset, velocity]);

  // add gestures
  useEffect(() => {
    /**
     * handle click on interactable elements inside carousel
     */
    const handleClick = (x:number, y:number) => {
      // make children interactable temporary, so we get can deepest child element as target 
      trackRef.current?.classList.remove('no-interact');
      let target = document.elementFromPoint(x, y) as HTMLElement;
      trackRef.current?.classList.add('no-interact');
      // Traverse down to the deepest element
      while (target && target.shadowRoot)
        target = target.shadowRoot.elementFromPoint(x, y) as HTMLElement;
      
      // console.log('target ', target);
      const iFrame = target as HTMLIFrameElement;
      const isIFrame = target && target.tagName === 'IFRAME';
      const isYTIFrame = isIFrame && iFrame && iFrame.src.includes('youtube.com')
      if(!isYTIFrame){
        target.click();
        return;
      }
      callOnPlayerForFrame(iFrame, (player)=>{
        if (!player.isMuted())
          return;
        
        if (!iFrame.requestFullscreen) 
          return;
        
        player.unMute();
        iFrame.requestFullscreen();
        // mute again on exit fullscreen
        document.addEventListener("fullscreenchange", ()=>{
          if (!document.fullscreenElement)
            player.mute();
        });        
      });
    }

    const handleTouchOrMouseStart = (x: number) => {
      if (!isReady || totalWidth === 0) return; // Prevent interaction if totalWidth is not calculated
      const currentTime = Date.now();

      setStartOffset(offset);
      startX.current = x - offset;
      isSwiping.current = true;
  
      // inertia
      prevTime.current = currentTime;
      startTime.current = currentTime;
      setVelocity(0);
    }

    const handleTouchOrMouseMove = (x: number) => {
      if (!isSwiping.current || !isReady || totalWidth === 0) return;
      const currentTime = Date.now();
      const deltaX = (x - startOffset) - startX.current;
      const deltaT = currentTime - prevTime.current;
  
      diffX.current = x - startX.current;
      setOffset(loopOffset(diffX.current)); // Update offset for dynamic movement
  
      // console.log('deltaX', deltaX, x, startX.current);
      // inertia
      setVelocity(deltaX / deltaT);
      prevTime.current = currentTime;
    };
  
    const handleTouchOrMouseEnd = (e: TouchEvent | MouseEvent) => {
      if (!isSwiping.current) return;
      isSwiping.current = false;
      const endTime = Date.now();
      const duration = endTime - startTime.current;
      const distance = Math.abs(diffX.current);
      // console.log('distance ', distance, duration, velocity);

      startX.current = 0;
      diffX.current = 0;

      const isClick = distance < 10 && duration < 200;
      if (!isClick)
        return;

      const clientX = e.type === "touchend" ? (e as TouchEvent).changedTouches[0].clientX : (e as MouseEvent).clientX;
      const clientY = e.type === "touchend" ? (e as TouchEvent).changedTouches[0].clientY : (e as MouseEvent).clientY;
      handleClick(clientX, clientY);
    };
  
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      handleTouchOrMouseStart(e.touches[0].clientX);
    }
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      handleTouchOrMouseStart(e.clientX);
    }
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleTouchOrMouseMove(e.touches[0].clientX);
    }
    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      handleTouchOrMouseMove(e.clientX);
    }
    const handleTouchEnd = (e: TouchEvent) => handleTouchOrMouseEnd(e);
    const handleMouseUp = (e: MouseEvent) => handleTouchOrMouseEnd(e);
    const handleMouseEnter = (e: MouseEvent) => isHover.current = true;
    const handleMouseLeave = (e: MouseEvent) => isHover.current = false;

    const track = containerRef.current;
    if (track && allowMove) {
      track.addEventListener('touchstart', handleTouchStart, { passive: false });
      track.addEventListener('touchmove', handleTouchMove, { passive: false });
      track.addEventListener('touchend', handleTouchEnd);
      track.addEventListener('mousedown', handleMouseDown);
      track.addEventListener('mousemove', handleMouseMove);
      track.addEventListener('mouseup', handleMouseUp);
      track.addEventListener('mouseleave', handleMouseUp);
      track.addEventListener("mouseenter", handleMouseEnter);
      track.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (track && allowMove) {
        track.removeEventListener('touchstart', handleTouchStart);
        track.removeEventListener('touchmove', handleTouchMove);
        track.removeEventListener('touchend', handleTouchEnd);
        track.removeEventListener('mousedown', handleMouseDown);
        track.removeEventListener('mousemove', handleMouseMove);
        track.removeEventListener('mouseup', handleMouseUp);
        track.removeEventListener('mouseleave', handleMouseUp);
        track.removeEventListener("mouseenter", handleMouseEnter);
        track.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [allowMove, callOnPlayerForFrame, isReady, loopOffset, 
    offset, startOffset, totalWidth, velocity]);
  // ===========================================================================================

  useEffect(() => {
    const checkVisibility = () => {
      if (!containerRef.current) {
        setTimeout(checkVisibility, 100);
        return;
      }
  
      const rect = containerRef.current.getBoundingClientRect();
      const rectYCenter = rect.top + (rect.height / 2)
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowHalf = windowHeight * 0.5;
      const windowYCenter = windowHeight * 0.5;

      // Check if the element is within the viewport
      const visible = rectYCenter < windowYCenter ? clamp01(rect.bottom / windowHalf)
          : clamp01(1 - (rect.top - windowYCenter) / windowHalf);
      setIsInView(visible);
    };

    checkVisibility(); // Check visibility when the component mounts

    const handleScroll = () => checkVisibility(); // Check visibility on scroll
    window.addEventListener('scroll', handleScroll); // Listen for scroll events
    return () => window.removeEventListener('scroll', handleScroll); // Clean up the event listener
  }, [debugName]);

  const handleChildClick = (e: React.MouseEvent<HTMLElement>) => {
    if (isSwiping.current) {
      // console.log('isSwiping');
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  };

  const initChildren = (childrenArray : (string | number 
    | React.ReactElement<unknown, string 
    | React.JSXElementConstructor<unknown>> 
    | Iterable<React.ReactNode> | React.ReactPortal)[]) => {
    let extendedChildren = childrenArray;
    for (let i=0; i<extend; ++i ) {
      extendedChildren = extendedChildren.concat(childrenArray);
    }
    return extendedChildren;
  }
  const extendedChildren = initChildren(React.Children.toArray(children));

  return (
    <div className="carousel-container position-relative" ref={containerRef} >
      {isHover.current && allowMove
        ? (<Image className="position-absolute" onClick={() => setVelocity(50)}
            style={{width:"25px", left:"15px", zIndex:"1", filter:"drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.15))"}} 
            src="/icons/arrow-left.svg" />)
        : (null)}
      <div
        className={`carousel-track no-interact`}
        ref={trackRef}
        style={{
          transform: `translateX(${offset}px)`,
          transition: isSwiping ? "none" : "transform 0.5s ease", // Disable transition during drag
        }}
      >
        {extendedChildren.map((child, i) => (
          <div key={i} className="carousel-slide" onClick={handleChildClick}>
            {child}
          </div>
        ))}
      </div>
      {isHover.current && allowMove
        ? (<Image className="position-absolute" onClick={() => setVelocity(-50)}
          style={{width:"25px", right:"15px", zIndex:"1", filter:"drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.15))"}} 
          src="/icons/arrow-right.svg" />)
        : (null)}
    </div>
  );
};

export default InfiniteCarousel;