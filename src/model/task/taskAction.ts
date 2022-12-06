import { Task, TaskActionType } from "../task/tasksType";

export const addTaskAction = (task: Task) => {
  return {
    type: TaskActionType.ADD_TASK,
    payload: task
  }
}

export const removeTaskAction = (id: string) => {
  return {
    type: TaskActionType.REMOVE_TASK,
    payload: id
  }
}