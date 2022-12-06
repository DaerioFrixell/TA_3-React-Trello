import { ProjActionType, ProjType } from "./projectTypes"


export const addProjectAction = (proj: ProjType) => {
  return {
    type: ProjActionType.ADD_PROJECT,
    payload: proj
  }
}

export const removeProjectAction = (num: string) => {
  return {
    type: ProjActionType.REMOVE_PROJECT,
    payload: num
  }
}