import menopays from '../assets/images/menopays mockup.png'
import vectorIcon from '../assets/icons/Vector.svg'



const Menopays = () => {
    return (
      <div className="bg-card-background border border-none my-8 rounded-md shadow-lg p-6 w-card-width h-card-height">
          <div className="flex justify-between items-center">
              <h2 className='font-medium text-base text-card-heading'>WEBSITE & MOBILE APP</h2>
              <span className="rounded-card py-1 px-3 bg-card-coming-soon gap-2.5">Coming Soon</span>
          </div>
          <div className="mb-8 space-y-4">
              <h3 className='font-normal text-4xl text-white'>Menopays</h3>
              <p className='font-normal text-lg text-card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit magni assumenda minima nobis reiciendis aliquam quia sed quas explicabo.</p>
              <p className='font-normal text-lg text-white'>See my work <span className='inline'><img src={vectorIcon} alt="vectorIcon" /></span></p>
          </div>
          <div>
              <img src={menopays} alt="" className='w-96 h-96'/>
          </div>
      </div>
    )
  }
  
  export default Menopays