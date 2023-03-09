import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Components/Loader";
import "./App.css";
import cloud from "./assets/cloud.png";
import search_icon from "./assets/search.svg";



const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Lagos");
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  // use string literals for the api key

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
        // console.log(data?.main?.pressure)
      })
      .catch((err) => console.error(err))
    // setLocation("")

  }
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
        // console.log(data?.main?.pressure)
      })
      .catch((err) => console.error(err))
    setLocation("");
  }, [])
  // function to handle weather search
  // const handleCurrentLocation = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setLocation(e.target.value);
  // };

  return (
    <>
      <header>
        <nav>
          <h1>Weather</h1>


          <div className="nav__links">
            <a href="#">Git</a>
            <a href="#">Twitter</a>
          </div>

        </nav>
      </header>
      <main>
        <form onSubmit={handleSearch}>
          <label>
            <input
              type="text"
              // value=""
              // onke={handleSearch}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              // onKeyPress={handleSearch}
              name="location"
              placeholder="Enter location"
            />
            <img src={search_icon} alt="" onClick={handleSearch} className="search__icon" />
          </label>
        </form>


        <div className="weather__info">
          <h1 className="city__name">{data.name}</h1>
          <div className="temp__container">
            <span className="temp">
              {data.main && data.main.temp}
              <sup>o</sup>c
            </span>

            {/* <img src={cloud} className="temp__image" alt="temperature" /> */}
          </div>
        </div>
        {data.main ? (<div className="cards__container">
          {data.main && (
            <>
              <div className="cards">
                <div>
                  <h2>Pressure</h2>
                  {data.main.pressure}
                </div>
                <div>
                  <h2>
                    Humidity
                  </h2>
                  {data.main.humidity}
                </div>
                <div>
                  <h2>
                    Visibility
                  </h2>
                  {data.visibility}
                </div>
                <div>
                  <h2>
                    Windspeed
                  </h2>
                  {data.wind.speed}
                </div>
              </div>
            </>

          )
          }
        </div>) : <Loader />}

      </main>
      <footer>
        By Victor
      </footer>
    </>
  );
}

export default App;
