import Project from "../components/Project"

const ProjectPage = () => {
  return (
    <>
        <section className="container-custom py-4 px-4 md:px-0  text-white">
            <h2 className="font-bold text-3xl md:text-5xl w-full md:w-[843px]">Here are some of my most recent work, A few of them are not yet live but in due time</h2>
        </section>

        <Project />
    </>
  )
}

export default ProjectPage