import React from 'react';
import Header from "./components/Header/Header";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/products' element={<ItemListContainer />}/>
          <Route path='/categories/:name' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<ShoppingCart />}/>
          <Route path='*' element={<MainPage />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}


export default App;

