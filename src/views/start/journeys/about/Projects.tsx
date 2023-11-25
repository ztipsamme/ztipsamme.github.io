import { useContext } from 'react'
import Section from '../../../../UI/Section'
import { SelectedProjectsContext } from '../../../../context/context'
import { projects } from '../../../../data'

const Projects = () => {
  const { amountOfSelectetProjects } = useContext(SelectedProjectsContext)

  return (
    <Section id="projects" className="content">
      <h2 className="section-header text-primary">Projects</h2>
      <h3 className="text-h1 mb-8">Selected projects</h3>
      <ul className="">
        {projects.map(
          (project, index) =>
            index <= amountOfSelectetProjects && (
              <li
                id={project.name.replace(' ', '-').toLowerCase()}
                key={project.name.replace(' ', '-').toLowerCase()}
                className="card mb-8"
              >
                <img src={project.img} alt="" className="card-img shadow" />

                <h4 className="text-h2 ">{project.name}</h4>
                <p>{project.description}</p>

                <div className="card-btns flex gap-4">
                  {project.repo.length > 0 && (
                    <a
                      href={project.repo}
                      target="_blank"
                      className="border-primary border-2 rounded-full px-6 py-3 text-primary font-bold shadow"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {project.demo.length > 0 && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="border-primary border-2 rounded-full px-6 py-3 text-primary font-bold shadow"
                    >
                      Link to demo
                    </a>
                  )}
                </div>
              </li>
            )
        )}
      </ul>
    </Section>
  )
}

export default Projects
