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

    case ProjActionType.REMOVE_PROJECT:
      return {
        ...state,
        project: state.project.filter(pr => action.payload != pr.id)
      }

    default: return state
  }
}

