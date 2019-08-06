import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form
          // onSubmit={e => {
          //   e.preventDefault();
          //   this.props.getWeather();
          // }}
          onSubmit={this.props.getWeather}
        >
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
