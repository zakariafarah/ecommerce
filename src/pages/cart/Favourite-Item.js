import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { FavouriteContext } from "./Favourites";
import { Favourites } from "./Favourites";


export const FavouriteItem = (props) => {
  const { id, productName, price, productImage } = props.data;
 
  const { addToFavourites,removeFromFavourites} = useContext(FavouriteContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
      </div>
        <button className="addToCartBttn" onClick={() => removeFromFavourites(id)}>
            Remove Favourites 
        </button>
       
    
    </div>
  );
};
