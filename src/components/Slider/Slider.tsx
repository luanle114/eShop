import React from 'react';
import { IStyledSlider } from './Slider.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction : any) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4)
    }
    else{
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
    }
  };
  const [sliderItems, setSliderItems] = useState([]); // default is empty database or json, no products

  useEffect(() =>{
    const fetchData = async () =>{
      const result = await axios.get('/api/slider');
      setSliderItems(result.data)
    }
    fetchData();
  }, []);

  return(
    <IStyledSlider>
      <div className='s-container'>
        <div className='s-arrow left' onClick={() => handleClick("left")}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
        </div>
        <div className='wrapper' style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            {sliderItems.map((item: any) =>(
              <div className='slide' key={item._id}>
                <div className='img-container'>
                  <img src={item.image} alt='' className='s-img'/>
                </div>
              </div>
            ))}
        </div>
        <div className='s-arrow right'>
          <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={() => handleClick("right")}/>
        </div>
      </div>
    </IStyledSlider>
  )
}

export default Slider;