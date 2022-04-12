import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  // use string literals for the api key
  const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <main>
        <header>dgfgf</header>
        <div className="search__bar"></div>
        <div className="weather__info"></div>
      </main>
    </>
  );
};
export default App;
