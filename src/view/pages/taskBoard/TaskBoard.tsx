
import { useState } from "react"
import "./taskBoard.scss"
import { motion } from "framer-motion"

export const TaskBoard = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Queue',
      tasks: [
        {
          id: 1,
          title: "titleTask 1",
          description: "descriptionTask 1",
        },
        {
          id: 2,
          title: "titleTask 22",
          description: "descriptionTask 22",
        }
      ]
    },
    {
      id: 2,
      title: 'Development',
      tasks: [
        {
          id: 5,
          title: "titleTask 2",
          description: "descriptionTask 2",
        }
      ]
    },
    {
      id: 3,
      title: 'Done',
      tasks: [
        {
          id: 10,
          title: "titleTask 3",
          description: "descriptionTask 3",
        },
        {
          id: 6,
          title: "titleTask 6",
          description: "descriptionTask 6",
        },
      ]
    }
  ])

  const viewAllBoards = boards.map(board =>
    <div className="task-board__board">
      <p className="task-board__board-title">{board.title}</p> </div>
  )

  return (
    <div className="task-board">
      {viewAllBoards}
      <motion.button drag >sdf</motion.button>
    </div>
  )
}