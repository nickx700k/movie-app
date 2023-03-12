import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import "./SignIn.scss";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../components/theme.jsx";
import React from "react";

export default function SignIn() {
  const { isDarkTheme, isRedTheme } = useContext(ThemeContext);
  const [check, setCheck] = useState(false);
  const [message, setMessage] = useState("field");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:3005/users/" + username)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          if (Object.keys(res).length === 0) {
            toast.warning("Enter Username");
          }
          if (res.password === password) {
            sessionStorage.setItem("username", username);
            toast.success("Success");
            history.push("/");
            window.location.reload(false);
          } else {
            toast.error("Enter Valid Datas");
          }
        })
        .catch((err) => toast.warning("erro due: " + err.message));
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Enter Email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Enter Password");
    }
    return result;
  };

  useEffect(() => {
    setTimeout(() => {
      setCheck(false);
    }, 2500);
  }, [check]);

  return (
    <div className="signin">
      <ToastContainer theme="dark" autoClose={2000} />
      {check && <h1 className="signin--message">{message}</h1>}
      <div className="signin--container">
        <div
          className={`signin--container--head ${
            isRedTheme === true ? "red" : ""
          }`}
        >
          <h2 className="signin--container--head--h2">Login</h2>
        </div>
        <div
          className={`signin--container--body ${
            isDarkTheme === true ? "dark" : ""
          }`}
        >
          <form
            className="signin--container--body--form"
            onSubmit={handleSubmit}
          >
            <div className="signin--container--body--form-all">
              <i
                className={`bx bx-envelope signin--container--body--form-all--icon ${
                  isRedTheme === true ? "red" : ""
                }`}
              ></i>
              <input
                type="text"
                className={`signin--container--body--form-all--input ${
                  isRedTheme === true ? "red" : ""
                }`}
                placeholder="Email"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="signin--container--body--form-all">
              <i
                className={`bx bx-lock-alt signin--container--body--form-all--icon ${
                  isRedTheme === true ? "red" : ""
                }`}
              ></i>
              <input
                type="password"
                className={`signin--container--body--form-all--input ${
                  isRedTheme === true ? "red" : ""
                }`}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className={`signin--container--body--form-all--btn ${
                isRedTheme === true ? "red" : ""
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
