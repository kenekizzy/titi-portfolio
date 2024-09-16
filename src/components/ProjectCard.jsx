/* eslint-disable react/prop-types */
import vectorIcon from '../assets/icons/Vector.svg'
import { Link } from 'react-router-dom'

const ProjectCard = ({projectName, projectDescription, projectImage, available}) => {
  return (
    <div className="bg-card-background border border-none my-8 rounded-md shadow-lg p-6 md:h-card-height md:hover:animate-bounce">
          <div className=''>
            <div className="flex justify-between items-center">
                <h2 className='font-medium text-[14px] md:text-base font-workSans text-card-heading'>WEBSITE</h2>
                {!available && <span className="rounded-card py-1 px-3 bg-card-coming-soon gap-2.5 font-workSans">Coming Soon</span>}
            </div>
            <div className="mb-8 space-y-4">
                <h3 className='font-normal text-2xl md:text-4xl text-white font-ogg'>{projectName}</h3>
                <p className='font-normal text-base md:text-lg text-card-description font-nb'>{projectDescription}</p>
                {available ? (
                  <Link to={`/project/${projectName}`}>
                    <p className='font-normal cursor-pointer text-base md:text-lg text-white inline-flex font-nb'>See my work <span className='inline mt-1 mx-1'><img src={vectorIcon} alt="vectorIcon" /></span></p>
                  </Link>
                ) : (
                  <p className='font-normal text-base md:text-lg text-white inline-flex font-nb'>See my work <span className='inline mt-1 mx-1'><img src={vectorIcon} alt="vectorIcon" /></span></p>
                )}
                
            </div>
            <div>
                <img src={projectImage} alt="" className='w-96 h-96'/>
            </div>
          </div>
      </div>
  )
}

export default ProjectCard