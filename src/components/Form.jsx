import React from "react";

const Form = props => (
  <React.Fragment>
    <form
      // onSubmit={e => {
      //   e.preventDefault();
      //   this.props.getWeather();
      // }}
      onSubmit={props.getWeather}
    >
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
  </React.Fragment>
);

export default Form;
