import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
const Modal = ({ children, open, onClose, title, url }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={style.overlay} />
      <div className={style.wrapper}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <div className={style.title}>{title}</div>
            <div id={style.timesButton} onClick={onClose}>
              &times;
            </div>
          </div>
          <div className={style.modalBody}>{children}</div>
          <div className={style.modalFooter}>
            <button>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Visit url
              </a>
            </button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
