import DribbleIcon from '../assets/icons/dribble.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import { toast } from 'react-toastify'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', form.current)
     emailjs
       .sendForm('service_oy0xcog', 'template_qwfbnzu', form.current, {
         publicKey: '720rtQJ2I-ZFv8IBL',
       })
       .then(
         () => {
          toast.success(<div>
            <h3 className='font-normal text-lg'>Message Sent!</h3>
            <p className='font-normal text-sm'>Your message has been successfully sent. We’ll be in touch shortly.</p>
          </div>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
         },
         (error) => {
           console.log(error)
           toast.error(<div>
            <h3 className='font-normal text-lg'>Oops!</h3>
            <p className='font-normal text-sm'>Looks like an error occurred during submission. Please try again.</p>
          </div>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
         },
       );
       form.current.reset()
  };


  return (
    <div className='bg-center bg-no-repeat'>
      <div className="container-custom pt-5 px-4 md:px-24 text-white font-nb">
        <h2 className="font-normal text-2xl font-nb tracking-wide">Let us Connect</h2>
        <hr className='my-2 w-[104px] h-[3px]'/>
        <p className="font-normal text-lg text-playground-color w-full md:w-[55%] tracking-wide">
          Fill out the form and you will get a response within the next 24 hours, or reach out to me at 
          <span className="text-white font-normal"> ebi.titi96@gmail.com</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <form className="" ref={form} onSubmit={handleSubmit} >
              <div className='flex flex-col'>
                <label className='my-5 font-normal text-base'>Your name</label>
                <input className='mb-5 px-2 py-1 rounded-lg w-full md:w-[487px] h-[44px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#484848]' name='user_name' type="text" placeholder="Enter name"/>
              </div>
              <div className='flex flex-col'>
                <label className='my-5 font-normal text-base'>Your email address?</label>
                <input className='mb-5 px-2 py-1 rounded-lg w-full md:w-[487px] h-[44px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#484848]' name='user_email' type="text" placeholder="Enter email address" />
              </div>
              <div className='flex flex-col'>
                <label className='my-5 font-normal text-base'>Describe the project you have in mind?</label>
                <textarea className='mb-5 px-2 py-1 rounded-lg w-full md:w-[487px] h-[129px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#BBBBBB]' name='message' placeholder="Enter description"/>
              </div>
              <div className="submit">
                <button className="text-center bg-[#6D3091] rounded-lg py-2 px-4 w-full md:w-[488px] h-[44px]" type='submit'>Submit</button>
              </div>
            </form>
          </div>
          <div className='flex flex-col justify-center items-start'>
            <div>
              <h5 className='font-normal text-3xl py-2'>Social</h5>
              <p className='font-normal text-base pb-4 text-playground-color'>Connect with me</p>
            </div>
            <div className="flex flex-row md:justify-between gap-x-4 md:gap-x-8 w-full">
                <a href='' className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={DribbleIcon} alt="" /> Dribbble
                </a>
                <a href='' className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={LinkedInIcon} alt="" /> LinkedIn
                </a>
                <a href='' className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={InstagramIcon} alt="" /> Instagram
                </a>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-1 mt-12 mb-4 border-playground-color'/>
      <div className='text-center pb-4 text-playground-color'>
        <h5>Copyright © 2024 Ebi Titi. All rights reserved</h5>
      </div>
    </div>
  )
}

export default ContactForm