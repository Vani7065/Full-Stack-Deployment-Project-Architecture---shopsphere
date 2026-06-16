import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      login({
        email,
        token: res.data.token
      });

      alert("Login Successful");

      navigate("/");

    } catch (err) {

      alert("Invalid Email or Password");

      console.log(err);
    }
  };

  return (

    <div className="auth-page">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h1>
          Welcome Back
        </h1>

        <p className="auth-subtitle">
          Login to continue shopping
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button
          type="submit"
        >
          Login
        </button>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">
            Register Now
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;