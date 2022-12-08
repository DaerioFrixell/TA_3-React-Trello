import React from "react"
import { Link } from "react-router-dom"
import { useAction } from "../../../../hooks/useAction"
import "./projectItem.scss"

type ProjectNum = {
  id: string
  num: number
  title: string
}

export const ProjectItem: React.FC<ProjectNum> = React.memo((props: ProjectNum) => {
  const { removeProjectAction } = useAction();
  const removeProj = (id: string) => {
    removeProjectAction(id)
  }
  return (
    <>
      <div className="project-item">
        <Link
          className="project-item-link"
          to="/project">
          <p className="project-item-title">{props.num}. {props.title} </p>
        </Link>
        <button className="project-item-rembut" onClick={() => removeProj(props.id)}>delete project</button>
      </div>
    </>
  )
})