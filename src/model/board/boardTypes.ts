import { Task } from "../task/tasksType"

export type Board = {
  id: number
  title: string
  tasks: Array<Task>
}

export type BoardState = {
  boards: Array<Board>;
  loading: boolean;
  error: null | string;
}

export enum BoardActionType {
  FETCH_BOARD = "FETCH_BOARD",
  FETCH_BOARD_SUCCESS = "FETCH_BOARD_SUCCESS",
  FETCH_BOARD_ERROR = "FETCH_BOARD_ERROR",
  ADD_BOARD = "ADD_BOARD",
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
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
export type AddBoardAction = {
  type: BoardActionType.ADD_BOARD
  payload: any[]
}
export type RemoveBoardAction = {
  type: BoardActionType.REMOVE_BOARD
  payload: any[]
}
export type AddTaskAction = {
  type: BoardActionType.ADD_TASK
  payload: any[]
}
export type RemoveTaskAction = {
  type: BoardActionType.REMOVE_TASK
  payload: any[]
}

export type BoardAction =
  FetchBoardAction
  | FetchBoardSuccessAction
  | FetchBoardErrorAction
  | AddBoardAction
  | AddTaskAction
  | RemoveTaskAction
  | RemoveBoardAction