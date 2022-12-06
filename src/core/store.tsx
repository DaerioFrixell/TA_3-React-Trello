import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { taskBoardReducer } from "../model/board/taskBoardReducer";
import { projectReducer } from "../model/project/projectReducer";
import { todoReducer } from "../model/todo/todoReducer";
import { userReducer } from "../model/user/userReducer";


function saveToLocalStorage(state: RootState) {
  try {
    const stateJSON = JSON.stringify(state);
    localStorage.setItem("localState", stateJSON);
  } catch (e) {
    console.warn("ошибка при сохранении localState: ", e);
  }
}

function loadFromLocalStorage() {
  try {
    const stateJSON = localStorage.getItem("localState");
    if (stateJSON === null) return undefined;
    return JSON.parse(stateJSON);
  } catch (e) {
    console.warn("ошибка при загрузке localState: ", e);
    return undefined;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  taskBoard: taskBoardReducer,
  project: projectReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(thunk))

store.subscribe(() => saveToLocalStorage(store.getState()));

