import { ProjActionType, ProjType } from "./projectTypes"


export const addProjectAction = (proj: ProjType) => {
  return {
    type: ProjActionType.ADD_PROJECT,
    payload: proj
  }
}