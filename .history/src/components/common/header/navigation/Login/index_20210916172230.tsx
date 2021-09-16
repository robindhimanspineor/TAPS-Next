import React from 'react';
import LoginDropdown from './LoginDropdown';
import { withAuthServiceContext } from '../../../../HOCS';
import UserSvg from '../../../Svg/LoginUserSvg';
import DataReflecter from '../../../../pages/Checkout/DataReflecter';
import LoginQuery from '../../../../common/queries/Login';
import { replaceCookie, getCookie } from '../../../../../helpers';
import CartQuery from '../../../../common/queries/Cart';

import { withRouter } from 'found/';

class Login extends React.Component {
  state = {
    showLoginDropdown: false,
    type: '',
    loginSubmit: false,
    invalidLogin: '',
    loader: false,
    invaidLoginCount: 0,
  };

  handleToggle = () => {
    this.setState(state => ({
      showLoginDropdown: !state.showLoginDropdown,
      type: 'account',
    }));
    setTimeout(() => {
      if (this.state.showLoginDropdown) {
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = 1;
        overlay.style.zIndex = 11;
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
    if (this.state.type === 'account') {
      this.setState({ showLoginDropdown: false, type: '', invalidLogin: '' });
      const overlay = document.getElementById('overlay');
      overlay.style.opacity = 0;
      overlay.style.zIndex = -1;
      overlay.style.transition = 'opacity 0.2s ease-in-out';
      document.body.classList.remove('overflow-hidden');
    }
  };
  showCreateAccount = () => {
    this.props.router.push('/createaccount');
    this.handleClose();
  };
  handleSignOut = () => {
    this.props.context.logOut();
    this.setState({ loginSubmit: false, getCart: false });
    this.handleClose();
  };
  handleSign = loginDetails => {
    this.setState({ loginSubmit: true, loginDetails });
  };
  receiveCartDetails = props => {
    if (props) {
      replaceCookie('cart_id', props.store.outerCart.cart.cart_id);
      this.setState({
        getCart: false,
      });
      this.handleClose();
      this.props.router.push('/myaccount');
    }
  };

  receiveLoginDetails = props => {
    this.setState({ loader: true });

    if (props && props.store.Login.status === 'VALID_LOGIN') {
      const { store: { Login: login } = {} } = props;

      /* replace taps_uuid */
      replaceCookie('taps_uuid', login.customerId);
      // if (getCookie('cart_id')) {
      //   this.setState({
      //     getCart: true,
      //   });
      // } else if (login.cartId) {
      //   replaceCookie('cart_id', login.cartId);
      //   this.setState({
      //     getCart: false,
      //   });
      //   this.props.refetchCart();
      //   this.props.router.push('/myaccount');
      // }
      if (getCookie('cart_id') && login.cartId.status === true) {
        this.setState({
          getCart: true,
        });
      } else if (
        getCookie('cart_id') === undefined &&
        login.cartId.status === true
      ) {
        replaceCookie('cart_id', login.cartId.cartId);
        this.props.refetchCart();

        this.props.router.push('/myaccount');
      } else {
        this.props.router.push('/myaccount');
      }

      this.setState({
        invalidLogin: '',
        loader: false,
      });
      this.props.context.logIn(login);
    } else if (props && props.store.Login.status === 'INVALID_LOGIN') {
      this.setState({
        invalidLogin: props.store.Login.description,
        loader: false,
        invaidLoginCount: this.state.invaidLoginCount + 1,
      });

      if (this.state.invaidLoginCount === 3) {
        this.props.router.push('/forgotpassword');
        this.handleClose();
      }
    }
  };

  render() {
    const {
      showLoginDropdown,
      loginSubmit,
      loginDetails,
      invalidLogin,
      getCart,
    } = this.state;

    const authToken =
      typeof window !== 'undefined' && localStorage
        ? localStorage.getItem('auth_token')
        : null;
    const userName =
      typeof window !== 'undefined' && localStorage
        ? localStorage.getItem('name')
        : null;
    const customerUUID = getCookie('taps_uuid');
    const cartID = getCookie('cart_id');
    const zipcode =
      typeof window !== 'undefined' &&
        sessionStorage &&
        sessionStorage.getItem('zipcode') !== null
        ? sessionStorage.getItem('zipcode')
        : '';
    return (
      <li className="account">
        {getCart ? (
          <DataReflecter
            query={CartQuery}
            variables={{
              cart_id: cartID,
              user_id: customerUUID,
              operation: 'merge_cart',
              zip_code: zipcode,
            }}
            onRecieveData={this.receiveCartDetails}
          />
        ) : null}
        {loginSubmit ? (
          <DataReflecter
            query={LoginQuery}
            variables={{
              loginId: loginDetails.loginId,
              password: loginDetails.password,
            }}
            onRecieveData={this.receiveLoginDetails}
          />
        ) : null}
        <div
          className="wrap"
          onClick={this.handleToggle}
          role="presentation"
          id="account_login"
        >
          <span
            className={authToken !== null ? 'nav-icon loggedIn' : 'nav-icon'}
          >
            <UserSvg />
          </span>
          <span className="meta">
            {authToken !== null ? <span>{userName}</span> : 'Account'}
          </span>
        </div>
        {showLoginDropdown ? (
          <LoginDropdown
            handleClose={this.handleClose}
            open={showLoginDropdown}
            authenticated={authToken}
            handleSignOut={this.handleSignOut}
            handleSign={this.handleSign}
            invalid_Login={invalidLogin}
            loader={this.state.loader}
            showCreateAccount={this.showCreateAccount}
          />
        ) : null}
      </li>
    );
  }
}

export default withRouter(withAuthServiceContext(Login));
