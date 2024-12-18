import React from 'react'
import { useSelector } from 'react-redux';

const Product = () => {
  const theme = useSelector((state) => state.themeChanger.value)
  console.log(theme);
  
  return (
    <div>Product</div>
  )
}

export default Product