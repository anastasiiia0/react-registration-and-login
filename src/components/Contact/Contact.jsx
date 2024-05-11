import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { LiaEditSolid } from 'react-icons/lia';
import { useState } from 'react';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

export default function Contact({ contact: { id, name, number } }) {
  const [modalOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModal = () => {
    handleOpen();
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
            // onClick={}
          >
            <LiaEditSolid className={css.actionIcon} />
          </button>
          <button
            type="button"
            className={css.actionBtn}
            onClick={handleOpenModal}
          >
            <MdDeleteForever className={css.actionIcon} />
          </button>
        </div>
      </div>
      {modalOpen && (
        <ConfirmationModal
          modalOpen={modalOpen}
          handleClose={handleClose}
          idToDelete={id}
        />
      )}
    </>
  );
}
