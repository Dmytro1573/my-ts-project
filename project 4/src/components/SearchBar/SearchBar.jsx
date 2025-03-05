import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    console.log(values);
    if (values.search === "") {
      return toast.error("Please add information to the search field");
    }
    onSearch(values.search);
    actions.resetForm();
  };

  const validationSchema = object({
    search: string().min(2, "Too short").max(20, "Too long").required(),
  });

  return (
    <>
      <header>
        <Formik
          initialValues={{ search: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="text" name="search" id="search" className="" />
            <ErrorMessage name="search" component="span" />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </>
  );
}
