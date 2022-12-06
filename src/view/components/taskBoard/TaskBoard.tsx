import "./taskBoard.scss"
import { useState } from "react"
import { BoardList } from "./boardList/BoardList"
import { Link } from "react-router-dom"
import { Modal } from "../modal/Modal"
import useModal from "../../../hooks/useModal"
import { useAction } from "../../../hooks/useAction"
import nextId from "react-id-generator";

export const TaskBoard = () => {
  const { isOpen, toggle } = useModal()
  const { addTaskAction } = useAction()
  const [titleTask, setTitleTask] = useState("")
  const [descriptionTask, setDescriptionTask] = useState("")

  let Id = 0;
  const addTask = (
    priority = "low",
    status = "Queue",
    comment = "add Queue comm 1",
    subTasks = "add Queue subComm 1"
  ): void => {
    addTaskAction({
      id: nextId(),
      numberTask: ++Id,
      title: titleTask,
      description: descriptionTask,
      createDate: new Date(),
      priority: priority,
      status: status,
      comment: comment,
      subTasks: subTasks,
    })
    toggle()
  }

  const handlerChangeNameTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitleTask = e.currentTarget.value
    setTitleTask(newTitleTask)
  }

  const handlerChangeDescriptionTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDescriptionTask = e.currentTarget.value
    setDescriptionTask(newDescriptionTask)
  }

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const a = e.target.value
  }

  return (
    <div className="task-board">
      <Link
        className="task-board-link"
        to="/chooseproject">
        <h1 className="task-board-link-title">Вернуться на главную</h1>
      </Link>

      <Modal isOpen={isOpen} toggle={toggle} create={() => { }}>
        <div className="tb-modal">
          <input
            className="tb-modal-input"
            type="text"
            placeholder="название таски"
            value={titleTask}
            onChange={handlerChangeNameTask} />
          <input
            className="tb-modal-input"
            type="text"
            placeholder="описание таски"
            value={descriptionTask}
            onChange={handlerChangeDescriptionTask}
          />
          <select
            value="priority"
            onChange={selectChange}>
            <option value="priority" defaultValue={"change priority"} selected disabled={true}></option>
            <option value="low">low</option>
            <option value="middle" >middle</option>
            <option value="high" >high</option>
          </select>
          <input className="tb-modal-input" type="text" placeholder="добавить файлы" />
          <button className="tb-modal-button" onClick={() => addTask()}>create task</button>
        </div>
      </Modal>

      <div className="task-board__addtask">
        <p className="task-board__addtask-descr" onClick={() => toggle()}>
          + добавить task
        </p>
      </div>
      <BoardList />
    </div>
  )
}