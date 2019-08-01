import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import axios from "axios";

const API_KEY = "d3b1e8e765544cb816a08a596dbd3fbe";

class App extends Component {
  
  async componentDidMount() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

    const response = await axios.get(url);

    console.log(response);
  }

  render() {
    return (
      <React.Fragment>
        <Titles />
        <Form />
        <Weather />
      </React.Fragment>
    );
  }
}

export default App;
