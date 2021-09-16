import React from 'react';
import CartDropDown from './cartdropdown';

class Items extends React.Component {
  state = {
    open: false,
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const { cart, items, environment } = this.props;

    return (
      <li className="full-cart">
        <div className="wrap" onClick={this.handleToggle} role="presentation">
          <span className="nav-icon">
            <svg x="0px" y="0px" viewBox="0 0 323.99 282.77">
              <path
                fill="none"
                stroke="#777"
                strokeMiterlimit="7"
                strokeWidth="7px"
                d="M136.48,61.62h40.28a14,14,0,0,1,13.78,11.53L225.08,266a14,14,0,0,0,13.78,11.53H426.14l-188.07.08a14,14,0,0,1-13.78-11.5l-5.15-33.83H424.48a14,14,0,0,0,13.83-11.85l17-109.34a14,14,0,0,0-13.83-16.15H229.81"
                transform="translate(-136.48 -56.62)"
                aria-label="cart icon"
              />
              {items > 0 ? (
                <circle fill="#3d5b99" cx="186.19" cy="107.57" r="30" />
              ) : null}

              <circle
                fill="none"
                stroke="#777"
                strokeMiterlimit="7"
                strokeWidth="7px"
                cx="286.39"
                cy="253.87"
                r="23.5"
              />
              <circle
                fill="none"
                stroke="#777"
                strokeMiterlimit="7"
                strokeWidth="7px"
                cx="107.86"
                cy="254.27"
                r="23.5"
              />
            </svg>
          </span>
          {items > 0 ? <span className="meta">{items}</span> : null}
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

export default Items;
