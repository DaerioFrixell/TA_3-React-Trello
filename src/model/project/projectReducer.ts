import { ProjAction, ProjActionType, InitStateType } from "./projectTypes"

const initialState: InitStateType = {
  project: []
}

export const projectReducer = (
  state = initialState,
  action: ProjAction): InitStateType => {
  switch (action.type) {
    case ProjActionType.ADD_PROJECT: return {
      ...state,
      project: state.project.concat(action.payload)
    }
    default: return state
  }
}

