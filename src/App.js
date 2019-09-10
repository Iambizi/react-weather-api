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
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const cors = `https://cors-anywhere.herokuapp.com/`;

    const api_call = await fetch(
      `${cors}http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter values for city and country."
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="main">
            {/* <div className="container"> */}
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
