import * as UserActionCreator from "../model/user/userAction"
import * as TodoActionCreator from "../model/todo/todoAction"
export default {
  ...UserActionCreator,
  ...TodoActionCreator
}