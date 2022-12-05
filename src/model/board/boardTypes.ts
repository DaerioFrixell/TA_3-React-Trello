import { AddTaskAction, RemoveTaskAction, Task } from "../task/tasksType"


export type Board = {
  id: number
  title: string
  tasks: Task[]
}

export type BoardState = {
  boards: Board[]
  loading: boolean
  error: null | string
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
  payload: Task[]
}

export type FetchBoardSuccessAction = {
  type: BoardActionType.FETCH_BOARD_SUCCESS
}

export type FetchBoardErrorAction = {
  type: BoardActionType.FETCH_BOARD_ERROR
  payload: string
}

export type AddBoardAction = {
  type: BoardActionType.ADD_BOARD
  payload: Task[]
}

export type RemoveBoardAction = {
  type: BoardActionType.REMOVE_BOARD
  payload: Task[]
}

export type BoardAction =
  FetchBoardAction
  | FetchBoardSuccessAction
  | FetchBoardErrorAction
  | AddBoardAction
  | AddTaskAction
  | RemoveTaskAction
  | RemoveBoardAction