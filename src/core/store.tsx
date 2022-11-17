import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../model/user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

