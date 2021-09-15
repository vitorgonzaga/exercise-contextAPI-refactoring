// src/Cars.jsx

import React from 'react';
import MyContext from './context';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

// importa o Contexto que possui os valores que serão utilziados na app;
// Nesse caso, transforma o componente funcional para componente de classe;
// Conecta o componente ao contexto (Cars.contextType = MyContext)
// dentro do render declara as variáveis através do destructuring do this.context;

class Cars extends React.Component {
  render(){
    const { red: redCar, blue: blueCar, yellow: yellowCar } = this.context.cars;
    // foram renomeadas as chaves para aproveitar o restante do códito que fora escrito
    const { moveCar } = this.context;
    return (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', !redCar)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue', !blueCar)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellow', !yellowCar)}
            type="button"
          >
            Move
          </button>
        </div>
      </div>
    );
  }
}

Cars.contextType = MyContext;

export default Cars;
