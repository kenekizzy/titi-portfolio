import { Link } from 'react-router-dom'
// import Arrow from '../assets/icons/maki_arrow.svg'
import Cinderella from '../assets/images/Cinderella.jpg'
import cinderellaIcon from '../assets/icons/Cinderrelli.svg'
import LakeImage from '../assets/images/lake-picture.jpg'
import lakeIcon from '../assets/icons/lake.svg'
import Tears from '../assets/images/tears.jpg'
import tearIcon from '../assets/icons/tears.svg'
import Anya from '../assets/images/anya.jpg'
import anyaIcon from '../assets/icons/anya.svg'
import Intertwined from '../assets/images/intertwined.jpg'
import intertwinedIcon from '../assets/icons/intertwined.svg'
import Love from '../assets/images/love.jpg'
import loveIcon from '../assets/icons/love.svg'
import Bloom from '../assets/images/bloom.jpg'
import bloomIcon from '../assets/icons/bloom.svg'
import Blush from '../assets/images/blush.jpg'
import blushIcon from '../assets/icons/blush.svg'
import Close from '../assets/images/close.jpg'
import closeIcon from '../assets/icons/see-no-evil.svg'
import Thoughts from '../assets/images/thoughts.jpg'
import thoughtsIcon from '../assets/icons/thoughts.svg'
import Trapped from '../assets/images/trapped.jpg'
import trappedIcon from '../assets/icons/trapped.svg'
import Universe from '../assets/images/universe.jpg'
import universeIcon from '../assets/icons/crescent-moon.svg'

 const PlayGround = () => {
    const images = [
      { image: Cinderella, imageName: "Cinderelli", emoji: cinderellaIcon },
      { image: LakeImage, imageName: "Ze lake", emoji: lakeIcon },
      { image: Tears, imageName: "Tears behind her eyes", emoji: tearIcon },
      { image: Intertwined, imageName: "Intertwined", emoji: intertwinedIcon },
      { image: Love, imageName: "Saranghae", emoji: loveIcon },
      { image: Bloom, imageName: "Bloom", emoji: bloomIcon },
      { image: Blush, imageName: "Blush", emoji: blushIcon },
      { image: Close, imageName: "Close my eyes", emoji: closeIcon },
      { image: Thoughts, imageName: "Exploding thoughts", emoji: thoughtsIcon },
      { image: Trapped, imageName: "Trapped", emoji: trappedIcon },
      { image: Universe, imageName: "The universe is one", emoji: universeIcon },
      { image: Anya, imageName: "Anya from SpyxFamily", emoji: anyaIcon },
    ]

      const displayImages = () => {
        return images.map((imageObj, index) => (
          <>
            <img key={index} src={imageObj.image} alt='slide' className="w-1/2 md:w-1/6 p-1" />
            {/* <div className="mt-2 block">
              <span>{imageObj.imageName}</span>
              <img src={imageObj.emoji} alt=""  className='ml-2'/> 
            </div>  */}
          </>
        ));
      };
  
  
  return (
    <div className='bg-portfolio'>
      <div className="container-custom pt-20 pb-20 md:pb-6 md:pt-5 px-4 md:px-24 text-white">
        <h2 className="font-normal text-2xl font-nb pt-0 md:pt-16">Playground</h2>
        <hr className='my-2 w-[104px] h-[3px] border-2 rounded-full'/>
        <p className="font-normal text-playground-color text-base md:text-lg w-full md:w-[65%] leading-6 tracking-wide font-nb pt-3 md:pt-0 pb-4 md:pb-10">
          In my free time, I <span className="text-white">sketch</span> and I <span className="text-white">paint</span>. I also dabble into <span className="text-white">graphic work</span>, I love art in all forms and it helps my creativity , It also relaxes and refreshes the mind.
        </p>
        <div className="mt-2">
          <div className="flex flex-row space-x-2 overflow-x-scroll overflow-y-hidden">
              {displayImages()}
          </div>
        </div> 
        <div>

        </div>
        <div className="button-section">
          <Link to='playground' preventScrollReset={false} className="view-button font-workSans">View all</Link>
        </div>
      </div>
    </div>
  )
}

export default PlayGround