import React from "react";
import { useState } from "react";
import "./App.css";
import cloud from "./assets/cloud.png";



const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  // use string literals for the api key

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
        // console.log(data?.main?.pressure)
      })
      .catch((err) => console.error(err))
    setLocation("")

  }

  // function to handle weather search
  // const handleCurrentLocation = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setLocation(e.target.value);
  // };

  return (
    <>
      <main>
        {/* header */}
        <header>
          <nav>
            <button>Forecast</button>
            <ul>
              <li>Git</li>
              <li>Twitter</li>
              <form onSubmit={handleSearch}>
                <label>
                  <input
                    type="text"
                    // value=""
                    onClick={handleSearch}
                    onChange={(e) => setLocation(e.target.value)}
                    // onKeyPress={handleSearch}
                    name="location"
                    placeholder="Enter location"
                  />
                </label>
              </form>
            </ul>
          </nav>
        </header>

        <div>{location}</div>
        <div className="weather__info">
          <h1 className="city__name">{data.name}</h1>
          <div className="temp__container">
            <span className="temp">
              23<sup>o</sup>c
            </span>

            <img src={cloud} className="temp__image" alt="temperature" />
          </div>
        </div>

        <section>
          {data.main && (
            <>

              <div className="pressure">
                {data.main.pressure}
                pressure
              </div>
              <div className="humidity">
                {data.main.humidity}
                humidity
              </div>
              <div className="visibility">
                {data.visibility}
                visibility
              </div>
              <div className="windspeed">
                {data.wind.speed}
                windspeed
              </div>
            </>

          )}
        </section>
      </main>
    </>
  );
}

export default App;
