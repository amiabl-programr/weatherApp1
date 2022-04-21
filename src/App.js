import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import cloud from "./cloud.png";

const App = () => {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
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
        <header>
          <nav>
            <a href="#">Forecast</a>
            <ul>
              <li>Git</li>
              <li>Twitter</li>
              <form>
                <label>
                  <input name="" value={""} placeholder="Enter location" />
                </label>
              </form>
            </ul>
          </nav>
        </header>

        <div></div>
        <div className="weather__info">
          <h1 className="city__name">{data.name}</h1>
          <div className="temp__container">
            <p className="temp">23</p>
            <img
              src={cloud}
              className="temp__image"
              alt="Image showing the temperature"
            />
          </div>
        </div>

        <footer></footer>
      </main>
    </>
  );
};
export default App;
