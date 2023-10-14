import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { FavouriteContext } from "./Favourites";
// import {addToFavourite};

export const FavouriteItem = (props) => {
  const {  productName, price, productImage } = props.data;
 
  const { addToFavourites} = useContext(FavouriteContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
      </div>
        <button className="addToCartBttn">
            Remove Favourites 
        </button>
       
    
    </div>
  );
};
