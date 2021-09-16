import React from 'react';
import ShoppingCart from './shoppingcart/ShoppingCart.jsx';
import Chat from './chat';
import Login from './Login';
import Help from './help';

const Navigation = () => (
  <div className="cart-buttons">
    <div className="buttons-list">
      <ul>
        <Login />
        <ShoppingCart />
        <Chat />
        <Help />
      </ul>
    </div>
  </div>
);

export default Navigation;
