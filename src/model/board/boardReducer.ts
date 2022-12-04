import { BoardAction, BoardActionType, BoardState } from "./boardTypes"

const initialState = {
  boards: [{
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

export const boardReducer = (state = initialState, action: BoardAction): BoardState => {
  switch (action.type) {
    case BoardActionType.ADD_TASK:
      return {
        ...state,
        // boards: state.boards.tasks.concat(action.payload)
      }

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