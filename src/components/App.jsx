// import "./App.css";

import React, { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

// ReactPixel.init("123456789012345"); // встав Pixel ID сюди
// ReactPixel.pageView(); // відстежуємо перегляд сторінки
import "@fontsource/bangers"; // базова вага 400
import "./App.css"; // твій CSS
import MiniQuiz from "./MiniQuiz/MiniQuiz";
function App() {
  useEffect(() => {
    ReactPixel.init("877581725042921"); // твій Pixel ID
    ReactPixel.pageView(); // відстежуємо перегляд сторінки
  }, []);
  return (
    <div className="wwwrap">
      <h1>My-favorite-pet</h1>
      <h2>Мій домашній улюбленець</h2>
      <MiniQuiz />
    </div>
  );
}

export default App;
