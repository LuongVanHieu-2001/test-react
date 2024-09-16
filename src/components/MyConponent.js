
import React from "react";


class MyComponent extends React.Component {
  state = {
    name: "Van Hieu",
    age: 23,
    address: "TPHCM"
  };

  render() {
    return <div> 
        My name is {this.state.name} , I'm from {this.state.address} and {this.state.age} year old.
        </div>;
  }
};

export default MyComponent;