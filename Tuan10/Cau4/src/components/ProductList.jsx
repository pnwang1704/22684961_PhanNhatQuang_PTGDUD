import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Cà phê sữa', price: 25000 },
  { id: 2, name: 'Trà đào', price: 30000 },
  { id: 3, name: 'Sinh tố bơ', price: 35000 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()}đ
            <button style={{ marginLeft: '10px' }} onClick={() => handleAddToCart(product)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;