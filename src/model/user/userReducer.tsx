import { UserAction, UserActionType, UserState } from "./userTypes";

const initialState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_USER:
      return { loading: true, error: null, users: [] }
    case UserActionType.FETCH_USER_SUCCESS:
      return { loading: false, error: null, users: action.payload }
    case UserActionType.FETCH_USER_ERROR:
      return { loading: false, error: action.payload, users: [] }
    default:
      return state
  }
}