import { Task } from "../task/tasksType"

export type Board = {
  id: number
  title: string
  tasks: Task[]
}

export type BoardState = {
  boards: Board[];
  loading: boolean;
  error: null | string;
}


export enum BoardActionType {
  FETCH_BOARD = "FETCH_BOARD",
  FETCH_BOARD_SUCCESS = "FETCH_BOARD_SUCCESS",
  FETCH_BOARD_ERROR = "FETCH_BOARD_ERROR",
  ADD_BOARD = "ADD_BOARD",
  REMOVE_BOARD = "REMOVE_BOARD"
}

export type FetchBoardAction = {
  type: BoardActionType.FETCH_BOARD
}

export type FetchBoardSuccessAction = {
  type: BoardActionType.FETCH_BOARD_SUCCESS
  payload: any[]
}

export type FetchBoardErrorAction = {
  type: BoardActionType.FETCH_BOARD_ERROR
  payload: string
}
export type AddBoardErrorAction = {
  type: BoardActionType.ADD_BOARD
  payload: any[]
}
export type RemoveBoardErrorAction = {
  type: BoardActionType.REMOVE_BOARD
  payload: any[]
}

export type BoardAction =
  FetchBoardAction
  | FetchBoardSuccessAction
  | FetchBoardErrorAction
  | AddBoardErrorAction
  | RemoveBoardErrorAction