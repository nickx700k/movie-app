import React, { useContext } from "react";
import "./Movie.scss";
import { ThemeContext } from "../components/theme.jsx";

const Movie = ({ movie }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { isRedTheme } = useContext(ThemeContext);
  return (
    <div className={`movie ${isRedTheme === true ? "red" : ""}`}>
      <img src={movie.image} alt="no photo" className="movie--image" />
      <div className="movie-body">
        <div className="movie-body--all-2">
          <div
            className={
              `movie-body--all-div ${isDarkTheme === true ? "dark" : ""}` ||
              `movie-body--all-div ${isDarkTheme === true ? "red" : ""}`
            }
          >
            <i
              className={`bx bx-captions movie-body--all-div--icon ${
                isRedTheme === true ? "red" : ""
              }`}
            ></i>
            <h4
              className={`movie-body--all-div--h4 ${
                isRedTheme === true ? "red" : ""
              }`}
            >
              {movie.title}
            </h4>
          </div>
          <div className="movie-body--all-2">
            <div
              className={
                `movie-body--all-div ${isDarkTheme === true ? "dark" : ""}` ||
                `movie-body--all-div ${isDarkTheme === true ? "red" : ""}`
              }
            >
              <i
                className={`bx bx-notepad movie-body--all-div--icon ${
                  isRedTheme === true ? "red" : ""
                }`}
              ></i>
              <div className="movie-body--all-div--genre">
                {movie.genre.map((item) => (
                  <h5
                    className={`movie-body--all-div--h5 ${
                      isRedTheme === true ? "red" : ""
                    }`}
                    key={item}
                  >
                    {item},
                  </h5>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-body--all">
          <div
            className={
              `movie-body--all-div ${isDarkTheme === true ? "dark" : ""}` ||
              `movie-body--all-div ${isDarkTheme === true ? "red" : ""}`
            }
          >
            <i
              className={`bx bx-flag movie-body--all-div--icon ${
                isRedTheme === true ? "red" : ""
              }`}
            ></i>
            <h4
              className={`movie-body--all-div--h4 ${
                isRedTheme === true ? "red" : ""
              }`}
            >
              {movie.country}
            </h4>
          </div>
          <div
            className={
              `movie-body--all-div ${isDarkTheme === true ? "dark" : ""}` ||
              `movie-body--all-div ${isDarkTheme === true ? "red" : ""}`
            }
          >
            <i
              className={`bx bx-globe movie-body--all-div--icon ${
                isRedTheme === true ? "red" : ""
              }`}
            ></i>
            <h4
              className={`movie-body--all-div--h4 ${
                isRedTheme === true ? "red" : ""
              }`}
            >
              {movie.language}
            </h4>
          </div>
        </div>
        <div className="movie-body--all">
          <div
            className={
              `movie-body--all-div ${isDarkTheme === true ? "dark" : ""}` ||
              `movie-body--all-div ${isDarkTheme === true ? "red" : ""}`
            }
          >
            <i
              className={`bx bx-time movie-body--all-div--icon ${
                isRedTheme === true ? "red" : ""
              }`}
            ></i>
            <h4
              className={`movie-body--all-div--h4 ${
                isRedTheme === true ? "red" : ""
              }`}
            >
              {movie.year}
            </h4>
          </div>
          <div
            className={
              `movie-body--all-div ${isDarkTheme === true ? "dark" : ""}` ||
              `movie-body--all-div ${isDarkTheme === true ? "red" : ""}`
            }
          >
            <i
              className={`bx bx-camera-moive movie-body--all-div--icon ${
                isRedTheme === true ? "red" : ""
              }`}
            ></i>
            <h4
              className={`movie-body--all-div--h4 ${
                isRedTheme === true ? "red" : ""
              }`}
            >
              {movie.kind}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
