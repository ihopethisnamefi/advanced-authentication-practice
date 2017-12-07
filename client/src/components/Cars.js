import React, { Component } from "react";

class Cars extends Component{

  componentDidMount() {
    fetch("/cars")
    .then( (response) => {
      return response.json();
    })
  }

  render() {
    return (
      <div>
          I'm a car!

      </div>

    );
  }
}
export default Cars;