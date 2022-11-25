import { Link } from "react-router-dom"
import { JsxElement } from "typescript"
import "./projectItem.scss"

type ProjectNum = {
  num: number
  title: string
}

const createNewProj = (num: number, title: string) => {
  console.log('create')
}



export const ProjectItem: React.FC<ProjectNum> = (props: ProjectNum) => {


  return (
    <>

      <div className="project-item">
        <Link
          className="project-item-link"
          to="/tasks">
          <p className="project-item-title">{props.title} {props.num}</p>
        </Link>
      </div>



    </>
  )
}