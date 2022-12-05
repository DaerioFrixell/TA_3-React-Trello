export type Task = {
  id: number
  numberTask: number
  title: string
  description: string
  createDate: Date
  priority: string
  status: string
  comment?: string // в таске могут быть каскадные комменты
  subTasks: string
}

export enum TaskActionType {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
}

export type AddTaskAction = {
  type: TaskActionType.ADD_TASK
  payload: Task
}
export type RemoveTaskAction = {
  type: TaskActionType.REMOVE_TASK
  payload: Task[]
}



