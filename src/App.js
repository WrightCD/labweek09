import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [mainTitle, setMainTitle] = useState(
    "Welcome to Fullstack Development - I"
  );
  const [subTitle, setSubTitle] = useState(
    "React JS Programming Week09 Lab Exercise"
  );
  const [studentId, setStudentId] = useState("100875122");
  const [studentName, setStudentName] = useState("Carl Wright");
  const [college, setCollege] = useState("George Brown College, Toronto, ON");

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor, color: textColor }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>{mainTitle}</h1>
          <h3>{subTitle}</h3>
          <h5>{studentId}</h5>
          <h5>{studentName}</h5>
          <p>
            <b>{college}</b>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
