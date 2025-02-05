// import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout"; // Adjust path as necessary
import ScrollToAnchor from "./util/ScrollToAnchor";

import Homepage from './components/pages/Homepage'
import CorporateDesign from './components/pages/CorporateDesign';
  import GoForIt from './components/popups/Corporate/GoForIt';
  import DoItRtr from './components/popups/Corporate/DoItRtr';
  import Elayn from './components/popups/Corporate/Elayn';
  import Flyer from './components/popups/Corporate/Flyer';
  import Ingame from './components/popups/Corporate/Ingame';
  import Ippen from './components/popups/Corporate/Ippen';
  import SergejKern from './components/popups/Corporate/SergejKern';
  import USWahl from './components/popups/Corporate/USWahl';

import MotionDesign from './components/pages/MotionDesign';
import Illustration from './components/pages/Illustration';
import GameArt from './components/pages/GameArt';
  import IntoTheCold from './components/popups/GameArt/IntoTheCold';
  import Pitrush from './components/popups/GameArt/Pitrush';
  import Okjo from './components/popups/GameArt/Okjo';

import Shop from './components/pages/Shop';

import Sketchbook from './components/pages/Sketchbook';
import AboutMe from './components/pages/AboutMe';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Freebees from './components/pages/Freebees';
import NotFound from './components/pages/NotFound';

import './css/styles.scss';

function App() {

  // function isInteractable(element : HTMLElement) {
  //   if (element.style.display === 'none' || element.offsetParent === null)
  //     return false;
  //   const pointerEvents = window.getComputedStyle(element).pointerEvents;
  //   if (pointerEvents === 'none')
  //     return false;
  //   if (element instanceof HTMLAnchorElement || element instanceof HTMLButtonElement)
  //     return true;
  //   if (element.classList.contains('btn') || element.hasAttribute('role') && element.getAttribute('role') === 'button') 
  //     return true;
  //   if (element instanceof HTMLDivElement && (element.hasAttribute('onclick') || element.getAttribute('role') === 'button'))
  //     return true;
  //   return false;
  // }

  // useEffect(()=>{
  //   const updateCursor=(e: MouseEvent)=>{
  //     const cursor = document.querySelector('.custom-cursor') as HTMLElement;
  //     const hideCustomCursor=() => cursor.classList.add('d-none');
  //     const showCustomCursor=() => cursor.classList.remove('d-none');
  
  //     cursor.style.left = `${e.pageX}px`;
  //     cursor.style.top = `${e.pageY}px`;
  //     let elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement|null;
  //     while (elementUnderCursor && !isInteractable(elementUnderCursor)) {
  //       elementUnderCursor = elementUnderCursor.parentElement;
  //     }
  //     const interactable = elementUnderCursor ? isInteractable(elementUnderCursor) : false;
  //     console.log('interactable', elementUnderCursor, interactable);
  //     if (interactable) showCustomCursor(); else hideCustomCursor();
  //   }
  //   const mouseMove=(e:MouseEvent)=>{
  //     requestAnimationFrame(() => updateCursor(e)); // Smooth update with requestAnimationFrame
  //   }
    
  //   document.addEventListener('mousemove', mouseMove);
  //   return () => document.removeEventListener('mousemove', mouseMove);
  // }, []);

  return (
    <Router>
      <ScrollToAnchor/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>} />
          <Route path="corporate-design" element={<CorporateDesign/>} />
            <Route path='corporate-design/go-for-it' element={<GoForIt/>} />
            <Route path='corporate-design/do-it-rtr' element={<DoItRtr/>} />
            <Route path='corporate-design/elayn' element={<Elayn/>} />
            <Route path='corporate-design/cover-flyer' element={<Flyer/>} />
            <Route path='corporate-design/ingame' element={<Ingame/>} />
            <Route path='corporate-design/ippen' element={<Ippen/>} />
            <Route path='corporate-design/sergej-kern' element={<SergejKern/>} />
            <Route path='corporate-design/us-wahl' element={<USWahl/>} />

          <Route path="motion-design" element={<MotionDesign/>} />
          <Route path="illustration" element={<Illustration/>} />
          <Route path="game-art" element={<GameArt/>} />
            <Route path="game-art/into-the-cold" element={<IntoTheCold/>} />
            <Route path="game-art/pitrush" element={<Pitrush/>} />
            <Route path="game-art/okjo" element={<Okjo/>} />

          <Route path="shop" element={<Shop/>} />
          <Route path="sketch-book" element={<Sketchbook/>} />
          <Route path="about" element={<AboutMe/>} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="freebees" element={<Freebees/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
