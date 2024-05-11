import css from './EditContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  tel: Yup.string()
    .matches(/^\d+$/, 'Phone number can only contain digits')
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  username: '',
  tel: '',
};

export default function EditContactForm({ handleEdit, handleClose }) {
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    handleClose();
    handleEdit(values.username, values.tel);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <div className={css.formInputContainer}>
          <FaUser className={css.contactIcon} />
          <label htmlFor={nameFieldId} className={css.formLabel}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            className={css.formInput}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.formInputError}
          />
        </div>

        <div className={css.formInputContainer}>
          <FaPhone className={css.contactIcon} />
          <label htmlFor={telFieldId} className={css.formLabel}>
            Number
          </label>
          <Field
            type="tel"
            name="tel"
            id={telFieldId}
            className={css.formInput}
          />
          <ErrorMessage
            name="tel"
            component="span"
            className={css.formInputError}
          />
        </div>

        <button type="submit" onSubmit={handleSubmit} className={css.modalBtn}>
          Сonfirm
        </button>
      </Form>
    </Formik>
  );
}
