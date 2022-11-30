import { Dispatch } from "redux"
import axios from "axios"
import type { } from 'redux-thunk/extend-redux';
import { BoardAction, BoardActionType } from "./boardTypes";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<BoardAction>) => {
    try {
      dispatch({ type: BoardActionType.FETCH_BOARD })
      const response = await axios.get("")
      dispatch({
        type: BoardActionType.FETCH_BOARD_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: BoardActionType.FETCH_BOARD_ERROR,
        payload: "ошибка при загрузке доски"
      })
    }
  }
}