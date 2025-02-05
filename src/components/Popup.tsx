import { Spacing } from "util/class-utils";
import { useEffect } from "react";

export interface PopupProps {
    onClose: () => void;
    children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling

    return () => {
      document.body.style.overflow = ""; // Restore scrolling when popup closes
    };
  }, []);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <Spacing top={20}/>
      <div className="mw-1000px mx-auto position-sticky" style={{top:'20px', right:'0px', zIndex:'4'}}>
        <div onClick={()=>{                
            onClose();
        }} style={{position:'absolute', top:'-25px', right:'-25px',}}>
            <img src="/close.png" style={{width:'50px'}}/>
        </div>
      </div>

      <div className="popup-content mw-1000px mx-auto" onClick={(e) => e.stopPropagation()}>
          {children}
      </div>
        
    </div>
  );
}

export default Popup;