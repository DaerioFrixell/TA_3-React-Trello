import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreator from "../model/user/userAction"

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UserActionCreator, dispatch)
}