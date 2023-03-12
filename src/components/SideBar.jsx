import React, { useEffect, useState, useContext } from "react";
import "./SideBar.scss";
import sidebarJson from "../Data/sidebar.json";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "./theme.jsx";
const SideBar = () => {
  const { isDarkTheme, isRedTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(null);
  const history = useHistory();
  let username = "";
  useEffect(() => {
    username = sessionStorage.getItem("username");
    setUser(username);
  }, [username]);

  const handleUserName = () => {
    setUser(null);
    sessionStorage.clear();
    history.push("/");
    window.location.reload(false);
  };

  return (
    <div className={`sidebar ${isDarkTheme === true ? "dark" : ""}`}>
      <div className="sidebar--container">
        <div
          className={`sidebar--container-head ${
            isRedTheme === true ? "red" : ""
          }`}
        >
          <i
            className={`bx bx-user sidebar--container-head--icon ${
              isRedTheme === true ? "red" : ""
            }`}
          ></i>
          {user !== null ? (
            <h3
              className={`sidebar--container-head--h3 ${
                isRedTheme === true ? "red" : ""
              }`}
            >
              {user}
            </h3>
          ) : (
            <h3
              className={`sidebar--container-head--h3 ${
                isRedTheme === true ? "red" : ""
              }`}
            >
              User Name
            </h3>
          )}
        </div>

        <div className="sidebar--container-body">
          <ul className="sidebar--container-body--ul">
            {sidebarJson.map((item, index) => (
              <Link key={index} to={item.route}>
                <li
                  className={`sidebar--container-body--ul-li hover ${
                    isRedTheme === true ? "red" : ""
                  }`}
                >
                  <i
                    className={`${item.icon} sidebar--container-body--ul-li--icon `}
                  ></i>
                  <h5 className="sidebar--container-body--ul-li--h5">
                    {item.title}
                  </h5>
                </li>
              </Link>
            ))}
            <li
              className={`sidebar--container-body--ul-li click hover ${
                isRedTheme === true ? "red" : ""
              }`}
              onClick={handleUserName}
            >
              <i className="bx bx-log-out-circle sidebar--container-body--ul-li--icon"></i>
              <h5 className="sidebar--container-body--ul-li--h5">Sign Out</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
