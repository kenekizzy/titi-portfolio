/* eslint-disable react/prop-types */
import vectorIcon from '../assets/icons/Vector.svg'

const ProjectCard = ({projectName, projectDescription, projectImage}) => {
  return (
    <div className="bg-card-background border border-none my-8 rounded-md shadow-lg p-6 w-card-width h-card-height hover:animate-bounce">
          <div className=''>
            <div className="flex justify-between items-center">
                <h2 className='font-medium text-base text-card-heading'>WEBSITE</h2>
                <span className="rounded-card py-1 px-3 bg-card-coming-soon gap-2.5">Coming Soon</span>
            </div>
            <div className="mb-8 space-y-4">
                <h3 className='font-normal text-4xl text-white'>{projectName}</h3>
                <p className='font-normal text-lg text-card-description'>{projectDescription}</p>
                <p className='font-normal text-lg text-white inline-flex'>See my work <span className='inline mt-1 mx-1'><img src={vectorIcon} alt="vectorIcon" /></span></p>
            </div>
            <div>
                <img src={projectImage} alt="" className='w-96 h-96'/>
            </div>
          </div>
      </div>
  )
}

export default ProjectCard