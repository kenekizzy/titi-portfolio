/* eslint-disable react/prop-types */
import vectorIcon from '../assets/icons/Vector.svg'
import directionArrow from '../assets/icons/direction-arrow.svg'
import { Link } from 'react-router-dom'

const ProjectCard = ({projectName, projectDescription, projectImage, available, version = 'website'}) => {

  const getBounceOutColor = (projectName) => {
    const colorMapping = {
      Aqualina: '#3993CF66',
      SPCTA: '#5A9B0180',
      Fotologue: '#F15B2B80',
      NairaCompare: '#E6A21B80',
      SabiRoad: '#00A65180',
      Menopay: "#E76A3B80"
    };
    return colorMapping[projectName] || '#ff0000';
  };
  
  return (
    <Link to={`/project/${projectName}`}>
      <div
      className="relative bg-card-background border border-none my-8 rounded-md shadow-lg p-6 md:h-card-height md:hover:animate-bounce"
      style={{
        '--bounce-start-bg': getBounceOutColor(projectName),
        '--bounce-mid-bg': getBounceOutColor(projectName),
        '--bounce-end-bg': getBounceOutColor(projectName),
      }}
    >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-sm md:text-lg font-workSans text-card-heading tracking-wider">
            {version.toUpperCase()}
          </h2>
          {!available && (
            <span className="rounded-card py-1 px-3 bg-card-coming-soon gap-2.5 font-workSans font-medium md:font-normal text-[12px] md:text-sm">
              Coming Soon
            </span>
          )}
        </div>

        <div className="mt-2 md:mt-0 mb-8 space-y-4">
          <h3 className="font-normal text-[28px] md:text-4xl tracking-wide text-white font-oggBook">
            {projectName}
          </h3>
          <p className="font-normal text-base md:text-lg text-card-description font-nb group-hover:text-[#EDEDED]">
            {projectDescription}
          </p>

          {available ? (
            <Link to={`/project/${projectName}`}>
              <p className="font-normal cursor-pointer text-base md:text-lg text-white inline-flex font-nb mt-6 md:mt-3">
                See my work{' '}
                <span className="inline mt-0 md:mt-1 mx-3">
                  <img src={vectorIcon} alt="vectorIcon" />
                </span>
              </p>
            </Link>
          ) : (
            <p className="font-normal text-base md:text-lg text-white inline-flex font-nb mt-6 md:mt-3">
              See my work{' '}
              <span className="inline mt-1 mx-3">
                <img src={vectorIcon} alt="vectorIcon" />
              </span>
            </p>
          )}
        </div>

        <div>
          <img src={projectImage} alt="" className="w-96 h-full md:h-96" />
        </div>
      </div>
      <img
        src={directionArrow}
        alt=""
        className="absolute bottom-3 right-3"
      />
    </div>

    </Link>

  )
}

export default ProjectCard