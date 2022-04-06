import React from 'react';
import Header from "./components/Header/Header";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return(

    <>
      <BrowserRouter>
        <Header/> 
        <ItemListContainer/>
      </BrowserRouter>
    </>
  )
}


export default App;

