import { BoardAction, BoardActionType, BoardState } from "./boardTypes"

const initialState = {
  boards: [{
    id: 1,
    title: 'Queue',
    tasks: [
      {
        id: 1,
        title: "tit queue 1",
        description: "desc queue 1"
      },
      {
        id: 2,
        title: "tit queue 2",
        description: "desc queue 2"
      }]
  },
  {
    id: 2,
    title: 'Development',
    tasks: [
      {
        id: 5,
        title: "tit Dev 5",
        description: "desc Dev 5"
      }]
  },
  {
    id: 3,
    title: 'Done',
    tasks: [
      {
        id: 9,
        title: "tit Done 9",
        description: "desc Done 9"
      },
      {
        id: 10,
        title: "tit Done 10",
        description: "desc Done 10"
      },
    ]
  }],
  loading: false,
  error: null
}

export const boardReducer = (
  state = initialState,
  action: BoardAction): BoardState => {
  switch (action.type) {
    case BoardActionType.FETCH_BOARD:
      return { loading: true, error: null, boards: [] }

    case BoardActionType.FETCH_BOARD_SUCCESS:
      return { loading: false, error: null, boards: action.payload }

    case BoardActionType.FETCH_BOARD_ERROR:
      return { loading: false, error: action.payload, boards: [] }

    case BoardActionType.ADD_BOARD:
      return { loading: false, error: null, boards: [] }

    case BoardActionType.REMOVE_BOARD:
      return { loading: false, error: null, boards: [] }

    default:
      return state
  }
}