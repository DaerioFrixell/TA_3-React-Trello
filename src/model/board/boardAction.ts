import { Dispatch } from "redux"
// import type { } from 'redux-thunk/extend-redux';
import { BoardAction } from "./boardTypes";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<BoardAction>) => {
    // try {
    //   dispatch({ type: BoardActionType.FETCH_BOARD })
    //   const response = await axios.get("")
    //   dispatch({
    //     type: BoardActionType.FETCH_BOARD_SUCCESS,
    //     payload: response.data
    //   })
    // } catch (e) {
    //   dispatch({
    //     type: BoardActionType.FETCH_BOARD_ERROR,
    //     payload: "ошибка при загрузке доски"
    //   })
  }
}