import { ProjActionType, projType } from "./projectTypes"


export const addProjectAction = (proj: projType) => {
  return {
    type: ProjActionType.ADD_PROJECT,
    payload: proj
  }
}