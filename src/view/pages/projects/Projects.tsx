import { useState } from "react"
import useModal from "../../../hooks/useModal"
import { Modal } from "../../components/modal/Modal"
import { ProjectItem } from "./projectItem/ProjectItem"
import "./projects.scss"

// type Project = {
//   number: number,
//   title: string
// }


export const Projects: React.FC = () => {
  const { isOpen, toggle } = useModal();
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
    setAr([...ar, { id: ++fakeId, title: `${title}` }])
    toggle()
  }

  const projects = ar.map(proj => <ProjectItem
    key={proj.id}
    num={++fakeId}
    title={proj.title}
  />)

  return (
    <div className="projects">
      <h1 className="title">Выберете проект</h1>

      <Modal isOpen={isOpen} toggle={toggle} create={create} >
        <input className="mod-input" type="text" placeholder="title" />
        <button className="mod-but" onClick={() => create()}>create</button>
      </Modal>

      <div className="projects__all-project">
        {projects}
        <div className="project-item">
          <button
            className="projects__all-project-button"
            onClick={() => toggle()}>+ create your project
          </button>
        </div>
      </div>
    </div>
  )
}