import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
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
      <button
        type="button"
        className={css.contactDeleteBtn}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
