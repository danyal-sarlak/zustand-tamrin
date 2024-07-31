import React from 'react';
import products from '../constants/products';
import ProductItem from '../Components/ProductItem';

export default function ProductList() {
  return (
    <>
      {
        products.map((product, index) => {
          return (
            <ProductItem key={index} data={product} />
          )
        })
      }
    </>
  );
}
