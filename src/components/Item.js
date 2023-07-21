import React, { useState } from "react";

function Item({ name, category }) {
const [isInCat,setIsInCat]=useState(false)
const liClass=isInCat?"in-cart":""

  function handleCat(){
   setIsInCat(!isInCat)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCat} className="add">{isInCat?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
