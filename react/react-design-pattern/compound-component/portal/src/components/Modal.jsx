import { createContext } from "react";

function Modal({ children }) {
  const ModalContext = createContext();
  return (
    <ModalContext.Provider>
      <div>{children}</div>
    </ModalContext.Provider>
  );
}

export default Modal;
