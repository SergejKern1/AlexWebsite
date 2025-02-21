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

      <div className="mw-1000px mx-auto position-relative">
        <div onClick={()=>{                
            onClose();
        }} style={{position:'absolute', top:'-25px', right:'25px', zIndex:'4'}}>
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