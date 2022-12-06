import { ReactNode } from "react";

export type ModalType = {
  isOpen: boolean
  toggle: () => void
  create: () => void
  children?: ReactNode
}