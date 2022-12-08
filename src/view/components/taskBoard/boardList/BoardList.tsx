import { useTypedSelector } from "../../../../hooks/useTypedSelector"
import { TasksList } from "./boardItem/TasksList"
import "./boardList.scss"

export const BoardList: React.FC = () => {
  const { boards } = useTypedSelector(state => state.taskBoard)
  const viewAllBoards = boards.map((board, index) =>
    <div className="bl__board" key={board.id}>
      <p className="bl__board-title">{board.title}</p>
      <TasksList indexBoard={index} />
    </div >
  )

  return (
    <div className="bl">
      {viewAllBoards}
    </div>
  )
}