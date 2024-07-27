import React from "react";
import "./login.scss";
import img from "../../assets/images/login.jpg";
import { useGetValue } from "../../hooks/useGetValue";
import { useDispatch } from "react-redux";
import { setToken } from "../../context/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  username: "john32",
  password: "87654321",
};

const Login = () => {
  const { formData, handleChange } = useGetValue(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "john32" && formData.password === "87654321") {
      dispatch(setToken("token"));
      navigate("/admin/createProduct");
      toast.success("Welcome user");
    } else {
      toast.error("Username or password in correct");
    }
  };

  return (
    <div className="login">
      <div className="login__left">
        <img src={img} alt="Login background" />
      </div>

      <div className="login__right">
        <h2 className="login__right-title">Sign In</h2>
        <p>
          Don't have an account yet? <span>Sign Up</span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            value={formData.username}
            onChange={handleChange}
            name="username"
            placeholder="Your username or email address"
            type="text"
          />
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            type="password"
          />
          <div className="login__form">
            <label className="login__form__check">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <p>Forgot password?</p>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
