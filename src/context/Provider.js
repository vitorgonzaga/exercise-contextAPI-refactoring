// O Provider é um componente de classe
import React from "react";
import carContext from ".";


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
      cars : {
        ...this.state.cars,
        [car]:side,
      }
    })
  }

  changeSignal = (strSignal) => {
    this.setState({
      signal: {
        ...this.setState.signal,
        color: strSignal,
      }
    })
  }

  render() {
    return (null)
  }
}

export default Provider;