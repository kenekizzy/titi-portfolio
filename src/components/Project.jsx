import ProjectCard from "./ProjectCard"
import aqualina from '../assets/images/Aqualina mockup.png'
import fotologue from '../assets/images/fotologue mockup.png'
import NC from '../assets/images/nc-mockup.png'
import sabiroad from '../assets/images/sabi road mockup.png'
import spcta from '../assets/images/spcta mock up.png'
import menopays from '../assets/images/menopays mockup.png'

const Project = () => {
  return (
    <section className='px-0 md:px-32 my-12 text-white'>
       <h2 className="font-normal text-2xl">Selected Projects</h2>
       <hr className='my-2 w-[104px] h-[3px]'/>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <ProjectCard projectName={'Aqualina'} projectDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit magni assumenda minima nobis reiciendis aliquam quia sed quas explicabo' projectImage={aqualina} />
            <ProjectCard projectName={'NairaCompare'} projectDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit magni assumenda minima nobis reiciendis aliquam quia sed quas explicabo' projectImage={NC} />
            <ProjectCard projectName={'SabiRoad'} projectDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit magni assumenda minima nobis reiciendis aliquam quia sed quas explicabo' projectImage={sabiroad} />
            <ProjectCard projectName={'SPCTA'} projectDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit magni assumenda minima nobis reiciendis aliquam quia sed quas explicabo' projectImage={spcta} />
            <ProjectCard projectName={'Fotologue'} projectDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit magni assumenda minima nobis reiciendis aliquam quia sed quas explicabo' projectImage={fotologue} />
            <ProjectCard projectName={'Menopay'} projectDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit magni assumenda minima nobis reiciendis aliquam quia sed quas explicabo' projectImage={menopays} />
        </div>
    </section>
  )
}

export default Project