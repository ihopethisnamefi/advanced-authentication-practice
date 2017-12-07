import React, { Component } from "react";

class Trains extends Component{

    componentDidMount() {
        fetch("/trains")
        .then( (response) => {
          return response.json();
        })
      }
    

    render() {
    return (
        <div>
            I'm a Train!

        </div>

    );
    }
}
export default Trains;