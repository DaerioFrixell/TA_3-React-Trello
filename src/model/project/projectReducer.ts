import { ProjAction, ProjActionType } from "./projectTypes"

type ProjType = {
  id: number
  title: string
}

type InitStateType = {
  project: Array<ProjType>
}

const initialState: InitStateType = {
  project: []
}

export const projectReducer = (state = initialState, action: ProjAction): InitStateType => {
  switch (action.type) {
    case ProjActionType.ADD_PROJECT: return {
      ...state,
      project: state.project.concat(action.payload)
    }

    default: return state
  }
}

