/* eslint-disable react/prop-types */
import ProjectCard from "./ProjectCard"
import aqualina from '../assets/images/Aqualina mockup.png'
import fotologue from '../assets/images/fotologue mockup.png'
import NC from '../assets/images/nc-mockup.png'
import sabiroad from '../assets/images/sabi road mockup.png'
import spcta from '../assets/images/spcta mock up.png'
import menopays from '../assets/images/menopays mockup.png'

const Project = ({ available = true }) => {
  return (
    <section className='container-custom px-4 md:px-24 my-12 text-white'>
       <h2 className="font-normal text-2xl font-nb">Selected Projects</h2>
       <hr className='my-2 w-[104px] h-[3px]'/>
        {available && <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16'>
            <ProjectCard projectName={'Aqualina'} projectDescription='A user-friendly e-commerce platform where customers can design and purchase personalized cards for various occasions. The platform offers a wide range of customiz...' projectImage={aqualina} available={true} />
            <ProjectCard projectName={'SPCTA'} projectDescription='This project addresses the pressing issue of plastic pollution in Nigeria by developing a comprehensive solution that simultaneously tackles unemployment, .rec...' projectImage={spcta} available={true}/>
            <ProjectCard projectName={'NairaCompare'} projectDescription='A user-friendly platform that simplifies the process of comparing financial products. Users can easily navigate through various savings and loan options offered by diff...' projectImage={NC} available={false}/>
            <ProjectCard projectName={'SabiRoad'} projectDescription='A centralized hub for internal staff to oversee customer interactions, order processing, sales performance, and generate comprehensive reports. Its goal is to simplify w...' projectImage={sabiroad} available={false}/>
            <ProjectCard projectName={'Fotologue'} projectDescription='A user-friendly e-commerce platform where customers can design and purchase personalized cards for various occasions. The platform offers a wide range of customiz...' projectImage={fotologue} available={false}/>
            <ProjectCard projectName={'Menopay'} projectDescription='A mobile app that empowers users to make purchases on credit. It offers flexible repayment options, allowing users to pay back at a more convenient time. Designed to enh...' projectImage={menopays} available={false}/>
        </div>}
        {!available && <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16'>
            <ProjectCard projectName={'Aqualina'} projectDescription='A user-friendly e-commerce platform where customers can design and purchase personalized cards for various occasions. The platform offers a wide range of customiz...' projectImage={aqualina} available={true} />
            <ProjectCard projectName={'Menopay'} projectDescription='A mobile app that empowers users to make purchases on credit. It offers flexible repayment options, allowing users to pay back at a more convenient time. Designed to enh...' projectImage={menopays} available={false}/>
        </div>}
    </section>
  )
}

export default Project