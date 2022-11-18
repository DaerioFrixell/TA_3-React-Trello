import { UserAction, UserActionType } from "./userTypes"
import { Dispatch } from "redux"
import axios from "axios"
import type { } from 'redux-thunk/extend-redux';



export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USERS })
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      setTimeout(() => {
        dispatch({
          type: UserActionType.FETCH_USERS_SUCCESS,
          payload: response.data
        })
      }, 500)

    } catch (e) {
      setTimeout(() => {
        dispatch({
          type: UserActionType.FETCH_USERS_ERROR,
          payload: "ошибка при загрузке пользователей"
        })
      }, 500)

    }
  }
}