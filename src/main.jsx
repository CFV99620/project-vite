import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createContext } from 'react' // Importa createContext para crear un contexto de React, que permite compartir valores (como el tema) entre componentes sin tener que pasar props manualmente en cada nivel del árbol de componentes.
import { useState } from 'react';
import './index.css'
import App from './App.jsx'
import Text from './components/Text/Text.jsx';
import PersonalForm from './components/PersonalForm/PersonalForm.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import UserList from './components/UserList/UserList.jsx';
import Counter from './components/Counter/Counter.jsx';

export const ThemeContext = createContext('light');// Crea un contexto con el valor predeterminado 'light', el contexto es como una caja que puede contener valores que pueden ser accedidos por cualquier componente hijo sin necesidad de pasar props manualmente.
//el export es para poder importarlo en otros archivos.
function ThemeProvider( { children } ) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));//dato globitoooo, setTheme al ser invocado asi pasa el valor del estado anterior como parametro en este caso prevTheme
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{/* El proveedor del contexto envuelve a los componentes hijos y les proporciona acceso al valor del tema y a la función para cambiarlo. */}
      {children}
    </ThemeContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      {/*<Text />*/}
      <NavigationBar />
      <PersonalForm />
      <Counter />
      <UserList />
    </ThemeProvider>
  </StrictMode>,
)
