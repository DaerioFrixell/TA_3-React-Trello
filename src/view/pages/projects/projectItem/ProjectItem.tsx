import { Link } from "react-router-dom"
import "./projectItem.scss"

type ProjectNum = {
  num: number
  title: string
}

export const ProjectItem: React.FC<ProjectNum> = (props: ProjectNum) => {
  return (
    <>
      <div className="project-item">
        <Link
          className="project-item-link"
          to="/project">
          <p className="project-item-title">{props.num}. {props.title} </p>
        </Link>
      </div>
    </>
  )
}