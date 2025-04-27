import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm nào.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <strong>{item.name}</strong> - {item.price.toLocaleString()}đ x 
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={e => handleQuantityChange(item.id, e.target.value)}
                style={{ width: '50px', margin: '0 5px' }}
              />
              <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <p><strong>Tổng số lượng:</strong> {totalQuantity}</p>
      <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ</p>
    </div>
  );
};

export default Cart;