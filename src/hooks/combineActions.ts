import * as UserActionCreator from "../model/user/userAction"
import * as TodoActionCreator from "../model/todo/todoAction"
import * as BoardActionCreator from "../model/board/boardAction"
export default {
  ...UserActionCreator,
  ...TodoActionCreator,
  ...BoardActionCreator
}