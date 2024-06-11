import Arrow from '../assets/icons/maki_arrow.svg'
import Image1 from '../assets/images/Image-1.jpg'
import Image2 from '../assets/images/Image-2.jpg'
import Image3 from '../assets/images/Image-3.jpg'
import Image4 from '../assets/images/Image-4.jpg'
import Image5 from '../assets/images/Image-5.jpg'
import Image6 from '../assets/images/Image-6.jpg'
import Image7 from '../assets/images/Image-7.jpg'
import Image8 from '../assets/images/Image-8.jpg'
import Image9 from '../assets/images/Image-9.jpg'
import Image10 from '../assets/images/Image-10.jpg'
import Image11 from '../assets/images/Image-11.jpg'
import Image12 from '../assets/images/Image-12.jpg'
import { useState } from 'react';

 const PlayGround = () => {
    const images = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const displayImages = () => {
        return images.slice(currentIndex, currentIndex + 6).map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="w-1/6 p-1" />
        ));
      };
    
      const nextSlide = () => {
        if (currentIndex + 6 < images.length) {
          setCurrentIndex(currentIndex + 6);
        }
      };
    
      const prevSlide = () => {
        if (currentIndex - 6 >= 0) {
          setCurrentIndex(currentIndex - 6);
        }
      };
  
  return (
    <div className="bg-portfolio mt-5 text-white px-32">
      <h2 className="font-normal text-2xl">Playground</h2>
      <hr className='my-2 w-[104px] h-[3px]'/>
      <p className="font-normal text-lg w-[788px]">
        In my free time, I <span className="white-text">sketch</span> and I <span className="white-text">paint</span>. I also dabble into <span className="white-text">graphic work</span>, I love art in all forms and it helps my creativity , It also relaxes and refreshes the mind.
      </p>
      <div className="mt-2">
        <div className='flex justify-end items-end mb-2'>
            <img src={Arrow} alt="Scroll Left" className="rotate-180" onClick={prevSlide}/>
            <img src={Arrow} alt="Scroll Right" className="ml-3" onClick={nextSlide}/>
        </div>
        <div className="flex space-x-2 overflow-hidden">
            {displayImages()}
        </div>
      </div> 
      <div>

      </div>
      <div className="button-section">
        <button className="view-button">View all</button>
      </div>
    </div>
  )
}

export default PlayGround