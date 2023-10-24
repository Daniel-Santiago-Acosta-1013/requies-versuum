import { ModalProps } from '../../models/Poem'
import './Modal.scss';

function CustomModal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {title && <div className="modal-header">{title}</div>}
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
