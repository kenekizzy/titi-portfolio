/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import Spectas from '../assets/images/spcta-header.png'
import figmaIcon from '../assets/icons/figma-icon.svg'
import excelIcon from '../assets/icons/excel.svg'
import wordIcon from '../assets/icons/ms_word.svg'
import Project from '../components/Project'
import ContactForm from '../components/ContactForm'
import spctaDesign from '../assets/images/spcta-design-process.png'
import userInterview from '../assets/images/innovation-1.png'
import stakeholderInterview from '../assets/images/innovation-2.png'
import spctaSiteMap from '../assets/images/spcta-sitemap.png'
import spctaUserFlow from '../assets/images/spcta-userflow.png'
import spctaHifi from '../assets/images/spcta-hifi.png'
import spctaWireFrame from '../assets/images/spcta-wireframes.png'
import Rocket from "../assets/icons/rocket.svg"
import Ojukwu from '../assets/images/ojukwu.png'
import Alexandra from '../assets/images/alexandra.png'
import Pakam from '../assets/images/competitive-pakham.png'
import BinWaste from '../assets/images/competitve-binwaste.png'
import Dogwood from '../assets/images/competitive-dogood.png'
import Olio from '../assets/images/competitve-olio.png'

const Specta = () => {
  return (
    <>
        <img src={Spectas} alt="" className='w-full' />  

        <div className='bg-projects-color w-full'>
          <section className='container-custom px-4 md:px-24 text-white pb-6 md:pb-12'>
              <h2 className='font-ogg font-bold text-[32px] md:text-5xl pt-6 md:pt-16 mb-6'>SPCTA</h2>

              <div className='overview my-4'>
                  <h4 className='font-ogg font-bold text-2xl md:text-3xl'>Overview</h4>
                  <hr className='mt-1 mb-2 w-[114px] h-[3px] text-[#E8DEFF] opacity-30 rounded-sm'/>

                  <p className='font-nb font-normal text-lg md:text-xl leading-8 md:leading-9 my-2'>SPCTA is an app and website that seeks to eliminate waste in Nigeria. It helps to solve 
                    the problems of unemployment, environmental and health issues through the process of collecting waste from users, paying users, processing waste,
                    and transporting processed waste through dynamic logistics infrastructure. Also, the conversion of processed waste into raw materials for reuse
                      in global packaging supply chains. My role was to conduct research on users, competitors and similar products to use the data acquired to 
                      develop user personas and optimize user experience through high-fidelity user interfaces. I collaborated with the project management consultant
                      , development team and stakeholders representative to achieve the success of this project.
                  </p>
              </div>

              <div className='role-view my-10 space-y-4'>
                  <h2 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading leading-7'>My Role</h2>

                  <p className='leading-8 md:leading-9 font-nb text-lg md:text-xl font-normal'>My role was to research and design the customer's interface both for the home owners and 
                    business entities. I also collaborated with the project manager in writing the project requirements and acceptance criteria.
                  </p>
              </div>

              <div className='tool-view my-10 space-y-4'>
                  <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading leading-7'>Tools Used</h3>
                  <div className='flex items-center gap-2 mt-2 mb-6'>
                      <span className='flex items-end gap-x-2 mr-2 leading-7 text-lg md:text-base font-normal font-nb'><img src={figmaIcon} className='w-8 h-8' alt="" />Figma</span>
                      <span className='flex items-end gap-x-2 mr-2 leading-7 text-lg md:text-base font-normal font-nb'><img src={excelIcon} className='w-8 h-8' alt="" />Ms Excel</span> 
                      <span className='flex items-end gap-x-2 mr-2 leading-7 text-lg md:text-base font-normal font-nb'><img src={wordIcon} className='w-8 h-8' alt="" />Ms Word</span>
                  </div>
              </div>

              <div className='time-view my-10 space-y-4'>
                <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading leading-7'>Time Frame</h3>
                <p className='font-nb font-normal text-lg md:text-base'>3 months</p>
              </div>

              <div className='design-process-view mt-12 md:mt-24'>
                  <h3 className='leading-8 md:leading-9 font-bold font-ogg text-[26px] md:text-3xl mt-10'>Design Process</h3>
                  <hr className='my-2 w-[187px] h-[3px] text-[#E8DEFF] opacity-30 rounded-sm'/>
                  <div className='p-8 bg-white flex justify-center items-center rounded-lg my-4'>
                      <img src={spctaDesign} alt="" className='item' />
                  </div>
              </div>

              <div className='discover-view mt-12'>
                  <h1 className='font-ogg font-bold text-2xl my-6'>Discover Phase</h1>

                  <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading mt-2 mb-5'>Survey</h3>
                  <p className='leading-8 md:leading-9 font-normal text-lg md:text-xl font-nb my-2'>I  conducted user research using Surveys and Questionnaires to provide insight and help 
                    in designing interfaces that cater to the specific needs of the users.</p>
                  <ul className='list-disc list-inside leading-8 md:leading-9 font-normal text-lg md:text-xl font-nb ml-3 space-y-2 mb-6'>
                    <li>How often do you currently dispose of your house waste?</li>
                    <li>Are you are of the environmental benefits of recycling?</li>
                    <li>How much knowledge do you have on recycling?</li>
                    <li>How satisfied are you with your current waste management options?</li>
                    <li>Have you ever experienced difficulty with waste collection or disposal in the past?</li>
                    <li>Would you be more likely to dispose of your waste properly if you could earn money and rewards?</li>
                    <li>What features would your expect from a waste management mobile app?</li>
                    <li>How would you prefer to receive notifications and communicate with service providers?</li>
                  </ul>

                  <div className='p-8 bg-secondary-color flex flex-col md:flex-row justify-between rounded-lg'>
                    <div className='flex-1'>
                    <h2 className='text-project-primary font-bold text-[22px] md:text-2xl mb-4'>Key Insights from Survey</h2>
                      <ul className='list-disc list-inside ml-1 md:ml-3 leading-8 md:leading-9 font-normal text-lg md:text-xl font-nb text-project-primary-fade space-y-2'>
                        <li>75% of respondents rely on informal methods such as burning or burying waste due to irregular collection services. This indicates a critical need for reliable and consistent waste collection solutions.</li>
                        <li>While many respondents are aware of the environmental benefits of recycling, the importance placed on recycling varies. This highlights the necessity for educational initiatives to increase the perceived value of proper waste disposal and recycling</li>
                        <li>The prospect of earning money or rewards significantly motivates respondents to properly dispose of their waste. This suggests that the app’s points and rewards system is likely to be effective in encouraging responsible waste management behaviors</li>
                        <li>85% of respondents frequently use mobile apps for daily activities, indicating a high potential for engagement within the app. Additionally, in-app messaging and SMS are the preferred communication channels, suggesting these should be prioritized for notifications and communications within the app.</li>
                      </ul>
                    </div>
                    <div className='flex-1 flex justify-center pt-6 md:pt-0 md:items-center'>
                      <img src={stakeholderInterview} alt="" className='w-52 md:w-[370px] h-52 md:h-[370px]' />
                    </div>
                  </div>
              </div>

              <div className='competitive-view my-10'>
                <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading mt-10 mb-6'>Competitive Analysis</h3>
                <p className='font-normal text-lg md:text-xl font-nb my-4 leading-8 md:leading-9'>I conducted competitive analysis with key competitors in the waste management industry in Nigeria and globally highlighting their strengths and weaknesses. The objectives of this analysis was to aid in designing a user-friendly and intuitive app as well as  identifying features that resonate with users to ensure the app is a success.  Below is the analysis done: .</p>
                <div className='grid grid-cols-2 md:grid-cols-4 my-6 space-x-0 md:space-x-4 space-y-4 md:space-y-0 gap-x-4 md:gap-x-0 font-nb'>
                  <div className="bg-white rounded-lg overflow-hidden flex-1 text-user-color py-4">
                    <div className="flex flex-col p-4">
                          <img src={Pakam} alt="Profile Picture" className="w-28 h-10 mb-2" />
                          <div>
                            <h5 className="font-normal text-base">Pakam</h5>
                          </div>
                    </div>
                        
                        <div className="px-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Strengths</h3>
                            <ul className="list-disc list-inside space-y-2">
                              <li>Existing focus on recycling in Nigeria</li>
                              <li>Established user base</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Weaknesses</h3>
                            <ul className="list-disc list-inside space-y-2">
                              <li>Limited to recyclable materials</li>
                              <li>Doesn't offer functionalities like processing of all waste types</li>
                              <li>Bill payments</li>
                            </ul>
                          </div>
                        </div>
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden flex-1 text-user-color py-4">
                    <div className="flex flex-col p-4">
                          <img src={BinWaste} alt="Profile Picture" className="w-10 h-10 mb-2" />
                          <div>
                            <h5 className="font-normal text-base">BinWaste</h5>
                          </div>
                    </div>
                        
                        <div className="px-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Strengths</h3>
                            <ul className="list-disc list-inside space-y-2">
                              <li>Established presence in Nigeria</li>
                              <li>Waste collection expertise</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Weaknesses</h3>
                            <ul className="list-disc list-inside space-y-2">
                              <li>Unclear waste collection process</li>
                              <li>Doesn't offer functionalities like user payouts</li>
                              <li>Does not process all waste types</li>
                            </ul>
                          </div>
                        </div>
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden flex-1 text-user-color py-4">
                    <div className="flex flex-col p-4">
                          <img src={Olio} alt="Profile Picture" className="w-10 h-10 mb-2" />
                          <div>
                            <h5 className="font-normal text-base">Olio</h5>
                          </div>
                    </div>
                        
                        <div className="px-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Strengths</h3>
                            <ul className="list-disc list-inside space-y-2">
                              <li>Strong focus on sustainability</li>
                              <li>Community-driven approach</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Weaknesses</h3>
                            <ul className="list-disc list-inside space-y-2">
                              <li>Limited to food waste</li>
                              <li>Does not handle processing</li>
                              <li>Does not offer services like bill payments</li>
                            </ul>
                          </div>
                        </div>
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden flex-1 text-user-color py-4">
                    <div className="flex flex-col p-4">
                          <img src={Dogwood} alt="Profile Picture" className="w-10 h-10 mb-2" />
                          <div>
                            <h5 className="font-normal text-base">DoGood</h5>
                          </div>
                    </div>
                        
                        <div className="px-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Strengths</h3>
                            <ul className="list-disc list-inside space-y-2">
                              <li>Established brand globally</li>
                              <li>Operational experience in waste collection</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Weaknesses</h3>
                            <ul className="list-disc list-inside space-y-2">
                              <li>Does not offer waste processing</li>
                              <li>Does not offer bill payment functionalities</li>
                            </ul>
                          </div>
                        </div>
                  </div>
                </div>

                <div className='p-8 bg-secondary-color flex flex-col md:flex-row justify-between rounded-lg'>
                  <div className='flex-1'>
                    <h3 className='text-project-primary font-bold text-[22px] md:text-2xl mb-4'>Key Insights from Competitive Analysis</h3>
                    <ul className='list-disc list-inside ml-1 md:ml-3 leading-8 md:leading-9 font-normal text-lg md:text-xl font-nb text-project-primary-fade space-y-2'>
                      <li>Catering to a broader range of waste types, including household waste, recyclables, and bulk items would allow onboarding of more users.</li>
                      <li>Providing a clear financial incentive for waste collection.</li>
                      <li>Allow users to conveniently pay bills within the app using the funds generated from waste collection.</li>
                      <li>Integrating chat functionalities for users to connect with waste collectors for better coordination.</li>
                    </ul>
                  </div>
                  <div className='flex-1 flex justify-center pt-6 md:pt-0 md:justify-end'>
                    <img src={userInterview} alt="" className='w-52 md:w-[370px] h-52 md:h-[370px]'/>
                  </div>
                </div>
              </div>

              <div className='problem-view my-20'>
                <div className='my-10 space-y-4'>
                  <h1 className='font-ogg font-bold text-2xl mb-4'>Define</h1>
                  <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading'>Problem Definition</h3>
                  <p className='leading-8 md:leading-9 font-normal text-lg md:text-xl font-nb'>In Nigeria, inadequate waste management infrastructure and lack of reliable services lead to 
                    inconsistent waste collection, improper disposal, and environmental pollution, resulting in health risks and community dissatisfaction. 
                    Additionally, limited awareness about sustainable waste practices and inadequate incentives for proper waste disposal contribute to the 
                    problem.</p>
                  <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading'>Personas</h3>
                  <p className='leading-8 md:leading-9 font-normal text-lg md:text-xl font-nb'>Based on the insights gathered, i created two personas that represent our ideal users.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 gap-x-12 my-6 font-nb px-2'>
                  <div className="bg-white rounded-lg overflow-hidden flex-1 text-user-color py-4">
                      <div className="flex items-center p-4">
                        <img src={Ojukwu} alt="Profile Picture" className="w-16 h-16 rounded-lg mr-4" />
                        <div>
                          <h2 className="text-xl md:text-2xl font-normal">Ojukwu Kunle</h2>
                          <h5 className="font-normal text-sm">43 years | Business Owner</h5>
                        </div>
                      </div>
                      
                      <div className="px-4">
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold">About</h3>
                          <p className="text-sm md:text-base font-normal leading-6">Chinedu is a 42-year-old small business owner from Enugu, running an electronics shop. 
                            He is married with three children and has a diploma in Business Management. Chinedu is focused on efficiently managing both his household 
                            and business waste to reduce costs and maintain a clean environment</p>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold">Goals</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li>Find convenient waste collection solutions that do not disrupt his work schedule</li>
                            <li>Reduce waste disposal costs for his business</li>
                            <li>Efficiently manage household and business waste</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold">Behavioral patterns</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li>Uses his smartphone for business transactions and communications</li>
                            <li>Familiar with mobile apps but prefers simple and easy-to-use interfaces</li>
                            <li>Prefers communication through SMS and phone calls</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold">Pain points</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li>High cost of waste disposal services for his business</li>
                            <li>Lack of reliable waste collection, leading to waste buildup</li>
                            <li>Limited knowledge about recycling benefits and processes</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-base md:text-lg font-semibold">Recommendations</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li>Emphasize cost savings from the app’s waste management services</li>
                            <li>Ensure the app provides reliable and timely waste collection</li>
                            <li>Offer easy-to-understand information about recycling benefits and processes</li>
                            <li>Provide options for scheduling pickups that align with business hours to avoid disruptions</li>
                          </ul>
                        </div>
                      </div>
                  </div>


                  <div className="bg-white rounded-lg overflow-hidden flex-1 text-user-color py-4">
                      <div className="flex items-center p-4">
                        <img src={Alexandra} alt="Profile Picture" className="w-16 h-16 rounded-lg mr-4" />
                        <div>
                          <h2 className="text-xl md:text-2xl font-normal">Adaeze Danjuma</h2>
                          <h5 className="font-normal text-sm">30 years | School Teacher</h5>
                        </div>
                      </div>
                      
                      <div className="px-4">
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold">About</h3>
                          <p className="text-sm md:text-base font-normal leading-6">Adaeze is a 30-year-old secondary school teacher living in Lagos. 
                            She is married with two young children and holds a Bachelor's degree in Education. Balancing her professional responsibilities with 
                            household duties, Adaeze is keen on maintaining a clean and sustainable home environment</p>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold">Goals</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li>Efficiently manage household waste</li>
                            <li>Educate her children about environmental sustainability</li>
                            <li>Earn extra income through proper waste disposal</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold">Behavioral patterns</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li>Frequently uses her smartphone for banking, shopping, and social media</li>
                            <li>Comfortable with using mobile apps for various services</li>
                            <li>Prefers receiving notifications via in-app messages and SMS</li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold">Pain points</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li>Limited time to handle household chores due to a busy teaching schedule</li>
                            <li>Irregular waste collection services in her area</li>
                            <li>Lack of awareness about local recycling options</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-base md:text-lg font-semibold">Recommendations</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li>Promote the app’s convenience and time-saving features</li>
                            <li>Highlight the financial rewards and incentives for proper waste disposal</li>
                            <li>Include educational content about recycling and sustainability</li>
                            <li>Ensure reliable and consistent waste collection services</li>
                          </ul>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className='sitemap-view my-5 md:my-10'>
                <h1 className='font-ogg font-bold text-2xl py-0 md:py-3'>Ideate</h1>
                
                <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading py-3'>Sitemap</h3>
                <p className='font-normal text-lg md:text-xl font-nb mt-2 mb-10 leading-8 md:leading-9'>Based on the requirements provided and research conducted I  created a site map to organize 
                  the 
                  pages, information, and navigation of the mobile application interface.</p>
                <img src={spctaSiteMap} alt=""/> 
              </div>

              <div className='userflow-view my-10'>
                <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading py-3'>User Flow</h3>
                <p className='font-normal text-lg md:text-xl font-nb mb-4 py-3 leading-8 md:leading-9'>To further define users’ actions, we created user flow for a waste generator to gain a better 
                  understanding of how users will use it and create clear communication with all parties involved.</p>
                <img src={spctaUserFlow} alt="" />
              </div>

              <div className='design-view my-16'>
                <h1 className='font-ogg font-bold text-2xl py-3'>Design</h1>
                
                <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading py-3'>Wireframes</h3>
                <p className='font-normal text-lg md:text-xl font-nb pb-8 leading-8 md:leading-9'>I created  wireframes based on sketches done, to act as the foundation for a mobile app's design, 
                  laying the groundwork for functionality and user experience.</p>
                <img src={spctaWireFrame} alt="" />
              </div>

              <div className='hifi-view my-10'>
                <h3 className='font-ogg font-bold text-[22px] md:text-2xl text-project-heading py-6'>High-Fidelity Design & Prototyping</h3>
                <p className='font-normal text-lg md:text-xl font-nb mb-4 leading-8 md:leading-9'>After creating the wireframes, I moved on to create the high-fidelity designs on Figma as well as 
                  prototype. I ensured I carried the team along during this process by communicating effectively with the product manager and scheduling regular 
                  meetings with the stakeholders to present the prototype, to ensure all the expected requirements are met and ensure an effective feedback process.</p>
                <div className='p-8 bg-white flex flex-col items-center rounded-lg my-4'>
                  <img src={spctaHifi} alt="" />
                  <button className='flex justify-center text-center items-center mt-4 py-3 px-0 md:px-5 font-workSans bg-live-button text-white border-none rounded-lg gap-0 w-full md:w-[250px] md:gap-2'>View Live Website <span><img src={Rocket} alt="" className='ml-2'/></span></button>
                </div>
              </div>

              <div className='text-white takeaway-view my-10'>
                  <h3 className='font-bold text-2xl mb-4'>Key Takeaway</h3>
                  <hr className='my-2 w-[104px] h-[3px] text-[#E8DEFF]'/>
                  <ul className='list-disc list-inside ml-3 leading-8 md:leading-9 font-normal text-lg md:text-xl font-nb space-y-2'>
                    <li>It helped me better understand the pain point of users interacting with hotel websites and a better knowledge of the hospitality industry. It was also a fun and new experience.</li>
                    <li>During the user research process, it revealed contradictory preferences among different user segments. For example, some users prioritized simplicity and ease of use, while others preferred more advanced features and customization options.</li>
                    <li>The project faced challenges, but the most difficult piece was the inadequate documentation from the product team and the delayed communication in regards to feedback. Thankfully, we were able to be more flexible with our timing so as for everyone to be present when needed.</li>
                    <li>While the whole project was a huge learning experience, I especially loved the research aspect which helped take the ambiguity out of our designs, also loved the moodboarding and sketching, it felt good seeing my concepts come into high-fidelity design.</li>
                  </ul>
              </div>

          </section>  
        </div>

        <Project available={false}/>

        <ContactForm />
    
    </>
  )
}

export default Specta