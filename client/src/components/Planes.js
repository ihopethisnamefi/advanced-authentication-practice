import React, { Component } from "react";

class Planes extends Component{

    componentDidMount() {
        fetch("/planes")
        .then( (response) => {
          return response.json();
        })
      }

    render() {
    return (
        <div>
            I'm a plane!

        </div>

    );
    }
}
export default Planes;