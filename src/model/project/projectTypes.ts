export type ProjType = {
  id: number,
  title: string
}

export type InitStateType = {
  project: Array<ProjType>
}

export enum ProjActionType {
  ADD_PROJECT = "ADD_PROJECT"
}

export type AddProjActionType = {
  type: ProjActionType.ADD_PROJECT
  payload: any
}

export type ProjAction =
  AddProjActionType
