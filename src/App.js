import React from "react";
import Weather from "./weather/Weather";
import WeatherDetails from "./weather/WeatherDetails";
import Today from "./Today";
import Search from "./Search";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div id="wrap">
        <div id="center">
          <div id="top">
            <Search />
            <Today />
          </div>
          <div id="bottom">
            <Weather />
          </div>
        </div>
        <div id="right">
          <WeatherDetails />
        </div>
      </div>
    );
  }
}

export default App;
