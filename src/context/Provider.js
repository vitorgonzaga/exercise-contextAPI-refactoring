// O Provider é um componente de classe
import React from "react";


class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    }
  }

  moveCar = (car, side) =>  {
    this.setState({
      ...this.state,
      [car]:side,
    })
  }

  render() {
    return (null)
  }
}

export default Provider;