import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import css from './ModalWindow.module.css';

export default function ModalWindow({ modalOpen, handleClose, children }) {
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={css.modal}>{children}</Box>
      </Modal>
    </div>
  );
}
