import React from 'react';
import ShoppingCart from './shoppingcart/ShoppingCart.jsx';
import Chat from './chat';
import Login from './Login';
import Help from './help';

const Navigation = () => (
  <div className="cart-buttons">
    <div className="buttons-list">
      <ul>
        <Login
        // userName={props.userName}
        // authToken={props.authToken}
        // refetchCart={props.refetchCart}
        // handleLogin={props.handleLogin}
        />
        <ShoppingCart
        // refetchCart={props.refetchCart}
        // cartID={props.cartID}
        // userID={props.userID}
        // getCartItems={props.getCartItems}
        // receivedCartDetails={props.receivedCartDetails}
        />

        <Chat />
        <Help />
      </ul>
    </div>
  </div>
);

export default Navigation;
