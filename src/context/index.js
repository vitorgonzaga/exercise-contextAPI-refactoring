import { createContext } from 'react';

const MyContext = createContext({});

// O Context retorna um objeto que possui duas chaves a saber:
// Context = {
//   Provider:
//   Consumer:
// }

export default MyContext;

// Feito isso é necessário fornecer o contexto para a aplicação envelopando o <App /> com o comp Provider
