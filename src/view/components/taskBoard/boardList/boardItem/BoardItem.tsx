
import { Board } from "../../../../../model/board/boardTypes"
import React from "react"
import { TaskItem } from "./taskItem/taskItem"
import { Reorder } from "framer-motion"
import "./boardItem.scss"

export const BoardItem: React.FC<Board> = ({ id, tasks, title }) => {
  const [allTasks, setAllTasks] = React.useState(tasks)
  const viewAllTasks = allTasks.map((t) =>
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
        numberTask={t.numberTask}
        title={t.title}
        description={t.description}
        createDate={t.createDate}
        priority={t.priority}
        status={t.status}
        comment={t.comment}
        subTasks={t.subTasks}
      />
    </Reorder.Item>)

  return (
    <Reorder.Group as="div"
      axis={"y"}
      className="board-item"
      values={allTasks}
      onReorder={setAllTasks}>
      <p className="board-item-title">{title}</p>
      {viewAllTasks}
    </Reorder.Group>
  )
}