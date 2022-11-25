import { TodoAction, TodoActionType, TodoState } from "./todoTypes";

const initialState = {
  todos: [],
  loading: false,
  error: null
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionType.FETCH_TODO:
      return { loading: true, error: null, todos: [] }
    case TodoActionType.FETCH_TODO_SUCCESS:
      return { loading: false, error: null, todos: action.payload }
    case TodoActionType.FETCH_TODO_ERROR:
      return { loading: false, error: action.payload, todos: [] }
    default:
      return state
  }
}