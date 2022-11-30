import { ReactNode } from "react";

export type ModalType = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  create: () => any
}