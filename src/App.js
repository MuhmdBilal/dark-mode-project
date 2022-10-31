import React, { useState } from "react";
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {ThemeProvider} from "styled-components";
import {lightTheme,darkTheme} from "./project/Themes"
import Project from './project/project'

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>

     <Project toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
