import React from 'react';
import CartDropDown from './cartdropdown';
import { QueryRenderer } from 'react-relay';
import environment from '../../../../../environment';
import CartQuery from '../../../queries/Cart';
import { getCookie, replaceCookie } from '../../../../../helpers';

class ShoppingCart extends React.Component {
  state = {
    open: false,
    type: '',
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open, type: 'cart' }));
    setTimeout(() => {
      if (this.state.open && this.props.items > 0) {
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = 1;
        overlay.style.zIndex = 9;
        overlay.style.transition = 'opacity 0.2s ease-in-out';
        document.body.classList.add('overflow-hidden');
      } else {
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = 0;
        overlay.style.zIndex = -1;
        overlay.style.transition = 'opacity 0.2s ease-in-out';
        document.body.classList.remove('overflow-hidden');
      }
    }, 10);
  };

  handleClose = () => {
    if (this.state.type === 'cart') {
      this.setState({ open: false, type: '' });
      const overlay = document.getElementById('overlay');
      overlay.style.opacity = 0;
      overlay.style.zIndex = -1;
      overlay.style.transition = 'opacity 0.2s ease-in-out';
      document.body.classList.remove('overflow-hidden');
    }
  };

  render() {
    const { open } = this.state;
    const { cart, items } = this.props;

    return (
      <li className="full-cart">
        <div className="wrap" onClick={this.handleToggle} role="presentation">
          <span>
            <span className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M238 2332 c-15 -17 -14 -90 0 -104 8 -8 50 -11 121 -9 121 3 154 -7 186 -56 13 -19 47 -195 117 -598 54 -313 100 -580 101 -592 1 -12 6 -21 11 -20 5 1 11 -4 14 -12 3 -9 0 -11 -8 -6 -7 4 -2 -6 11 -24 28 -38 38 -41 14 -4 -16 25 -14 25 19 -6 38 -37 48 -52 19 -30 -15 11 -16 11 -6 -1 7 -7 21 -15 30 -16 10 -2 42 -10 72 -18 82 -24 1157 -25 1180 -1 25 25 22 71 -7 97 -14 13 -23 19 -20 13 4 -7 -185 -9 -560 -8 -508 2 -570 4 -599 19 -45 23 -62 53 -77 135 l-14 69 557 0 556 0 51 24 c28 13 55 29 58 35 10 15 29 14 20 -1 -13 -22 37 25 58 55 11 15 21 40 23 55 1 15 39 140 84 278 44 139 81 260 81 271 0 10 -6 25 -12 33 -11 12 -10 12 4 1 9 -7 19 -25 21 -39 l4 -27 2 26 c0 16 -9 34 -26 50 -14 13 -23 18 -18 10 6 -11 4 -13 -9 -8 -10 4 -370 7 -800 7 l-782 0 -21 118 c-12 64 -24 126 -28 137 -6 17 -5 17 5 5 10 -13 11 -13 7 0 -2 8 -10 15 -17 15 -7 0 -15 6 -18 14 -3 9 0 11 9 5 12 -6 12 -5 0 9 -8 10 -16 15 -19 12 -3 -2 -22 11 -43 30 -22 20 -60 40 -91 49 -71 20 -246 25 -260 8z" />
                  <path d="M720 1958 c0 -17 43 -18 788 -16 l787 3 -779 2 c-609 3 -782 6 -788 16 -5 8 -8 7 -8 -5z" />
                  <path d="M948 698 c16 -6 16 -7 -1 -7 -28 -1 -79 -30 -122 -70 -21 -20 -33 -27 -25 -16 14 18 14 19 -2 6 -10 -7 -16 -17 -13 -21 3 -4 -2 -25 -11 -46 -16 -39 -16 -135 0 -179 7 -17 6 -17 -4 -5 -10 13 -11 13 -7 0 2 -8 8 -15 13 -15 6 0 25 -17 44 -38 48 -55 103 -80 175 -80 69 0 111 17 170 72 21 20 33 27 25 16 -14 -18 -14 -19 2 -6 10 7 16 17 13 21 -3 4 2 24 10 44 19 45 19 127 0 172 -8 20 -13 40 -10 44 7 11 -56 75 -87 91 -17 8 -15 4 7 -15 17 -14 33 -25 36 -26 4 0 15 -12 24 -27 15 -24 12 -23 -21 8 -42 40 -92 69 -121 70 -17 0 -17 1 -1 7 10 4 -12 7 -47 7 -35 0 -57 -3 -47 -7z" />
                  <path d="M1845 689 c-16 -5 -36 -7 -43 -4 -8 3 -10 0 -6 -7 5 -8 2 -9 -10 -5 -11 5 -29 -5 -54 -29 -20 -20 -31 -33 -23 -28 9 4 12 2 9 -7 -3 -8 -10 -14 -15 -14 -6 0 -15 -4 -20 -9 -5 -5 -3 -6 5 -2 16 10 15 1 -5 -37 -21 -41 -20 -134 1 -175 19 -37 20 -46 4 -36 -8 4 -10 3 -5 -2 5 -5 14 -9 20 -9 5 0 12 -6 15 -14 3 -9 0 -11 -9 -6 -8 5 -3 -4 10 -18 25 -28 37 -35 25 -16 -4 7 -1 10 7 7 8 -3 14 -10 14 -15 0 -6 4 -15 9 -20 5 -5 6 -2 1 6 -5 9 -3 12 6 9 8 -3 13 -10 12 -16 -2 -6 3 -9 10 -7 6 3 26 0 42 -5 l30 -10 -35 5 c-27 4 -31 2 -18 -6 29 -17 134 6 222 49 5 3 5 -2 1 -9 -4 -8 8 2 28 20 36 34 47 48 27 36 -15 -9 -12 0 13 42 17 29 22 54 22 103 0 49 -5 74 -22 103 -26 44 -28 51 -10 41 6 -4 -4 9 -22 29 -34 36 -48 47 -36 27 9 -15 -1 -12 -37 10 -35 21 -31 28 5 9 17 -9 20 -9 11 1 -15 15 -138 21 -179 9z" />
                </g>
              </svg>
            </span>
            {items > 0 ? <span className="meta">{items}</span> : null}
          </span>
          <span className="icon_label">Cart</span>
        </div>
        {items > 0 ? (
          <CartDropDown
            handleClose={this.handleClose}
            environment={environment}
            cart={cart}
            open={open}
            getCartItems={this.props.getCartItems}
          />
        ) : null}
      </li>
    );
  }
}

