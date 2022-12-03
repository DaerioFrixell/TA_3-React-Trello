export type Task = {
  id: number
  numberTask: number
  title: string
  description: string
  createDate: Date
  priority: string
  status: string
  comment?: string // в таске могут быть каскадные комменты
  subTasks: string // можно добавить подзадачу
}



