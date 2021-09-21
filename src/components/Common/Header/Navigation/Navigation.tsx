import React from 'react';

import Chat from './chat';
import Help from './help';
import Login from './Login';
import ShoppingCart from './ShoppingCart/ShoppingCart';

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
