import { Task, TaskActionType } from "../task/tasksType"
import { Board, BoardAction, BoardActionType, BoardState } from "./boardTypes"

const initialState: BoardState = {
  boards: [
    {
      id: 1,
      title: 'Queue',
      tasks: [
        // {
        //   id: 1,
        //   numberTask: 1,
        //   title: "Queue title 1",
        //   description: "Queue descr 1",
        //   createDate: new Date(),
        //   duaringTime: "duaringTime",
        //   closeTime: "closeTime",
        //   priority: "low",
        //   files: "no files",
        //   status: "Queue",
        //   comment: "Queue comm 1",
        //   subTasks: "Queue subComm 1"
        // },
      ]
    },
    {
      id: 2,
      title: 'Development',
      tasks: []
    },
    {
      id: 3,
      title: 'Done',
      tasks: []
    }],
  loading: false,
  error: null
}

export const taskBoardReducer = (state = initialState, action: BoardAction): BoardState => {
  switch (action.type) {
    case TaskActionType.ADD_TASK:
      console.log(action.payload)
      return addTask(state, action.payload)

    case BoardActionType.REMOVE_BOARD:
      return { loading: false, error: null, boards: [] }

    default:
      return state
  }
}



// еще один объект руками написанный, если нужно для тестов
// {
//   id: 3,
//   numberTask: 3,
//   title: "Done title 3",
//   description: "Done descr 3",
//   createDate: "createDate",
//   duaringTime: "duaringTime",
//   closeTime: "closeTime",
//   priority: "low",
//   files: "no files",
//   status: "Done",
//   comment: "Done comm 3",
//   subTasks: "Done subComm 3"
// },

type addTaskType = (state: BoardState, data: Task) => BoardState

const addTask: addTaskType = (state, data) => {
  const newBoards: Board[] = state.boards.map((board, index) => {
    if (index) return board

    return {
      ...board,
      tasks: board.tasks.concat(data)
      // tasks: [...board.tasks, ...data]
    }
  })

  return {
    ...state,
    boards: newBoards
  }
}