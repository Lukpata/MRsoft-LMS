import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.module.css"; // remove duplicate import
import styles from "./Modal.module.css";

export default function Modal({
  closable = true,
  children,
  inProp,
  closeModal,
}) {
  const close = () => {
    if (closable) {
      closeModal();
    }
  };
  const nodeRef = useRef(null);
  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={200}
      classNames="fade"
    >
      <div ref={nodeRef} onClick={close} className={styles["modal-container"]}>
        <div className={styles["modal-content"]}>{children}</div>
        {closable && (
          <div onClick={close} className={styles["modal-close"]}>
            x
          </div>
        )}
      </div>
    </CSSTransition>,
    document.body
  );
}
