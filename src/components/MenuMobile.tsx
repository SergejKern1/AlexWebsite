import { useState } from "react";
import Menu from "./Menu";
import {primaryMenuItems, secondaryMenuItems} from "util/menuItems";
import {Image} from "react-bootstrap";
import { Spacing } from "util/class-utils";

const MenuMobile: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onClick = () => {
      setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <div className = "sticky-bottom d-flex d-sm-none align-items-center justify-content-center">
            <div className = "w-75"
                id="menu-mobile"
                style={{
                    display: isMenuOpen ? 'block' : 'none',
                    position: 'absolute',
                    bottom: '0%',  // Position the menu above the button
                    backgroundColor: '#fff',  // Background color for the menu
                    width: '100%',  // Ensure it takes up the full width
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',  // Optional shadow for better visibility
                    zIndex: -1, // Make sure the menu is above other elements
                }}
            >
                <b style={{ textTransform: 'uppercase' }}>
                    <Menu
                        menuItems={primaryMenuItems} isMobile={true} />
                </b>
                <Menu
                    menuItems={secondaryMenuItems} isMobile={true} />
                    <Spacing top = {50}/>
            </div>
            <Image src = {isMenuOpen ? "icons/close.svg" : "icons/menu.svg"} onClick={onClick} style={{width:"45px", height:"45px"}}/>
        </div>
    );
  }
  
  export default MenuMobile;
  