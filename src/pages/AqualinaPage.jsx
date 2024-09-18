/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import Aqualinas from '../assets/images/aqualina-logo.png'
import figmaIcon from '../assets/icons/figma-icon.svg'
import excelIcon from '../assets/icons/excel.svg'
import wordIcon from '../assets/icons/ms_word.svg'
import userInterview from '../assets/images/innovation-1.png'
import stakeholderInterview from '../assets/images/innovation-2.png'
import aqualinaDesign from '../assets/images/aqualina-design-process.png'
import aqualinaSiteMap from '../assets/images/aqualina-sitemap.png'
import aqualinaUserFlow from '../assets/images/aqualina-userflow.png'
import aqualinaHifi from '../assets/images/aqualina-hifi.png'
import aqualinaWireFrame from '../assets/images/aqualina-wireframe.png'
import Rocket from "../assets/icons/rocket.svg"
import Project from '../components/Project'
import ContactForm from '../components/ContactForm'
import James from '../assets/images/james.png'
import Alexandra from '../assets/images/alexandra.png'


const AqualinaPage = () => {
  return (
    <>
        <img src={Aqualinas} alt="" className='w-full' />  

        <section className='container-custom my-8 px-4 md:px-24 text-white'>
            <h2 className='font-ogg font-bold text-5xl mb-6'>Aqualina</h2>

            <div className='overview my-4'>
                <h4 className='font-ogg font-bold text-3xl'>Overview</h4>
                <hr className='my-2 w-[104px] h-[3px] text-[#E8DEFF]'/>

                <p className='font-nb font-normal text-xl leading-9 my-2'>Aqualina is a website that allows users to make hotel reservations as members of the elite beach resort (Aqualina). 
                    This project focused on creating a new hotel booking website, aimed at offering a seamless and intuitive user experience (UX) with a modern and 
                    engaging user interface (UI). The objective was to build a platform that makes the process of making reservations, scheduling dinners, and 
                    purchasing event tickets straightforward and enjoyable for members, leveraging insights from user research and the industry's best practices. 
                    Also, to make the membership process seamless for new users.
                </p>
            </div>

            <div className='role-view my-10 space-y-4'>
                <h2 className='font-ogg font-bold text-2xl text-project-heading leading-7'>My Role</h2>

                <p className='leading-9 font-nb text-xl font-normal'>My role was to research and design all interfaces (website, customer portal, and admin portal) related to the project. 
                    I collaborated with the project management team to create the UI design.
                </p>
            </div>

            <div className='tool-view my-10 space-y-4'>
                <h3 className='font-ogg font-bold text-2xl text-project-heading leading-7'>Tools Used</h3>
                <div className='flex items-center gap-2 mt-2 mb-6'>
                    <span className='flex items-end gap-x-2 mr-2 leading-7 text-base font-normal font-nb'><img src={figmaIcon} className='w-8 h-8' alt="" />Figma</span>
                    <span className='flex items-end gap-x-2 mr-2 leading-7 text-base font-normal font-nb'><img src={excelIcon} className='w-8 h-8' alt="" />Ms Excel</span> 
                    <span className='flex items-end gap-x-2 mr-2 leading-7 text-base font-normal font-nb'><img src={wordIcon} className='w-8 h-8' alt="" />Ms Word</span>
                </div>

                <h3 className='font-ogg font-bold text-2xl text-project-heading leading-7'>Time Frame</h3>
                <p className='font-nb font-normal text-base'>5 months</p>
            </div>

            <h3 className='leading-9 font-bold font-ogg text-3xl mt-10'>Design Process</h3>
            <hr className='my-2 w-[104px] h-[3px] text-[#E8DEFF]'/>
            <div className='p-8 bg-white flex justify-center items-center rounded-lg my-4'>
                <img src={aqualinaDesign} alt="" className='item' />
            </div>

            <h1 className='font-ogg font-bold text-2xl my-6'>Discover Phase</h1>

            <h3 className='font-ogg font-bold text-2xl text-project-heading mt-2 mb-5'>User Interview</h3>
            <p className='leading-9 font-normal text-xl font-nb my-2'>I conducted interviews with users that have experience booking rooms and hotel services in order to tailor the needs and preferences of the 
              intended audience so as to deliver a positive and optimal user experience.  Below are some of the questions asked.   </p>
            <ul className='list-disc list-inside leading-9 font-normal text-xl font-nb ml-3 space-y-2 mb-6'>
              <li>Can you describe your last experience booking a room reservation online?</li>
              <li>Which websites or apps have you used to book rooms/hotels in the past?</li>
              <li>What did you like and dislike about those websites or apps?</li>
              <li>What incentives or benefits would encourage you to become a loyal member of a hotel booking website?</li>
              <li>What are the most important factors for you when choosing a hotel (e.g., price, location, amenities, reviews)?</li>
              <li>What are the biggest challenges you face when booking room/hotels online?</li>
            </ul>

            <div className='p-8 bg-secondary-color flex flex-col md:flex-row justify-between rounded-lg'>
              <div className='flex-1'>
              <h2 className='text-project-primary font-bold text-2xl mb-4'>Key Insights from User Interview</h2>
                <ul className='list-disc list-inside ml-3 leading-9 font-normal text-xl font-nb text-project-primary-fade space-y-2'>
                  <li>Users prioritize ease of use , clear room information, highlighted amenities or services, transparent prices and competitive pricing when booking hotels/rooms online. </li>
                  <li>A lot of users highlighted simplified booking steps, short form fields, and use progress indicators to make the process user-friendly.</li>
                  <li>Some users especially the younger users (25 - 38 years) focused on a clean, modern design with intuitive navigation and engaging visual elements to enhance user experience.</li>
                </ul>
              </div>
              <div className='flex-1 flex justify-end'>
                <img src={stakeholderInterview} alt="" />
              </div>
            </div>

            <h3 className='font-ogg font-bold text-2xl text-project-heading mt-10 mb-6'>Stakeholders Interview</h3>
            <p className='font-normal text-xl font-nb mt-4'>I conducted interviews with the stakeholders to gain a deeper understanding of the needs, goals, and preferences of business. I gathered critical information and ensured user-centered design.</p>
            <ul className='list-disc list-inside leading-9 font-normal text-xl font-nb ml-3 mb-4 space-y-2'>
              <li>How do you see Aqualina differentiating itself from other hotel booking websites, and what unique value proposition do you think we can offer to our guests?</li>
              <li>Can you share your vision for how Aqualina will enhance the overall resort experience for our guests, and
              what specific benefits you hope to offer?</li>
            </ul>

            <div className='p-8 bg-secondary-color flex flex-col-reverse md:flex-row justify-between rounded-lg'>
              <div className='flex-1 flex justify-start'>
                <img src={userInterview} alt="" />
              </div>
              <div className='flex-1'>
                <h3 className='text-project-primary font-bold text-2xl mb-4'>Key Insights from Stakeholders Interview</h3>
                <ul className='list-disc list-inside ml-3 leading-9 font-normal text-xl font-nb text-project-primary-fade space-y-2'>
                  <li>The stakeholders aimed to enhance the resort experience by providing seamless booking, personalized recommendations, and exclusive benefits. </li>
                  <li>The membership program and community features foster a sense of belonging, which strengthens guest loyalty and customer retention.</li>
                  <li>Success is measured by metrics such as increased direct bookings, higher guest satisfaction scores, and improved guest retention rates.</li>
                </ul>
              </div>
            </div>

            <div className='my-10 space-y-4'>
              <h1 className='font-ogg font-bold text-2xl mb-4'>Define</h1>
              <h3 className='font-ogg font-bold text-2xl text-project-heading'>Problem Definition</h3>
              <p className='leading-9 font-normal text-xl font-nb'>How do we design a user-friendly, seamless and efficient experience for users that reflects the luxury, community and exclusivity of the brand through the website and customer portal as well as enhance administrative efficiency?
              The major objective is to generate income through direct reservations made online or, in fact, through promoting reservations via the website and to the projection of the hotel brand identity.</p>
              <h3 className='font-ogg font-bold text-2xl text-project-heading'>Personas</h3>
              <p className='leading-9 font-normal text-xl font-nb'>How do we design a user-friendly, seamless and efficient experience for users that reflects the luxury, community and exclusivity of the brand through the website and customer portal as well as enhance administrative efficiency?
              The major objective is to generate income thro</p>
            </div>

            <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 gap-x-12 my-6'>
              <div className="bg-white rounded-lg overflow-hidden flex-1 text-user-color py-4">
                  <div className="flex items-center p-4">
                    <img src={James} alt="Profile Picture" className="w-16 h-16 rounded-lg mr-4" />
                    <div>
                      <h2 className="text-2xl font-normal">James Chuka</h2>
                      <h5 className="font-normal text-sm">26 years | Marketing Specialist</h5>
                    </div>
                  </div>
                  
                  <div className="px-4">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">About</h3>
                      <p className="text-base font-normal leading-6">James loves attending events, hangouts, and experiencing new things with his friends. He's tech-savvy and always on the lookout for budget-friendly ways to enjoy high-end experiences.</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Goals</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Find affordable luxury hotels and experiences</li>
                        <li>Stay up-to-date with the latest events and happenings</li>
                        <li>Share his experiences on social media</li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Behavioral patterns</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Researches and compares prices online</li>
                        <li>Reads reviews and asks for recommendations from friends</li>
                        <li>Uses social media to discover new experiences and events</li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Pain points</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Limited budget for luxury experiences</li>
                        <li>Difficulty finding affordable options that meet his high standards</li>
                        <li>Frustrated by outdated travel websites and booking processes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold">Recommendations</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Budget-friendly luxury hotel options</li>
                        <li>Personalized event and experience recommendations</li>
                        <li>User-friendly booking process with transparent pricing</li>
                      </ul>
                    </div>
                  </div>
              </div>


              <div className="bg-white rounded-lg overflow-hidden flex-1 text-user-color py-4">
                  <div className="flex items-center p-4">
                    <img src={Alexandra} alt="Profile Picture" className="w-16 h-16 rounded-lg mr-4" />
                    <div>
                      <h2 className="text-2xl font-normal">Alexandra Tolu</h2>
                      <h5 className="font-normal text-sm">38 years | Business Executive</h5>
                    </div>
                  </div>
                  
                  <div className="px-4">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">About</h3>
                      <p className="text-base font-normal leading-6">Alexandra values luxury, exclusivity privacy and discretion. She loves exploring new places and cultures both for leisure and business, seeking high-end experiences. She often struggles with finding the right accommodations that meet her needs and expectations. She is willing to pay premium for high-end experiences</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Goals</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Alexandra wants to book accommodations hassle-free and enjoy a comfortable and memorable stay during her visits</li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Behavioral patterns</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Conducts thorough research before booking hotels</li>
                        <li>Reads reviews and asks for referral from colleagues and clients</li>
                        <li>Compares price and amenities across multiple websites</li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Pain points</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Feeling stressed and overwhelmed by the endless options available online</li>
                        <li>Wasting time comparing prices and amenities of different hotels</li>
                        <li>Experiencing disappointment when the chosen hotel does not meet her expectations</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold">Recommendations</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Priority customer support</li>
                        <li>Personalized booking experience</li>
                        <li>Access to exclusive amenities and services</li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>

            <h1 className='font-ogg font-bold text-2xl my-10'>Ideate</h1>
            
            <h3 className='font-ogg font-bold text-2xl text-project-heading my-3'>Sitemap</h3>
            <p className='font-normal text-xl font-nb mt-2 mb-10'>By narrowing the features necessary for Aqualina to function through research and interviews, I then created a site map to organize the pages, information, and navigation of the website and customer portal.</p>
            <img src={aqualinaSiteMap} alt="" className='w-full max-w-none'/> 

            <h3 className='font-ogg font-bold text-2xl text-project-heading my-10'>User Flow</h3>
            <p className='font-normal text-xl font-nb mb-4'>To further define users’ actions, we created user flows for different features to gain a better understanding of how users will use it.</p>
            <img src={aqualinaUserFlow} alt="" />

            <h1 className='font-ogg font-bold text-2xl  my-10'>Design</h1>
            
            <h3 className='font-ogg font-bold text-2xl text-project-heading my-3'>Wireframes</h3>
            <p className='font-normal text-xl font-nb mb-10'>I started with sketching my designs on paper, after getting a better design direction I continued with low-fidelity wireframes to get a clearer structure of the web pages and evaluate them with our stakeholders and product team. This helped me work rapidly and led me to consider more ideas. Sketching many concepts helped me form a broader view of the system earlier ensuring a more cohesive design..</p>
            <img src={aqualinaWireFrame} alt="" />

            <h3 className='font-ogg font-bold text-2xl text-project-heading my-10'>High-Fidelity Design & Prototyping</h3>
            <p className='font-normal text-xl font-nb mb-4'>After creating the wireframes, I moved on to create the high-fidelity designs on Figma as well as prototype. I ensured I carried the stakeholders along during this process by scheduling a meeting bi-weekly after each  expected deliverable, this allowed for a fast feedback process. After each presentation, based off feedback from the stakeholders and product manager I iterated the designs and continued the feedback process until the stakeholders were satisfied with the deliverables.</p>
            <div className='p-8 bg-white flex flex-col items-center rounded-lg my-4'>
              <img src={aqualinaHifi} alt="" />
              <button className='flex justify-center text-center items-center py-3 px-0 md:px-5 font-workSans bg-live-button text-white border-none rounded-lg gap-0 w-full md:w-[250px] md:gap-2'>View Live Website <span><img src={Rocket} alt="" className='ml-2'/></span></button>
            </div>

            <div className='text-white'>
                <h3 className='font-bold text-2xl mb-4'>Key Takeaway</h3>
                <ul className='list-disc list-inside ml-3 leading-9 font-normal text-xl font-nb space-y-2'>
                  <li>It helped me better understand the pain point of users interacting with hotel websites and a better knowledge of the hospitality industry. It was also a fun and new experience.</li>
                  <li>During the user research process, it revealed contradictory preferences among different user segments. For example, some users prioritized simplicity and ease of use, while others preferred more advanced features and customization options.</li>
                  <li>The project faced challenges, but the most difficult piece was the inadequate documentation from the product team and the delayed communication in regards to feedback. Thankfully, we were able to be more flexible with our timing so as for everyone to be present when needed.</li>
                  <li>While the whole project was a huge learning experience, I especially loved the research aspect which helped take the ambiguity out of our designs, also loved the moodboarding and sketching, it felt good seeing my concepts come into high-fidelity design.</li>
                </ul>
            </div>

        </section>  

        <Project available={false}/>

        <ContactForm />
    
    </>
  )
}

export default AqualinaPage