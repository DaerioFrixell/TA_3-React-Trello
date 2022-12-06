export type ProjType = {
  id: string,
  title: string
}

export type InitStateType = {
  project: ProjType[]
}

export enum ProjActionType {
  ADD_PROJECT = "ADD_PROJECT",
  REMOVE_PROJECT = "REMOVE_PROJECT"
}

export type AddProjActionType = {
  type: ProjActionType.ADD_PROJECT
  payload: ProjType
}

export type RemoveProjActionType = {
  type: ProjActionType.REMOVE_PROJECT
  payload: string
}

export type ProjAction =
  AddProjActionType
  | RemoveProjActionType
