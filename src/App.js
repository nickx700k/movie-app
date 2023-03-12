import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import SideBar from "./components/SideBar";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ThemeColor from "./components/ThemeColor.tsx";
import { ThemeContext } from "./components/theme.jsx";

function App() {
  const { isDarkTheme, isRedTheme } = useContext(ThemeContext);
  return (
    <div className={`App ${isDarkTheme === true ? "dark" : ""}`}>
      <BrowserRouter>
        <SideBar />
        <div className="pages">
          <ThemeColor />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie" component={Movie} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
