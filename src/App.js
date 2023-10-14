import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import SearchBar from "./pages/shop/Search";
import { PRODUCTS as data} from "./products";
import { FavouriteContext } from "./pages/cart/Favourites";

import { CartItem } from "./pages/cart/cart-item";
import { Product } from "./pages/shop/product";
import {Favourites} from "./pages/cart/Favourites";

function App() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    
    <div className="App">
      {/* <SearchBar
      data={data} 
      setFilteredData={setFilteredData} 
      />

      <div className="product">
      
      {filteredData.map((item) => (
           <><img src={item.productImage} /><div className="description">
          <p>
            <b>{item.productName}</b>
          </p>
          <p> ${item.price}</p>
        </div><button className="addToCartBttn" onClick={() => Product.addToCart(item.id)}>
            Add To Cart {Product.cartItemCount > 0 && <> ({Product.cartItemCount})</>}
          </button></>
        ))}
      
      </div> */}
      
      <ShopContextProvider>
      <Favourites/>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Router>
      
       
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
