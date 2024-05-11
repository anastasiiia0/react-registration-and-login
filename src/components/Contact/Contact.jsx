import css from './Contact.module.css';
// import Typography from '@mui/material/Typography';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { LiaEditSolid } from 'react-icons/lia';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/contacts/operations';

import ModalWindow from '../ModalWindow/ModalWindow';
import DeleteContact from '../DeleteContact/DeleteContact';
import EditContactForm from '../EditContactForm/EditContactForm';

export default function Contact({ contact: { id, name, number } }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (username, tel) => {
    dispatch(
      editContact({
        contactId: id,
        name: username,
        number: tel,
      })
    );
  };

  return (
    <>
      <div className={css.contactsListItem}>
        <div className={css.contactInfoWrap}>
          <p className={css.contactInfo}>
            <FaUser className={css.contactIcon} />
            {name}
          </p>
          <p className={css.contactInfo}>
            <FaPhone className={css.contactIcon} />
            {number}
          </p>
        </div>
        <div className={css.buttonsSet}>
          <button
            type="button"
            className={css.actionBtn}
            onClick={() => setEditModalOpen(true)}
          >
            <LiaEditSolid className={css.actionIcon} />
          </button>
          <button
            type="button"
            className={css.actionBtn}
            onClick={() => setDeleteModalOpen(true)}
          >
            <MdDeleteForever className={css.actionIcon} />
          </button>
        </div>
      </div>

      {deleteModalOpen && (
        <ModalWindow
          modalOpen={deleteModalOpen}
          handleClose={() => setDeleteModalOpen(false)}
        >
          <DeleteContact handleDelete={handleDelete} />
        </ModalWindow>
      )}

      {editModalOpen && (
        <ModalWindow
          modalOpen={editModalOpen}
          handleClose={() => setEditModalOpen(false)}
        >
          <EditContactForm
            handleEdit={handleEdit}
            handleClose={() => setEditModalOpen(false)}
          />
        </ModalWindow>
      )}
    </>
  );
}
