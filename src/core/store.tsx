import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { taskBoardReducer } from "../model/board/taskBoardReducer";
import { projectReducer } from "../model/project/projectReducer";
import { todoReducer } from "../model/todo/todoReducer";
import { userReducer } from "../model/user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  taskBoard: taskBoardReducer,
  project: projectReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

