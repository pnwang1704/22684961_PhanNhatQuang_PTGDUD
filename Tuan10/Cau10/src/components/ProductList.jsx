import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - {product.price}</span>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
