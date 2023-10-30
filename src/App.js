import React, { useState } from 'react';
import './Image/Style.css'
import econ from './Image/left-arrow.svg'
import econ2 from './Image/right-arrow.svg'
import img1 from './Image/img1.jpg'
import img2 from './Image/img2.jpg'
import img3 from './Image/img3.jpg'
import img4 from './Image/img4.jpg'
import img5 from './Image/img5.webp'
import img6 from './Image/img6.jpg'
import img7 from './Image/img7.jpg'
import img8 from './Image/img8.jpg'




const sliderData = [
  {
    id: 1,
    image: img1,
    caption: 'Image 1',
  },
  {
    id: 2,
    image: img2,
    caption: 'Image 2',
  },
  {
    id: 2,
    image: img3,
    caption: 'Image 2',
  },
  {
    id: 1,
    image: img4,
    caption: 'Image 1',
  }, {
    id: 1,
    image: img5,
    caption: 'Image 1',
  }, {
    id: 1,
    image: img6,
    caption: 'Image 1',
  }, {
    id: 1,
    image: img7,
    caption: 'Image 1',
  }, {
    id: 1,
    image: img8,
    caption: 'Image 1',
  },
  // Ajoutez d'autres URL d'images si nécessaire
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <center>
    <div className="slider" id='a'>
      <div id='b' style={{width :'25px', height:'20px'}} onClick={prevSlide}><img src={econ}></img></div>
      <img id='img' style={{width :'800px', height:'500px'}} src={sliderData[currentImageIndex].image} alt={sliderData[currentImageIndex].caption} />
      <div id='c' style={{width :'25px', height:'20px'}} onClick={nextSlide}><img src={econ2}></img></div>
    </div>
    </center>
  );
};

export default Slider;
