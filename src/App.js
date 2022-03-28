import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return(
    <>      
      <Header/> 
      <ItemListContainer/>
    </>
  )
}


export default App;

