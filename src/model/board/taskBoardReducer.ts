import { Task, TaskActionType } from "../task/tasksType"
import { Board, BoardAction, BoardActionType, BoardState } from "./boardTypes"

const initialState: BoardState = {
  boards: [
    { id: 1, title: 'Queue', tasks: [] },
    { id: 2, title: 'Development', tasks: [] },
    { id: 3, title: 'Done', tasks: [] }
  ],
  loading: false,
  error: null
}

export const taskBoardReducer = (state = initialState, action: BoardAction): BoardState => {
  switch (action.type) {
    case TaskActionType.ADD_TASK:
      return addTask(state, action.payload)

    case TaskActionType.REMOVE_TASK:
      return removeTask(state, action.payload)

    case BoardActionType.REORDER_TASK:
      return {
        ...state
      }

    default:
      return state
  }
}

type addTaskType = (state: BoardState, data: Task) => BoardState
const addTask: addTaskType = (state, data) => {
  const newBoards: Board[] = state.boards.map((board, index) => {
    if (index) return board

    return {
      ...board,
      tasks: board.tasks.concat(data)
    }
  })

  return {
    ...state,
    boards: newBoards
  }
}


type removeTaskType = (state: BoardState, id: string) => BoardState
const removeTask: removeTaskType = (state, id) => {
  const newBoards: Board[] = state.boards.map((board, index) => {
    if (index) return board

    return {
      ...board,
      tasks: board.tasks.filter(task => id != task.id)
    }
  })

  return {
    ...state,
    boards: newBoards
  }
}