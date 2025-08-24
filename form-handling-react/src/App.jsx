// src/App.jsx
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>User Registration</h1>

      {/* Controlled Components Form */}
      <h2>Controlled Components Form</h2>
      <RegistrationForm />

      <hr />

      {/* Formik Form */}
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
