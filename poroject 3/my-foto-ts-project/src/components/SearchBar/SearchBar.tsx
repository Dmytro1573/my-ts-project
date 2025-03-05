import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

interface MyFormValues {
  searchField: string;
}

const SearchBar: React.FC = () => {
  const initialValues: MyFormValues = { searchField: "" };

  const validationSchema = Yup.object({
    searchField: Yup.string()
      .min(2, "Мінімум 2 символи")
      .max(20, "Максимум 20 символів")
      .required("Обов'язкове поле"),
  });

  const handleSubmit = (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>
  ) => {
    console.log(values);
    toast.success("Форма успішно відправлена");
    actions.resetForm();
  };

  return (
    <header>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              name="searchField"
              id="searchField"
              placeholder="Type text here..."
            />
            <ErrorMessage
              name="searchField"
              component="div"
              className="error"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </header>
  );
};

export default SearchBar;
