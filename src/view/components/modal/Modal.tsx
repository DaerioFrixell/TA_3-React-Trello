
import { ModalType } from "../../../model/modal/modalType"
import "./modal.scss"

export const Modal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (<div
        onClick={props.toggle}
        className="modal-wrapper"
      >
        <div
          className="modal"
          onClick={(e) => e.stopPropagation()}
        >
          <input className="mod-input" type="text" placeholder="title" />
          <button className="mod-but" onClick={() => props.create()}>create</button>
        </div>
      </div>)}
    </>
  )
}