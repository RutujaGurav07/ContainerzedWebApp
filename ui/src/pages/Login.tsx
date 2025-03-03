// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { authService } from "../services/auth";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

interface LoginValues {
  username: string;
  password: string;
}

const Login = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    try {
      await authService.login(values);
      navigate("/dashboard");
    } catch (err) {
      setError(typeof err === "string" ? err : "Invalid credentials");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
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
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="auth-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
