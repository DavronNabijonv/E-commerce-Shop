import React, { useState } from 'react';
import './App.css';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import {
  BrowserRouter,
  // Route,
  // Routes,
  // Routes
} from "react-router-dom";


function App() {
// fetch data from database 'Data.js'
  const {productItems} = Data; 
  const [cartItem, setCardItem] = useState([]);


  const addToCart = (product)=> {
    const productExit = cartItem.find((item)=> item.id === product.id);
    if(productExit){
      setCardItem(cartItem.map((item)=> (item.id === product.id ? {...productExit, qty: productExit.qty +1}: item)))
    }
  }

  return (
    <>
      <BrowserRouter>
      <Header/>
        {/* <Routes> */}
          <React.Fragment>
            <Pages productItems={productItems} addToCart={addToCart}/>
          </React.Fragment>
          {/* <Route exact path="/">
            <Pages />
          </Route>
        </Routes> */}
      </BrowserRouter> 
          
    </>
  );
}

export default App;
