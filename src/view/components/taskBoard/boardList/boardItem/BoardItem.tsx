
import { Board } from "../../../../../model/board/boardTypes"
import React from "react"
import { TaskItem } from "./taskItem/taskItem"
import { Reorder } from "framer-motion"
import "./boardItem.scss"



export const BoardItem = (props: Board) => {
  const [allTasks, setAllTasks] = React.useState(props.tasks)

  const tasks = allTasks.map((t, index) =>
    <Reorder.Item
      value={t}
      key={t.id}
      initial={{}}
      animate={{}}
      exit={{}}

    >
      <TaskItem
        key={t.id}
        id={t.id}
        title={t.title}
        description={t.description}
      />
    </Reorder.Item>)

  return (
    <Reorder.Group as="div"
      axis={"x" || "y"}
      className="board-item"
      values={allTasks}
      onReorder={setAllTasks}>
      <p className="board-item-title">{props.title}</p>
      {tasks}
    </Reorder.Group>
  )
}