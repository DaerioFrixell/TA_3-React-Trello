import { useTypedSelector } from "../../../../hooks/useTypedSelector"
import { Board } from "../../../../model/board/boardTypes"
// import { TaskList } from "../taskList/TaskList"
import { BoardItem } from "./boardItem/BoardItem"
import "./boardList.scss"

export const BoardList: React.FC = () => {
  const { boards } = useTypedSelector(state => state.board)
  const viewAllBoards = ((boards as Board[]).map(board =>
    <div
      className="bl__board"
      key={board.id} >
      <BoardItem id={board.id} title={board.title} tasks={board.tasks} />
      {/* <TaskList /> */}
    </div >
  ))

  return (
    <div className="bl">
      {viewAllBoards}
    </div>
  )
}