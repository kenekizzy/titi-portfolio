import playgroundImage from '../assets/images/playground-image.png'
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

const PlaygroundPage = () => {
  const images = [
    { image: Cinderella, imageName: "Cinderelli", emoji: cinderellaIcon },
    { image: Anya, imageName: "Anya from SpyxFamily", emoji: anyaIcon },
    { image: Love, imageName: "Saranghae", emoji: loveIcon },
    { image: LakeImage, imageName: "Ze lake", emoji: lakeIcon },
    { image: Intertwined, imageName: "Intertwined", emoji: intertwinedIcon },
    { image: Trapped, imageName: "Trapped", emoji: trappedIcon },
    { image: Thoughts, imageName: "Exploding thoughts", emoji: thoughtsIcon },
    { image: Tears, imageName: "Tears behind her eyes", emoji: tearIcon }, 
    { image: Bloom, imageName: "Bloom", emoji: bloomIcon },
    { image: Close, imageName: "Close my eyes", emoji: closeIcon },
    { image: Blush, imageName: "Blush", emoji: blushIcon },   
    { image: Universe, imageName: "The universe is one", emoji: universeIcon },
  ]
  return (
    <div className='bg-portfolio'>
      <div className='container-custom px-4 md:px-0 text-white'>
          <h2 className='flex font-bold text-[40px] mb-4'>Playground <span><img src={playgroundImage} alt="" className='w-16 h-16 ml-4'/></span></h2>
          <p className='font-normal text-lg w-full md:w-[788px] font-nb leading-6 tracking-wide mb-6'>In my free time, I sketch and I paint. I also dabble into graphic work, I love art in all forms and it helps my creativity , It also relaxes and 
            refreshes the mind.</p>
          
          <div className='grid grid-cols-1 md:grid-cols-3 space-y-2 md:space-y-6 pb-24 grid-flow-dense'>
          {images.map((imageObj, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <img src={imageObj.image} alt={`Image ${index}`} className="w-full" />
              <div className="mt-2 flex justify-between w-full">
                <span>{imageObj.imageName}</span>
                <span className="ml-2"><img src={imageObj.emoji} alt="" /></span>
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default PlaygroundPage