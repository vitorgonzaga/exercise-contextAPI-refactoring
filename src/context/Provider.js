// O Provider é um componente de classe
import React from "react";
import carContext from "./index"; //Para usar a chave Provider dentro do render


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
    const { state, moveCar, changeSignal } = this;
    const contextValue = {
      ...state,
      moveCar,
      changeSignal,
    }

    const { children } = this.props;

    return (
      <carContext.Provider value={ contextValue }>
        { children }
      </carContext.Provider>
    )
  }
}

export default Provider;