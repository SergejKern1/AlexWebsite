import {Container, Row, Col, Button, Image} from "react-bootstrap";

import Menu from "./Menu";
import {primaryMenuItems, secondaryMenuItems} from "../util/menuItems";
import { Spacing } from "../util/class-utils";

const MenuDesktop: React.FC = () => {

    return (
        <div className="d-flex flex-column flex-nowrap 
            align-items-center sticky-top" >
            <a href="/" className="mt-2 d-block-mx-auto link-dark text-decoration-none" 
                title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <Image src='/logo.PNG' style={{height: '54px', width: '160px', objectFit: 'contain'}} />
            </a>
            <Spacing top={50} />
            <b style={{ textTransform: 'uppercase' }}>
                <Menu
                    className="d-none d-sm-block"  // Desktop-specific classes
                    menuItems={primaryMenuItems} />
            </b>
            <Spacing top={30} />

            <Menu
                className="d-none d-sm-block"  // Desktop-specific classes
                menuItems={secondaryMenuItems} />

            <div 
                className="d-none d-sm-block" // Desktop-specific classes
                style={{width: '135px'}}>
                <Row>
                    <Col className="behance-btn"> </Col>
                    <Col className="inst-btn"> </Col>
                    <Col className="mail-btn"> </Col>
                    <Col className="linkedin-btn"> </Col>
                </Row>
            </div>

            <Image className='d-none d-sm-block sticky-bottom' src='/littlehut.png' 
                style={{ width: '100px'}} />
        </div>
    );
  }
  
  export default MenuDesktop;
  