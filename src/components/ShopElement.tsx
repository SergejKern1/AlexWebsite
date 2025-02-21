import { Image } from "react-bootstrap";

export interface ShopElementProps {
    id?: string;
    className?: string;
    
    imgSrc: string;

    details?: string;
    name: string;
    price: string;

    style?: React.CSSProperties;
}

const ShopElement: React.FC<ShopElementProps> = ({ id, className, imgSrc, details, name, price, style, ...rest }) => {

    return (
        <div id={id} className={className} 
            style={{ backgroundColor: 'white', margin: '5px', padding: '15px', paddingBottom: '0px', ...style }}
            {...rest} >
            <Image src={imgSrc} style={{ height: 'calc(100% - 55px)', width: 'auto'}}/>
            <br/>
            {details}<br/>
            <div className='fl-j-between-al-i-center-g-2'>
                <h6>{name}</h6>
                <h5>{price}</h5>
            </div>
        </div>
    );
}

export default ShopElement;