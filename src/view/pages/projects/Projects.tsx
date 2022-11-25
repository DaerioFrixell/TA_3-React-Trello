import { useState } from "react"
import { ProjectItem } from "./projectItem/ProjectItem"
import "./projects.scss"

// type Project = {
//   number: number,
//   title: string
// }


export const Projects: React.FC = () => {
  const [ar, setAr] = useState([
    {
      id: 1,
      title: 'proj'
    },
    {
      id: 2,
      title: 'proj'
    }
  ])

  let fakeId = 0;
  const create = (title: string = "newProj"): void => {
    setAr([...ar, { id: fakeId++, title: `${title}` }])
  }

  const projects = ar.map(proj => <ProjectItem
    key={proj.id}
    num={++fakeId}
    title={proj.title}
  />)

  return (
    <div className="projects">
      {projects}
      <div className="project-item">
        <button
          className="projects-button"
          onClick={() => create()}>+ create your project
        </button>
      </div>
    </div>
  )
}