import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
// import { CustomButton } from './components/CustomButton/CustomButton';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return(
    <>      
      <Header/> 
      <ItemListContainer/>
      {/* <CustomButton title="Click me"/> */}
    </>
  )
}


export default App;

