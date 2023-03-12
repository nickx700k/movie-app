import "./ThemeColor.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../components/theme.jsx";

const ThemeColor = () => {
  const { isDarkTheme, toggleDarkTheme, isRedTheme, toggleRedTheme } =
    useContext(ThemeContext);
  return (
    <div className="themeColor-part">
      <div className={`ThemeColor ${isDarkTheme === true ? "dark" : ""}`}>
        <div className="ThemeColor-div">
          <h3
            className={`ThemeColor-div--h3 ${
              isDarkTheme === true ? "dark" : ""
            }`}
          >
            Theme
          </h3>
          {isDarkTheme === true ? (
            <input
              onClick={toggleDarkTheme.bind(null)}
              className="ThemeColor-div--button dark"
              type="button"
            />
          ) : (
            <input
              onClick={toggleDarkTheme.bind(null)}
              className="ThemeColor-div--button"
              type="button"
            />
          )}
        </div>
      </div>
      <div className={`ThemeColor-color ${isRedTheme === true ? "red" : ""}`}>
        <div className="ThemeColor-color-div">
          <h3
            className={`ThemeColor-color-div--h3 ${
              isRedTheme === true ? "red" : ""
            }`}
          >
            Color
          </h3>
          {isRedTheme === true ? (
            <input
              onClick={toggleRedTheme.bind(null)}
              className="ThemeColor-color-div--button red"
              type="button"
            />
          ) : (
            <input
              onClick={toggleRedTheme.bind(null)}
              className="ThemeColor-color-div--button"
              type="button"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeColor;
