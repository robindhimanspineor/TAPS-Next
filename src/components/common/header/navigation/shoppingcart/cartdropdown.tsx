import React from 'react';
import ClickAwayListener from '../../../ClickAwayListener';
import Link from 'found/lib/Link';
import { removeItem } from '../../../../../utils/mutations';
import { withRouter } from 'found';

class ShoppingCartDropdown extends React.Component {
  handleItemRemove = item => {
    removeItem(item, data => {
      if (data === '0') {
        this.props.handleClose();
      }
    });
  };
  appMethod = cart => {
    this.props.getCartItems(cart);
  };
  handleCheckout = e => {
    const products = this.props.cart;
    const self = this;
    const checkoutUrl = '/checkout';
    if (window.ga && ga.loaded) {
      e.preventDefault();
      //-------------------------------------------------------------
      // Start Enhanced Ecommerce
      // Measuring Checkout Steps 1 (Checkout View)
      dataLayer.push({
        ecommerce: undefined,
      });
      const items = [];
      let item;
      products.map(result => {
        item = {
          name: result.title,
          id: result.sku_id,
          price: result.price.toString(),
          brand: result.brand,
          quantity: result.quantity,
          category: result.category,
          dimension3: '',
        };
        items.push(item);
      });
      ga('require', 'ecommerce');
      dataLayer.push({
        event: 'checkout',
        ecommerce: {
          checkout: {
            actionField: { step: 1, option: 'Checkout View' },
            products: items,
          },
        },
        eventCallback: () => {
          self.props.router.push(checkoutUrl);
        },
      });
      // END Measuring Checkout Steps 1 (Checkout View)
      //-------------------------------------------------------------
    }
  };
  handleItemClick = (product, e) => {
    if (window.ga && ga.loaded) {
      e.preventDefault();
      const self = this;
      const productUrl = `/${product.product_url}`;

      //-------------------------------------------------------------
      // Start Enhanced Ecommerce
      // Measuring Product Clicks
      dataLayer.push({
        ecommerce: undefined,
      });
      ga('require', 'ecommerce');
      dataLayer.push({
        event: 'productClick',
        ecommerce: {
          click: {
            actionField: { list: 'Cart list' },
            products: [
              {
                name: product.title,
                id: product.sku_id,
                price: product.price.toString(),
                brand: product.brand,
                category: product.category,
                dimension3: '',
              },
            ],
          },
        },
        eventCallback: () => {
          self.props.router.push(productUrl);          
          if (
            typeof window !== 'undefined' &&
            document.getElementById('sku-qty') !== null
          ) {
            document.getElementById('sku-qty').value = 1;
          }
          self.props.handleClose();
        },
      });
      // END Measuring Product Clicks
      //-------------------------------------------------------------
    }
  };

  render() {
    const { cart } = this.props;
    return (
      <ClickAwayListener onClickAway={this.props.handleClose}>
        <div
          className="dropdown-menu"
          style={{ display: this.props.open ? 'block' : 'none' }}
        >
          <div className="items-list">
            {cart.map((item, index) => {
              const skuPath = `/${cart[index].product_url}`;
              return (
                <div className="item-row" key={index}>
                  <div className="item-image">
                    <img src={item.imageUrl} alt="item1" />
                  </div>
                  <div className="item-content">
                    <Link
                      to={skuPath.replace(/\s/g, '')}
                      onClick={this.handleItemClick.bind(this, item)}
                    >
                      {item.title}
                    </Link>
                    <span className="item-price">
                      ${parseFloat(item.price).toFixed(2)}
                    </span>
                    <span className="item-qty">Qty: {item.quantity}</span>
                    <button
                      className="item-remove button-outlined"
                      onClick={this.handleItemRemove.bind(this, item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="list-buttons">
            <Link
              to="/cart"
              onClick={this.appMethod(cart)}
              className="button-blue-line"
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              onClick={this.handleCheckout.bind(this)}
              className="button-red-solid"
            >
              Checkout
            </Link>
          </div>
        </div>
      </ClickAwayListener>
    );
  }
}

export default withRouter(ShoppingCartDropdown);
