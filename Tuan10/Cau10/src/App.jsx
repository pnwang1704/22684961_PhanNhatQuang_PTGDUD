import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import { setProducts } from './redux/productSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Mock API call to fetch products
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ];
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <div>
      <h1>Shopping App</h1>
      <Login />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
