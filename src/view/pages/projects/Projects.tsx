import { useAction } from "../../../hooks/useAction"
import useModal from "../../../hooks/useModal"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { Modal } from "../../components/modal/Modal"
import { ProjectItem } from "./projectItem/ProjectItem"
import "./projects.scss"

export const Projects: React.FC = () => {
  const { isOpen, toggle } = useModal();
  const { project } = useTypedSelector(state => state.project)
  const { addProjectAction } = useAction()
  let Id = 0;

  const projects = (project.length)
    ? project.map(proj => <ProjectItem
      key={proj.id}
      num={++Id}
      title={proj.title} />)
    : <p>создайте проект</p>

  const create = (title: string = "newProj"): void => {
    addProjectAction({ id: ++Id, title: `${title}` })
    toggle()
  }

  return (
    <div className="projects">
      <h1 className="title">Выберете проект</h1>

      <Modal isOpen={isOpen} toggle={toggle} create={create} >
        <div className="projects-modal">
          <input className="projects-modal-input" type="text" placeholder="title" />
          <button className="projects-modal-button" onClick={() => create()}>create</button>
        </div>
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