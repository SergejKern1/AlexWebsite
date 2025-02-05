import { useState } from "react";
import Menu from "./Menu";
import {primaryMenuItems, secondaryMenuItems} from "../util/menuItems";

const MenuMobile: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onClick = () => {
      setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="sticky-bottom d-flex d-sm-none align-items-center justify-content-center">
            <div
                id="menu-mobile"
                style={{
                    display: isMenuOpen ? 'block' : 'none',
                    position: 'absolute',
                    bottom: '100%',  // Position the menu above the button
                    backgroundColor: '#fff',  // Background color for the menu
                    width: '100%',  // Ensure it takes up the full width
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Optional shadow for better visibility
                    zIndex: 1000, // Make sure the menu is above other elements
                }}
            >
                <b style={{ textTransform: 'uppercase' }}>
                    <Menu
                        menuItems={primaryMenuItems} isMobile={true} />
                </b>
                <Menu
                    menuItems={secondaryMenuItems} isMobile={true} />
            </div>
            <div className="btn btn-primary" onClick={onClick}><i className="fas fa-bars"></i> </div>
        </div>
    );
  }
  
  export default MenuMobile;
  