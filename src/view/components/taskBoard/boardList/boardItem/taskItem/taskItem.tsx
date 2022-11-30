import { Task } from "../../../../../../model/task/tasksType"


import "./taskItem.scss"


export const TaskItem = (props: Task) => {
  const asd = (id: number) => {
    console.log(id)
  }

  return (
    <div
      className="task-item"
      onClick={() => asd(props.id)}>
      <p className="task-item-title">{props.title}</p>
      <p className="task-item-description">{props.description}</p>
    </div>
  )
}