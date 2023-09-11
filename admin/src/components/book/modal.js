import "./modal.css";
import React from "react";

function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <h4>THÊM SÁCH</h4>
        </div>
        <div class="modal-body">{children}</div>
        <div class="modal-footer">
          <button type="button" className="button" onClick={handleClose}>
            Đóng
          </button>
        </div>
      </section>
    </div>
  );
}

export default Modal;
