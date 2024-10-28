import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = { name: "", number: "" };
  
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <ErrorMessage name="name" component="div" />
        <Field id="name" name="name" />

        <label htmlFor="number">Number</label>
        <ErrorMessage name="number" component="div" />
        <Field id="number" name="number" className={styles.lastField} />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
