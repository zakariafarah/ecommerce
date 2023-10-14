

import React, { useContext,useState, createContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { FavouriteItem } from "./Favourite-Item";
import "./cart.css";


export const FavouriteContext = createContext(" ");

  const getFavourites = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

export const Favourites = (props) => {
  const [favourites, setFavourites] = useState(getFavourites());

  
  const addToFavourites = (itemId) => {
    setFavourites((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromFavourites = (itemId) => {
    setFavourites((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  
  const contextValue = {
    favourites,
    addToFavourites,
    removeFromFavourites,  
  };

  return (
   
    <div className="cart">
        <div>
          <h1>Favourites</h1>
        </div>

        <div className="cart">
          {PRODUCTS.map((favourite) => {
            if (favourites[favourite.id] !== 0) {
              return <FavouriteItem data={favourite} />;
            }

          })}
        </div>
       <FavouriteContext.Provider value={contextValue}>
          {props.children}
        </FavouriteContext.Provider>
      </div>  
  );
};

