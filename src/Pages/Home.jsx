import React, { useEffect, useState, useContext } from "react";
import "./Home.scss";
import Movie from "../Pages/Movie";
import { ThemeContext } from "../components/theme.jsx";
const Home = () => {
  const { isRedTheme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [check, setCheck] = useState(false);
  let username = "";
  useEffect(() => {
    username = sessionStorage.getItem("username");
    setUser(username);
  }, [username]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = fetch("http://localhost:3004/products")
      .then((response) => response.json())
      .then((response) => setData(response));
    if (!user) {
      setCheck(false);
    }
    if (user) {
      setCheck(true);
    }
  }, [search === "", user]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const result = data.filter((item) => {
      if (e.target.value !== "") {
        return (
          item?.title?.toLowerCase()?.includes(e.target.value?.toLowerCase()) ||
          item?.year?.toLowerCase()?.includes(e.target.value?.toLowerCase()) ||
          item?.country
            ?.toLowerCase()
            ?.includes(e.target.value?.toLowerCase()) ||
          item?.language
            ?.toLowerCase()
            ?.includes(e.target.value?.toLowerCase()) ||
          item?.kind?.toLowerCase()?.includes(e.target.value?.toLowerCase()) ||
          item?.genre?.find((item) =>
            item?.toLowerCase()?.includes(e.target.value?.toLowerCase())
          )
        );
      } else {
        return data;
      }
    });
    setData(result);
  };

  return (
    <div className="home">
      <div className="home--container">
        <div
          className={`home--container-header ${
            isRedTheme === true ? "red" : ""
          }`}
        >
          <h2
            className={`home--container-header--h2 ${
              isRedTheme === true ? "red" : ""
            }`}
          >
            Home
          </h2>
          <div className="home--container-header-search">
            <input
              type="text"
              className="home--container-header-search--input"
              placeholder="Search Here..."
              value={search}
              onChange={handleSearch}
            />
            <i
              className={`bx bx-search ${isRedTheme === true ? "red" : ""}`}
            ></i>
          </div>
        </div>
      </div>
      <div className="home--container-body">
        {check ? (
          data.map((item, index) => <Movie key={index} movie={item} />)
        ) : (
          <div className={`noData ${isRedTheme === true ? "red" : ""}`}>
            <i className="bx bx-user-x noData--icon"></i>
            <h1 className="noData--h1">Login First</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
