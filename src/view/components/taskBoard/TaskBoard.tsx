import "./taskBoard.scss"
import { BoardList } from "./boardList/BoardList"
import { Link } from "react-router-dom"

export const TaskBoard = () => {

  return (
    <div className="task-board">
      <Link
        className="task-board-link"
        to="/chooseproject">
        <h1 className="task-board-title">Вернуться на главную</h1>
      </Link>
      <BoardList />
    </div>
  )
}