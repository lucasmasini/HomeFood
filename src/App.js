import React from 'react';
import Header from "./components/Header/Header";
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx'
import CartProvider from './components/Context/CartContext';

const App = () => {

  return(
    <>
      <BrowserRouter>
        <CartProvider>
          <Header/> 
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/products' element={<ItemListContainer />}/>
            <Route path='/categories/:name' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<ShoppingCart />}/>
            <Route path='*' element={<MainPage />}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}


export default App;