const Cart = parentProps => (
  <QueryRenderer
    environment={environment}
    query={CartQuery}
    variables={{
      cart_id: parentProps.cartID,
      user_id: parentProps.userID,
      operation: 'view_cart',
      zip_code: parentProps.zipcode,
    }}
    render={({ error, props }) => {
      const emptyCart = [];
      if (error) {
        return (
          <ShoppingCart
            cart={emptyCart}
            items={0}
            getCartItems={parentProps.getCartItems}
          />
        );
      } else if (props) {
        if (props.store.outerCart.cart.is_new) {
          replaceCookie('cart_id', props.store.outerCart.cart.cart_id);
        }
        return (
          <ShoppingCart
            items={props.store.outerCart.cart.totalNumberOfItems}
            cart={props.store.outerCart.cart.cart_entry}
            getCartItems={parentProps.getCartItems}
          />
        );
      }
      return (
        <ShoppingCart
          cart={emptyCart}
          items={0}
          getCartItems={parentProps.getCartItems}
        />
      );
    }}
  />
);

const CartContainer = props => {
  const emptyCart = [];
  const cartID = getCookie('cart_id');
  const userID = getCookie('taps_uuid');
  const zipcode =
    typeof window !== 'undefined' &&
      sessionStorage &&
      sessionStorage.getItem('zipcode') !== null
      ? sessionStorage.getItem('zipcode')
      : '';
  if (cartID && userID) {
    return (
      <Cart
        cartID={cartID}
        userID={userID}
        getCartItems={props.getCartItems}
        zipcode={zipcode}
      />
    );
  }
  return (
    <ShoppingCart
      cart={emptyCart}
      items={0}
      getCartItems={props.getCartItems}
    />
  );
};

export default CartContainer;
