/* eslint-disable react/no-unescaped-entities */
import DribbleIcon from '../assets/icons/dribble.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import { ThreeDots } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

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
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: { backgroundColor: '#2B9A66', color: '#fff', width: '391px', alignItems: 'center' },
            });
            setLoading(false)
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
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: { backgroundColor: '#DC3E42', color: '#fff', width: '391px' },
            });
            setLoading(false)
         },
       );
       form.current.reset()
  };


  return (
    <div className='bg-center bg-no-repeat'>
      <div className="container-custom pt-16 md:pt-5 pb-0 md:pb-10 px-4 md:px-24 text-white font-nb">
        <h2 className="font-normal text-2xl font-nb tracking-wide pt-0 md:pt-16">Let's Connect</h2>
        <hr className='my-2 w-[104px] h-[3px] border-2 rounded-full'/>
        <p className="font-normal text-base md:text-lg leading-6 text-playground-color w-full md:w-[55%] tracking-wide pt-3">
          Fill out the form and you will get a response within the next 24 hours, or reach out to me at 
          <span className="text-white font-normal"> ebi.titi96@gmail.com</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='pb-8 md:pb-0'>
            <form className="" ref={form} onSubmit={handleSubmit} >
              <div className='flex flex-col mb-5'>
                <label className='pt-6 pb-1 font-normal text-base'>Your name</label>
                <input className='px-2 py-1 rounded-lg w-full md:w-[487px] h-[44px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#484848]' name='user_name' type="text" placeholder="Enter name"/>
              </div>
              <div className='flex flex-col mb-5 '>
                <label className='pt-6 pb-1 font-normal text-base'>Your email address?</label>
                <input className='px-2 py-1 rounded-lg w-full md:w-[487px] h-[44px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#484848]' name='user_email' type="text" placeholder="Enter email address" />
              </div>
              <div className='flex flex-col mb-5 '>
                <label className='pt-6 pb-1 font-normal text-base'>Describe the project you have in mind?</label>
                <textarea className='px-2 py-1 rounded-lg w-full md:w-[487px] h-[129px] gap-2 text-input-field-text bg-input-field-background border-2 border-[#BBBBBB]' name='message' placeholder="Enter description"/>
              </div>
              <div className="submit">
                <button className="text-center bg-[#6D3091] rounded-lg py-2 px-4 w-full md:w-[488px] h-[44px]" type='submit'>
                  {loading ? (
                     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <ThreeDots
                        height={20}
                        width={20}
                        color="#fff"
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#ccc"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                     </div>
                    ) : (
                      'Submit'
                    )}
                </button>
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
                <a href='https://www.linkedin.com/in/arigbe-titi-26804815a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={LinkedInIcon} alt="" /> LinkedIn
                </a>
                <a href='https://www.instagram.com/logic_mafia?igsh=MWxuZnZ5NnJhOWs3bQ%3D%3D&utm_source=qr' className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={InstagramIcon} alt="" /> Instagram
                </a>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-1 mt-12 mb-4 border-playground-color opacity-30'/>
      <div className='text-center pb-4 text-playground-color font-normal text-sm'>
        <h5>Copyright © 2024 Ebi Titi. All rights reserved</h5>
      </div>
    </div>
  )
}

export default ContactForm