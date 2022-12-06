import { useState, memo, useMemo } from "react"
import { useAction } from "../../../hooks/useAction"
import useModal from "../../../hooks/useModal"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { Modal } from "../../components/modal/Modal"
import { ProjectItem } from "./projectItem/ProjectItem"
import nextId from "react-id-generator";
import "./projects.scss"

export const Projects: React.FC = memo(() => {
  const [titleProj, setTitleProj] = useState("")
  const { isOpen, toggle } = useModal();
  const { project } = useTypedSelector(state => state.project)
  const { addProjectAction } = useAction()

  let Id = 0;
  const projects = useMemo(() => {
    return (project.length)
      ? project.map(proj =>
        <ProjectItem
          key={proj.id}
          id={proj.id}
          num={++Id}
          title={proj.title} />)
      : "";
  }, [project])

  const createProj = (title: string = titleProj) => {
    addProjectAction({ id: nextId(), title: title })
    toggle()
  }

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setTitleProj(newValue)
  }

  return (
    <div className="projects">
      <h1 className="title">Выберете проект</h1>

      <Modal isOpen={isOpen} toggle={toggle} create={createProj} >
        <div className="projects-modal">
          <input
            className="projects-modal-input"
            type="text"
            placeholder="title"
            onChange={handlerChange}
          />
          <button className="projects-modal-button" onClick={() => createProj()}>create</button>
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
})