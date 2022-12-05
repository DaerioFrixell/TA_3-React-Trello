import "./taskBoard.scss"
import { BoardList } from "./boardList/BoardList"
import { Link } from "react-router-dom"
import { Modal } from "../modal/Modal"
import useModal from "../../../hooks/useModal"
import { useAction } from "../../../hooks/useAction"

export const TaskBoard = () => {
  const { isOpen, toggle } = useModal()
  const { addTaskAction } = useAction()

  let Id = 0;
  const addTask = (
    title = "add title 1",
    description = "add descr 1",
    priority = "low",
    status = "add status Queue",
    comment = "add Queue comm 1",
    subTasks = "add Queue subComm 1"
  ): void => {
    addTaskAction({
      id: ++Id,
      numberTask: ++Id,
      title: `${title}`,
      description: `${description}`,
      createDate: new Date,
      priority: `${priority}`,
      status: `${status}`,
      comment: `${comment}`,
      subTasks: `${subTasks}`,
    })
    toggle()
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
          <input className="tb-modal-input" type="text" placeholder="название таски" />
          <input className="tb-modal-input" type="text" placeholder="описание таски" />
          <input className="tb-modal-input" type="text" placeholder="приоритет" />
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