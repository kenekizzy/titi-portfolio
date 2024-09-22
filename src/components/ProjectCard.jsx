/* eslint-disable react/prop-types */
import vectorIcon from '../assets/icons/Vector.svg'
import { Link } from 'react-router-dom'

const ProjectCard = ({projectName, projectDescription, projectImage, available}) => {

  const getBounceOutColor = (projectName) => {
    const colorMapping = {
      Aqualina: '#3993CF66',
      SPCTA: '#5A9B0180',
      Fotologue: '#F15B2B80',
      NairaCompare: '#E6A21B80',
      SabiRoad: '#00A65180',
    };
    return colorMapping[projectName] || '#ff0000';
  };
  
  return (
    <div className="bg-card-background border border-none my-8 rounded-md shadow-lg p-6 md:h-card-height md:hover:animate-bounce" style={{
      '--bounce-start-bg': getBounceOutColor(projectName),
      '--bounce-mid-bg': getBounceOutColor(projectName), 
      '--bounce-end-bg': getBounceOutColor(projectName),
    }}>
          <div className=''>
            <div className="flex justify-between items-center">
                <h2 className='font-medium text-[14px] md:text-base font-workSans text-card-heading'>WEBSITE</h2>
                {!available && <span className="rounded-card py-1 px-3 bg-card-coming-soon gap-2.5 font-workSans font-medium text-sm">Coming Soon</span>}
            </div>
            <div className="mb-8 space-y-4">
                <h3 className='font-normal text-2xl md:text-4xl text-white font-ogg'>{projectName}</h3>
                <p className='font-normal text-base md:text-lg text-card-description font-nb md:hover:text-[#EDEDED]'>{projectDescription}</p>
                {available ? (
                  <Link to={`/project/${projectName}`}>
                    <p className='font-normal cursor-pointer text-base md:text-lg text-white inline-flex font-nb mt-3'>See my work <span className='inline mt-1 mx-3'><img src={vectorIcon} alt="vectorIcon" /></span></p>
                  </Link>
                ) : (
                  <p className='font-normal text-base md:text-lg text-white inline-flex font-nb mt-3'>See my work <span className='inline mt-1 mx-3'><img src={vectorIcon} alt="vectorIcon" /></span></p>
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