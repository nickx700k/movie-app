import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import "./SignUp.scss";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../components/theme.jsx";

const SignUp = () => {
  const { isDarkTheme, isRedTheme } = useContext(ThemeContext);
  const [message, setMessage] = useState("field");
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    if (value === "") {
      setMessage(e.target.name, " is Empty");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username === "") {
      setMessage("UserName is empty");
      setCheck(true);
    } else if (data.email === "") {
      setMessage("Email is empty");
      setCheck(true);
    } else if (data.password === "") {
      setMessage("Password is empty");
      setCheck(true);
    } else {
      setCheck(false);
      const userData = {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
      };
      axios.post("http://localhost:3005/users", userData).then((response) => {
        console.log(response.status, response.data);
      });
      history.push("/signin");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCheck(false);
    }, 2500);
  }, [check]);

  return (
    <div className="signup">
      {check && <h1 className="signup--message">{message}</h1>}

      <div className="signup--container">
        <div
          className={`signup--container--head ${
            isRedTheme === true ? "red" : ""
          }`}
        >
          <h2 className="signup--container--head--h2">Registeration</h2>
        </div>
        <div
          className={`signup--container--body ${
            isDarkTheme === true ? "dark" : ""
          }`}
        >
          <form
            className="signup--container--body--form"
            onSubmit={handleSubmit}
          >
            <div className="signup--container--body--form-all">
              <i
                className={`bx bx-user signup--container--body--form-all--icon ${
                  isRedTheme === true ? "red" : ""
                }`}
              ></i>
              <input
                type="text"
                className={`signup--container--body--form-all--input ${
                  isRedTheme === true ? "red" : ""
                }`}
                placeholder="username"
                name="id"
                value={data.id}
                onChange={handleChange}
              />
            </div>
            <div className="signup--container--body--form-all">
              <i
                className={`bx bx-user signup--container--body--form-all--icon ${
                  isRedTheme === true ? "red" : ""
                }`}
              ></i>
              <input
                type="text"
                className={`signup--container--body--form-all--input ${
                  isRedTheme === true ? "red" : ""
                }`}
                placeholder="Full Name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="signup--container--body--form-all">
              <i
                className={`bx bx-envelope signup--container--body--form-all--icon ${
                  isRedTheme === true ? "red" : ""
                }`}
              ></i>
              <input
                type="email"
                className={`signup--container--body--form-all--input ${
                  isRedTheme === true ? "red" : ""
                }`}
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="signup--container--body--form-all">
              <i
                className={`bx bx-lock-alt signup--container--body--form-all--icon ${
                  isRedTheme === true ? "red" : ""
                }`}
              ></i>
              <input
                type="password"
                className={`signup--container--body--form-all--input ${
                  isRedTheme === true ? "red" : ""
                }`}
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <button
              className={`signup--container--body--form-all--btn ${
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
};

export default SignUp;
