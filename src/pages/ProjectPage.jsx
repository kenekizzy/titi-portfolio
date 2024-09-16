import Project from "../components/Project"

const ProjectPage = () => {
  return (
    <>
        <section className="container-custom py-4 px-4 md:px-24  text-white">
            <h2 className="font-bold font-ogg text-3xl md:text-5xl w-full md:w-[60%]">Here are some of my most recent work, A few of them are not yet live but in due time</h2>
        </section>

        <Project />
    </>
  )
}

export default ProjectPage