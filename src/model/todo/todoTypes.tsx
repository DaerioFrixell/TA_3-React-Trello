export type TodoState = {
  todos: any[];
  loading: boolean;
  error: null | string;
}

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export enum TodoActionType {
  FETCH_TODO = "FETCH_TODO",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR"
}

export type FetchTodoAction = {
  type: TodoActionType.FETCH_TODO
}

export type FetchTodoSuccessAction = {
  type: TodoActionType.FETCH_TODO_SUCCESS
  payload: any[]
}

export type FetchTodoErrorAction = {
  type: TodoActionType.FETCH_TODO_ERROR
  payload: string
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction
  | FetchTodoErrorAction