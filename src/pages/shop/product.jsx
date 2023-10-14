import React, { useContext } from "react";
import { ShopContext, addToFavourite,ShopContextProvider } from "../../context/shop-context";
import { FavouriteContext } from "../cart/Favourites";


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  
  const { addToCart, cartItems } = useContext(ShopContext);
  const { addToFavourites} = useContext(FavouriteContext);


  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <button className="addToCartBttn" onClick={() => addToFavourites(id)}>
        Add To Favourites 
      </button>
    </div>
  );
};
