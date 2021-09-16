// O Provider é um componente de classe
import React from "react";
import carContext from "."; //Para usar a chave Provider dentro do render


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
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
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