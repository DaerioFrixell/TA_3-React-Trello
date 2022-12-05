import { Task, TaskActionType } from "../task/tasksType";

export const addTaskAction = (task: Task) => {
  return {
    type: TaskActionType.ADD_TASK,
    payload: task
  }
}