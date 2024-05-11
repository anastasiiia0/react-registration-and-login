import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
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
          <label htmlFor={passwordFieldId} className={css.formLabel}>
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
          Login
        </button>
      </Form>
    </Formik>
  );
}
