import ArrowBack from "../../general/arrow-back/arrow-back";

function Modal({ open, handleClose, title, children }) {
  return (
    <div name="modal" className={`modal ${open ? "open" : ""}`} role="dialog">
      {open ? (
        <>
          <div className="modal-overlay" onClick={handleClose} />
          <div className="modal-header">
            <ArrowBack onClick={handleClose} />
            <h4>{title}</h4>
            <div></div>
          </div>
          <div className="modal-content">{open ? children : null}</div>
        </>
      ) : null}
    </div>
  );
}

export default Modal;
