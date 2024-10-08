import ArrowBack from "../../general/arrow-back/arrow-back";

function Modal({ open, handleClose, children }) {
  return (
    <div name="modal" className={`modal ${open ? "open" : ""}`} role="dialog">
      <div className="modal-overlay" onClick={handleClose} />
      <div className="modal-header">
        <ArrowBack onClick={handleClose} />
      </div>
      <div className="modal-content">{open ? children : null}</div>
    </div>
  );
}

export default Modal;
