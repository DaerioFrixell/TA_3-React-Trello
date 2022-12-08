import React, { useEffect, useState, FC } from "react"
import { TaskItem } from "./taskItem/taskItem"
import { Reorder } from "framer-motion"
import "./tasksList.scss"
import { useTypedSelector } from "../../../../../hooks/useTypedSelector"
import { Task } from "../../../../../model/task/tasksType"
import nextId from "react-id-generator";

type TasksListType = {
  indexBoard: number
}

export const TasksList: FC<TasksListType> = ({ indexBoard }) => {
  const allTasks = useTypedSelector(state => state.taskBoard.boards[indexBoard].tasks)

  let numTask = 0;
  const viewAllTasks = (allTasks.length)
    ? allTasks.map(t =>
      <Reorder.Item
        value={t}
        key={nextId()}
        initial={{}}
        animate={{}}
        exit={{}}
      >
        <TaskItem
          key={t.id}
          id={t.id}
          numberTask={++numTask}
          title={t.title}
          description={t.description}
          createDate={t.createDate}
          priority={t.priority}
          status={t.status}
          comment={t.comment}
          subTasks={t.subTasks}
        />
      </Reorder.Item>)
    : <p>no tasks</p>

  const setAllTasks = (newOrder: Task[]) => { }
  return (
    <Reorder.Group as="div"
      axis={"y"}
      className="board-item"
      values={allTasks}
      onReorder={setAllTasks}>
      {viewAllTasks}
    </Reorder.Group>
  )
}