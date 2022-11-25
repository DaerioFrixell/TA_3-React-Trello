import { TodoAction, TodoActionType } from "./todoTypes"
import { Dispatch } from "redux"
import axios from "axios"
import type { } from 'redux-thunk/extend-redux';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.FETCH_TODO })
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      setTimeout(() => {
        dispatch({
          type: TodoActionType.FETCH_TODO_SUCCESS,
          payload: response.data
        })
      }, 500)

    } catch (e) {
      setTimeout(() => {
        dispatch({
          type: TodoActionType.FETCH_TODO_ERROR,
          payload: "ошибка при загрузке списка дел"
        })
      }, 500)
    }
  }
}