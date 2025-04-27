import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name} - {item.price} x {item.quantity}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
