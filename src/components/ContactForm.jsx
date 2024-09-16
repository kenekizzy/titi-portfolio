import DribbleIcon from '../assets/icons/dribble.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import InstagramIcon from '../assets/icons/instagram.svg'

const ContactForm = () => {
  return (
    <div className='bg-center bg-no-repeat'>
      <div className="container-custom pt-5 px-4 md:px-0 text-white font-nb">
        <h2 className="font-normal text-2xl font-nb tracking-wide">Let us Connect</h2>
        <hr className='my-2 w-[104px] h-[3px]'/>
        <p className="font-normal text-lg w-full md:w-[788px] tracking-wider">
          Fill out the form and you will get a response within the next 24hours, or reach out to me at 
          <span className="white-text font-semibold"> ebi.titi96@gmail.com</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <form className="">
              <div className='flex flex-col'>
                <label className='my-5 font-normal text-base'>Your name</label>
                <input className='mb-5 px-2 py-1 rounded-lg w-full md:w-[487px] h-[44px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#484848]' type="text" placeholder="Enter name"/>
              </div>
              <div className='flex flex-col'>
                <label className='my-5 font-normal text-base'>Your email address?</label>
                <input className='mb-5 px-2 py-1 rounded-lg w-full md:w-[487px] h-[44px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#484848]' type="text" placeholder="Enter email address" />
              </div>
              <div className='flex flex-col'>
                <label className='my-5 font-normal text-base'>Describe the project you have in mind?</label>
                <textarea className='mb-5 px-2 py-1 rounded-lg w-full md:w-[487px] h-[129px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#BBBBBB]' placeholder="Enter description"/>
              </div>
              <div className="submit">
                <button className="text-center bg-[#6D3091] rounded-lg py-2 px-4 w-full md:w-[488px] h-[44px]">Submit</button>
              </div>
            </form>
          </div>
          <div className='flex flex-col justify-center items-start'>
            <div>
              <h5 className='font-normal text-3xl py-2'>Social</h5>
              <p className='font-normal text-base pb-4'>Connect with me</p>
            </div>
            <div className="flex flex-row justify-between w-full">
                <span className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={DribbleIcon} alt="" /> Dribbble
                </span>
                <span className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={LinkedInIcon} alt="" /> LinkedIn
                </span>
                <span className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={InstagramIcon} alt="" /> Instagram
                </span>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-1 mt-12 mb-4'/>
      <div className='text-center pb-4 text-white'>
        <h5>Copyright © 2024 Ebi Titi. All rights reserved</h5>
      </div>
    </div>
  )
}

export default ContactForm