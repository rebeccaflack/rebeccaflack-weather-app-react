import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <br />
      <div className="card app-body">
        <div className="card-body">
          <form id="search-form">
            <input
              type="text"
              placeholder="Where in the world..."
              id="search-text-input"
            />
            <input type="submit" value="🔍" id="search" />
            <input
              type="submit"
              value="📍 Current"
              id="current-location-button"
            />
          </form>
          <br />
          <h1 className="city">Toronto</h1>
          <h5>Last updated:</h5>
          <h5>
            <span id="current-date"></span>
          </h5>
          <h1 className="current-temperature">
            <span id="current-temperature"> 24 </span>
            <span className="units">
              <button href="#" id="celsius-link" className="active">
                ˚C
              </button>{" "}
              |
              <button href="#" id="farenheit-link">
                ˚F
              </button>
            </span>
          </h1>
          <div className="row">
            <div className="col">
              <p>
                <span id="weather-description"> Partly cloudy </span>
                <br />
                Wind: <span id="wind"> 11 </span> km/h
                <br />
                Humidity: <span id="humidity">90</span>%
              </p>
            </div>
            <div className="col center-block text-center">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                className="current-weather-icon"
                id="icon"
                alt="weather icon"
              />
            </div>
          </div>
          <div className="card text-center">
            <div className="card-body">
              <p className="quote">
                "The Earth has music for those who listen"
                <br />- George Santayana
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://github.com/rebeccaflack/GIT-SheCodesPlusProject"
          target="blank"
          className="link"
        >
          Open-source code by Rebecca Flack
        </a>
        <br />
      </div>

      <br />
      <br />
    </div>
  );
}
