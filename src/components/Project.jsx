import { projects } from "../data"
import ProjectCard from "./ProjectCard"
import SectionTitle from "./SectionTitle"


const Project = () => {
  return (
    <section id="projects" className="py-20 align-element">
        <SectionTitle text='Projects'/>
        <div className="py-16 grid gap-8 lg:grid-cols-3  ">
            {
                projects.map((project)=>{
                   return (
                    <ProjectCard key={project.id} {...project}/>
                   )
                })
            }
        </div>
    </section>
  )
}

export default Project