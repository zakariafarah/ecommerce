import React, { useState } from "react";
import "../../App";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { ShopContextProvider } from "../../context/shop-context";
import { CartItem } from "../cart/cart-item";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Searching for: ${searchQuery}`);
  //   // Add your search functionality here
  // }

  return (
    
      <input 
        type="text" 
        placeholder="Search Items"
        value={searchQuery}
        onChange={handleSearchInputChange} 
      />
      
    
  );
}

export default SearchBar;