import React from 'react';
import './Product.scss';
import { IoMdCart } from "react-icons/io";

const Product = () => {
  return (
    <header>
      <h2>Emarh<span>Shop</span></h2>
      <IoMdCart color='#fb5607' size={30} />
    </header>
  )
}

export default Product;
