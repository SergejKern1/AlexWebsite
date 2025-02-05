import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Spacing } from "../../util/class-utils.tsx";

import ImageRow from "../ImageRow.tsx";
import InfiniteCarousel from 'components/InfiniteCarousel.tsx';
import ShopElement, {ShopElementProps} from 'components/ShopElement.tsx';


interface ShopCategoryProps {
  id?: string;
  className?: string;
  isStatic?: boolean; 
  categoryTitle: string;
  categoryText: string;
  buttonText: string;
  onButton: ()=>void;

  elements: ShopElementProps[];

  style?: React.CSSProperties;
}

const ShopCategory: React.FC<ShopCategoryProps> = ({id, className, isStatic= false, categoryTitle, categoryText, buttonText, onButton, elements}) => {
  let autoPlayVelocity = 1, extend=2, allowMove=true;
  if(isStatic){
    autoPlayVelocity= 0;
    extend = 0;
    allowMove = false;
  }

  return(
    <div id={id} className={className}>
      <Container className="mw-800px">
        <Spacing top={50} />
        <Row>
          <Col xs={6}>
            <h3>
              {categoryTitle}
            </h3>
            {categoryText}
          </Col>
          <Col cs={6} className='fl-col-j-center-al-i-center '>
          <Button variant='outline-primary' onClick={onButton}> <b>{buttonText}</b> </Button>
          </Col>
        </Row>
      </Container>
      <Spacing top={20} />

      <div className="carousel-container-row">
        <InfiniteCarousel autoPlayVelocity={autoPlayVelocity} allowMove={allowMove} extend={extend}>
          {elements.map((e, ) => (
            <ShopElement imgSrc={e.imgSrc} details={e.details} name={e.name} price={e.price} />
          ))}
        </InfiniteCarousel>
      </div>

    </div>
  );
}

const Shop: React.FC = () => {
  return (
    <div className="overflow-hidden">
      
      <ShopCategory categoryTitle='Originale Leinwände' 
        categoryText={'Acrylfarbe auf Leinwand. Bei Interesse kontaktiere mich gerne.'} 
        buttonText='Contact Me'
        onButton={()=>{console.log('clicked!')}} elements={[
          {imgSrc:"/Shop/canvas-dogs.jpg", details:"60x80", 
            name:"Dogs", price:"700,-€" },
          {imgSrc:"/Shop/canvas-fishes.jpg", details:"70x70", 
            name:"Fishes", price:"850,-€" },
          {imgSrc:"/Shop/canvas-fox-bg.jpg", details:"30x70", 
            name:"Smoky Fox", price:"600,-€" },
          {imgSrc:"/Shop/canvas-hands-of-generations.jpg", details:"70x100", 
            name:"Hands of Generations", price:"1050,-€" },
          {imgSrc:"/Shop/canvas-tiger-bg.jpg", details:"30x70", 
            name:"Swimming Tiger", price:"600,-€" },
          {imgSrc:"/Shop/canvas-cooperation.jpg", details:"50x70", 
            name:"Cooperation", price:"450,-€" },
        ]} 
      />
      
      <ShopCategory isStatic={true} categoryTitle='Schallplatten' 
        categoryText={'Acrylfarbe auf Schallplatte. Bei Interesse kontaktiere mich gerne.'} 
        buttonText='Contact Me'
        onButton={()=>{console.log('clicked!')}} elements={[
          {imgSrc:"/Shop/schallplatte-clouds.jpg", 
            name:"Clouds", price:"50,-€" },
          {imgSrc:"/Shop/schallplatte-waves.jpg",
            name:"Waves", price:"50,-€" },
        ]} 
      />

      <ShopCategory categoryTitle='Sticker' 
        categoryText={'Acrylfarbe auf Sticker. Bei Interesse kontaktiere mich gerne.'} 
        buttonText='Contact Me'
        onButton={()=>{console.log('clicked!')}} elements={[
          {imgSrc:"/Shop/sticker-woman.jpg ", 
            name:"Woman", price:"700,-€" },
          {imgSrc:"/Shop/sticker-ape.jpg", details:"chromium ultra", 
            name:"Ape", price:"850,-€" },
          {imgSrc:"/Shop/sticker-axolotl-girl.jpg",
            name:"Axolotl", price:"850,-€" },
          {imgSrc:"/Shop/sticker-fish.jpg",
            name:"Fish", price:"850,-€" },
          {imgSrc:"/Shop/sticker-tiger.jpg", details:"glitter schnitter", 
            name:"Tiger", price:"850,-€" },
        ]} 
      />

      <ShopCategory categoryTitle='Wood-charms' 
        categoryText={'Handgefertigte Anhänger aus Holz, bemalt mit Acrylfarbe und einem geflochtenem Band aus Bauwolle.'+
          'Der Durchmesser von 3.6cm kann variieren da es ein Naturprodukt ist. Jeder Anhänger ist ein Unikat.'+
          'Eigenes Motiv und Farben auf Anfrage möglich. Schreib mir bei Interesse gerne eine Mail.'
        } 
        buttonText='Contact Me'
        onButton={()=>{console.log('clicked!')}} elements={[
          {imgSrc:"/Shop/wood-carm-frog-lila2.jpg", 
            name:"Frog Lila", price:"6,50 €" },
          {imgSrc:"/Shop/wood-carm-sun2.jpg",
            name:"Sun", price:"6,50 €" },
          {imgSrc:"/Shop/wood-carm-caterpillar-blue2.jpg",
            name:"Caterpillar blue", price:"6,50 €" },
        ]} 
      />

      <ImageRow padding={5} rowItems={[
        {src:'/Shop/wood-charm-woodwork.jpg'},
        {src:'/Shop/wood-charm-woodwork-2.jpg'},
      ]} />

    </div>
  );
}

export default Shop;
