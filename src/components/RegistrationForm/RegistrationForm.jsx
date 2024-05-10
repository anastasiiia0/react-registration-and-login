import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

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
          <label htmlFor={emailFieldId} className={css.formLabel}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={emailFieldId}
            className={css.formInput}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.formInputError}
          />
        </div>

        <div className={css.formInputContainer}>
          <label htmlFor={nameFieldId} className={css.formLabel}>
            Password
          </label>
          <Field
            type="text"
            name="password"
            id={passwordFieldId}
            className={css.formInput}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.formInputError}
          />
        </div>

        <button type="submit" className={css.formSubmitBtn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
