import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { authService } from "../services/auth";

// Define interface for form values
interface SignupValues {
  username: string;
  email: string;
  password: string;
  password2: string;
}

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match") // ✅ Fixed
    .required("Required"),
});

const Signup = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (
    values: SignupValues,
    { setSubmitting }: FormikHelpers<SignupValues>
  ) => {
    try {
      await authService.signup(values);
      navigate("/login");
    } catch (err) {
      setError(typeof err === "string" ? err : "Signup failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <div className="error-message">{error}</div>}

      <Formik<SignupValues>
        initialValues={{ username: "", email: "", password: "", password2: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="auth-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" id="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <Field type="password" name="password2" id="password2" />
              <ErrorMessage name="password2" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
