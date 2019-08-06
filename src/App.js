import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// import axios from "axios";

const API_KEY = "d3b1e8e765544cb816a08a596dbd3fbe";

class App extends Component {
  // async getWeather(e) {
  //   // const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;
  //   const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}`;

  //   const response = await axios.get(url);

  //   console.log(response.data);
  // }

  // componentDidMount() {
  //   this.getWeather();
  // }
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    console.log(data);
  };

  render() {
    return (
      <React.Fragment>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </React.Fragment>
    );
  }
}

export default App;
