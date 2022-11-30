import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { boardReducer } from "../model/board/boardReducer";
import { todoReducer } from "../model/todo/todoReducer";
import { userReducer } from "../model/user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  board: boardReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

