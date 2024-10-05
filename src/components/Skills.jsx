import UIICON from '../assets/icons/ui-design.svg'
import graphicIcon from '../assets/icons/graphic-design.svg'
import wireframeIcon from '../assets/icons/wireframe.svg'
import designIcon from '../assets/icons/design-system.svg'
import frontEndIcon from '../assets/icons/front-end.svg'
import creativeIcon from '../assets/icons/creatives.svg'
import Suretree from '../assets/icons/suretree.svg'
import Lucidray from '../assets/icons/lucid-ray.svg'
import Hybr from '../assets/icons/hybr.svg'
import Farmforte from '../assets/images/farmforte.png'
import Ontres from '../assets/icons/ontres.svg'

const Skills = () => {
  return (
    <div className='bg-portfolio'>
        <section className='flex flex-col container-custom py-0 md:pt-8 md:pb-24 px-4 md:px-24  font-nb'>
            <div className='bg-white p-4 md:p-8 rounded-lg'>
                <div className='skill'>
                    <h1 className='font-bold text-3xl leading-9 my-2 font-ogg'>My Skills</h1>
                    <hr className='text-[#282828] w-[125px] h-[1px] border-2 rounded-full'/>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="flex flex-col md:flex-row">
                            <img src={UIICON} alt="" className="w-8 h-8" />
                            <div className="mb-6 mx-0 md:mx-4 pt-4 md:pt-0">
                            <h2 className="font-bold text-2xl font-ogg leading-7">UI Design</h2>
                            <p className="font-normal text-about-text text-lg pt-4">
                                Crafting visually appealing and intuitive user interfaces that enhance user engagement and satisfaction.
                            </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <img src={graphicIcon} alt="" className="w-8 h-8" />
                            <div className="mb-6 mx-0 md:mx-4 pt-4 md:pt-0">
                            <h2 className="font-bold font-ogg text-2xl leading-7">Graphic Design</h2>
                            <p className="font-normal text-about-text text-lg pt-4">
                                Applying fundamental design principles including color theory, typography, layout, and composition to create effective designs across various media.
                            </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <img src={wireframeIcon} alt="" className="w-8 h-8" />
                            <div className="mb-6 mx-0 md:mx-4 pt-4 md:pt-0">
                            <h2 className="font-bold font-ogg text-2xl leading-7">Wireframing & Prototyping</h2>
                            <p className="font-normal text-about-text text-lg pt-4">
                                Creating low and high-fidelity representations of design concepts to effectively communicate ideas and test user interactions.
                            </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <img src={designIcon} alt="" className="w-8 h-8" />
                            <div className="mb-6 mx-0 md:mx-4 pt-4 md:pt-0">
                            <h2 className="font-bold font-ogg text-2xl leading-7">Design Systems</h2>
                            <p className="font-normal text-about-text text-lg pt-4">
                                Establishing and maintaining cohesive design languages and component libraries to ensure consistency across products and streamline the design process.
                            </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <img src={frontEndIcon} alt="" className="w-8 h-8" />
                            <div className="mb-6 mx-0 md:mx-4 pt-4 md:pt-0">
                            <h2 className="font-bold font-ogg text-2xl leading-7">Front-end Development</h2>
                            <p className="font-normal text-about-text text-lg pt-4">
                                Leveraging knowledge of HTML and CSS to better collaborate with developers and create more feasible designs, bridging the gap between design and implementation.
                            </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <img src={creativeIcon} alt="" className="w-8 h-8" />
                            <div className="mb-6 mx-0 md:mx-4 pt-4 md:pt-0">
                            <h2 className="font-bold font-ogg text-2xl leading-7">Creative Direction</h2>
                            <p className="font-normal text-about-text text-lg pt-4">
                                Leading cross-functional teams to align on design vision, facilitate design thinking, and deliver cohesive product experiences.
                            </p>
                            </div>
                        </div>
                        </div>

                </div>

                <div className='experience mt-16'>
                    <h1 className='font-bold text-3xl leading-9 my-2 font-ogg'>Work Experience</h1>
                    <hr className='text-[#282828] w-[125px] h-[1px] border-2 rounded-full'/>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="rounded overflow-hidden border py-3 border-gray-300 bg-white">
                            <img className="w-40 h-10 px-2 md:px-6" src={Suretree} alt="test" />
                            <div className="px-3 md:px-6 py-4 space-y-3">
                                <div className="font-bold text-xl md:text-2xl font-ogg my-1">Suretree Systems</div>
                                <div className="font-normal text-sm md:text-xl mb-2 font-nb">Lead Product Designer</div>
                                <p className="text-gray-700 text-sm md:text-base font-normal font-nb">May 2022 - Present</p>
                            </div>
                        </div>

                        <div className="rounded overflow-hidden border py-3 border-gray-300 bg-white">
                            <img className="w-40 h-10 px-2 md:px-6" src={Farmforte} alt="test" />
                            <div className="px-3 md:px-6 py-4 space-y-3">
                                <div className="font-bold text-xl md:text-2xl font-ogg my-1">Farmforte</div>
                                <div className="font-normal font-nb text-sm md:text-xl mb-2">UI/UX Designer</div>
                                <p className="text-gray-700 font-normal font-nb text-sm md:text-base">August 2021 - May 2022</p>
                            </div>
                        </div>

                        <div className="rounded overflow-hidden border py-3 border-gray-300 bg-white">
                            <img className="w-40 h-10 px-2 md:px-6" src={Lucidray} alt="test" />
                            <div className="px-3 md:px-6 py-4 space-y-3">
                                <div className="font-bold text-xl md:text-2xl font-ogg my-1">Lucid Ray Limited</div>
                                <div className="font-normal font-nb text-sm md:text-xl mb-2">UI/UX Designer</div>
                                <p className="text-gray-700 font-normal font-nb text-sm md:text-base">April 2021 – August 2021</p>
                            </div>
                        </div>

                        <div className="rounded overflow-hidden border py-3 border-gray-300 bg-white">
                            <img className="w-40 h-10 px-2 md:px-6" src={Hybr} alt="test" />
                            <div className="px-3 md:px-6 py-4 space-y-3">
                                <div className="font-bold text-xl md:text-2xl font-ogg my-1">HYBR Group</div>
                                <div className="font-normal font-nb text-sm md:text-xl mb-2">UI/UX Designer</div>
                                <p className="text-gray-700 font-normal font-nb text-sm md:text-base">January 2021 – April 2021</p>
                            </div>
                        </div>

                        <div className="rounded overflow-hidden border py-3 border-gray-300 bg-white">
                            <img className="w-40 h-10 px-2 md:px-6" src={Ontres} alt="test" />
                            <div className="px-3 md:px-6 py-4 space-y-3">
                                <div className="font-bold text-xl md:text-2xl font-ogg my-1 text-wrap">Onteres Consulting</div>
                                <div className="font-normal font-nb text-sm md:text-xl mb-2">UI/UX Designer</div>
                                <p className="text-gray-700 font-nb font-normal text-sm md:text-base">November 2019 – December 2020</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
    
  )
}

export default Skills