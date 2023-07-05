import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openElement, setOpenElement] = useState("");

  const open = setOpenElement;
  const close = () => setOpenElement("");

  return (
    <ModalContext.Provider value={{ open, close, openElement }}>
      <div className={"modal"}>{children}</div>
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensElementName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensElementName) });
}

function Window({ children, name }) {
  const { openElement, close } = useContext(ModalContext);

  if (openElement !== name) return;

  return createPortal(
    <div>
      <button onClick={close}> Close {name} Modal</button>
      {children}
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
