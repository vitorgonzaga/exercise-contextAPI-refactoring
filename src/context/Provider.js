// Pelo que entendi, é boa prática criar um provider como um componente de classe
import React from 'react';
// Importar o Context criado no index pois é necessário utilizar a chave Provider
import MyContext from '../context';

class Provider extends React.Component {
  constructor () {
    super();
    // O initialValue do reducer, passa a ser o estado inicial do componente Provider
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
    // A action moveCar para a ser uma função que irá atualizar o estado do componente Provider
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    })
  }


  render() {
    // Declara o objeto com todas as informações que se deseja passar via props no Provider do Context criado
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
    }

    const { children } = this.props;

    return (
      <MyContext.Provider value={ contextValue }>
        { children }
      </MyContext.Provider>
    );
  }
}

export default Provider;
