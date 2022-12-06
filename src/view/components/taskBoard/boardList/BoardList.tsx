import { useTypedSelector } from "../../../../hooks/useTypedSelector"
import { Board } from "../../../../model/board/boardTypes"
import { TasksList } from "./boardItem/TasksList"
// import { useEffect } from "react"
import "./boardList.scss"

export const BoardList: React.FC = () => {
  const { boards } = useTypedSelector(state => state.taskBoard)

  const viewAllBoards = boards.map((board, index) =>
    <div
      className="bl__board"
      key={board.id} >
      <TasksList indexBoard={index} />
    </div >
  )

  return (
    <div className="bl">
      {viewAllBoards}
    </div>
  )
}