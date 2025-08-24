import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Submitted:", values);

    // Simulate API call
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="p-4 border rounded max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Formik Registration Form</h2>

        <div className="mb-2">
          <Field name="username" type="text" placeholder="Username" className="border p-2 w-full" />
          <ErrorMessage name="username" component="p" className="text-red-500" />
        </div>

        <div className="mb-2">
          <Field name="email" type="email" placeholder="Email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="p" className="text-red-500" />
        </div>

        <div className="mb-2">
          <Field name="password" type="password" placeholder="Password" className="border p-2 w-full" />
          <ErrorMessage name="password" component="p" className="text-red-500" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}
