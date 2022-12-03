import { ModalType } from "../../../model/modal/modalType"
import "./modal.scss"

type AsdType = {
  create: () => void
} & ModalType

export const Modal: React.FC<AsdType> = ({ create, toggle, isOpen, ...props }) => {
  return (
    <>
      {isOpen && (
        <div onClick={toggle} className="modal-wrapper">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {props.children}
          </div>
        </div>
      )}
    </>
  )
}