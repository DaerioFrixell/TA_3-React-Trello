import { UserAction, UserActionType, UserState } from "./userTypes";

const initialState = {
  user: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_USER:
      return { loading: true, error: null, user: [] }
    case UserActionType.FETCH_USER_SUCCESS:
      return { loading: false, error: null, user: action.payload }
    case UserActionType.FETCH_USER_ERROR:
      return { loading: false, error: action.payload, user: [] }
    default:
      return state
  }
}