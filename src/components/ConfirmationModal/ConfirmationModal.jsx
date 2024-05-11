import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ConfirmationModal.module.css';

export default function ConfirmationModal({
  modalOpen,
  handleClose,
  idToDelete,
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(idToDelete));
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={css.modal}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={css.modalText}
          >
            Сonfirm to delete
          </Typography>
          <button onClick={handleDelete} className={css.modalBtn}>
            Сonfirm
          </button>
        </Box>
      </Modal>
    </div>
  );
}
