// import React from "react";
// import Slider from "react-slick";

// import "css/slick-carousel.scss";

// export interface ImageData {
//     src: string;
//     alt: string;
// }
// export interface ImageCarouselProps {
//   imgs: ImageData[];
// }

// const SlickCarousel : React.FC<ImageCarouselProps> = ({imgs}) => {
//     const settings = {
//         dots: true, // Show navigation dots
//         infinite: true, // Infinite looping
//         speed: 500, // Transition speed
//         slidesToShow: 3, // Number of slides to show
//         slidesToScroll: 3, // Number of slides to scroll at a time
//         variableWidth: true,
//         centerMode: true,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//       };

//     return(
//         <div className="mediaContainer ">
//             <Slider {...settings}>
//                 {
//                     imgs.map((child,) => (
//                         <div>
//                             <img className="slick-carousel-img" src={child.src} alt={child.alt} />
//                         </div>
//                     )) 
//                 }
//             </Slider>
//         </div>
//     );
// }

// export default SlickCarousel;