import useModal from "../../../../../../hooks/useModal"
import { Task } from "../../../../../../model/task/tasksType"
import { Modal } from "../../../../modal/Modal"
import "./taskItem.scss"

const hours = 1000 * 3600
const minute = 1000 * 60

export const TaskItem: React.FC<Task> = ({ numberTask, title, ...props }) => {
  const { isOpen, toggle } = useModal()
  const nowDate = Date.now()
  const nowDateMS = +nowDate
  const createDateTaskMS = props.createDate.getTime()
  const duaring = +((nowDateMS - createDateTaskMS) / hours).toFixed()

  return (
    <>
      <div className="task-item" >
        <p className="task-item-number" >{numberTask}</p>
        <p
          className="task-item-title"
          onClick={() => toggle()}>{title}</p>
      </div>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        create={() => { }}
      >
        <div className="modal-ti">
          <div className="modal-ti__header">
            <div className="modal-ti__header-createdata" >
              <p>дата создания:</p>
              <p>{props.createDate.toUTCString()}</p>
            </div>
            <p className="modal-ti__header-title" >{title}</p>
            <p className="modal-ti__header-status" >Status:   {props.status}</p>
            <p className="modal-ti__header-priority" >Prioty: {props.priority}</p>
          </div>

          <p className="modal-ti-description" >{props.description}</p>
          <p className="modal-ti-duaring" >
            duaring: {duaring} ч</p>
        </div>
      </Modal>
    </>
  )
}