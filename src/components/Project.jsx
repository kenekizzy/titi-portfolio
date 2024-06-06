import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <section className='bg-card bg-center bg-no-repeat text-white'>
        <h5>Selected Projects</h5>
        <div className='flex flex-col md:flex-row md:justify-around md:flex-wrap'>
            <ProjectCard />
        </div>
    </section>
  )
}

export default Project