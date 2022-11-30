// export type Taks = {
//   numberTask: number
//   title: string
//   description: string
//   createDate: string
//   duaringTime: string // время выполнения "тип дата??"
//   closeTime?: string //дата окончания "тип дата??"
//   priority: "low" | "middle" | "high"
//   files?: string // вложенные файлы "а тут какой тип??"
//   status: string
//   comment?: string // в таске могут быть каскадные комменты
//   subTasks: string // можно добавить подзадачу
// }

export type Task = {
  id: number
  title: string
  description: string
}


