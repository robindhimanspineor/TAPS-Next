import React from 'react';
import ClickAwayListener from '../../../ClickAwayListener';
import Link from 'found/lib/Link';
import { withRouter } from 'found';
import isEmpty from '../../../../../helpers/isEmpty';
import isEmail from '../../../../../helpers/isEmail';
import { showHidePassword } from '../../../../../helpers';
import WarningSvg from './../../../Svg/WarningSvg';
import OpenEyeSvg from './../../../Svg/OpenEyeSvg';
import HideEyeSvg from './../../../Svg/HideEyeSvg';

function validateInput(data, errors) {
  if (isEmpty(data.loginId)) {
    errors.loginId = 'This field is required';
  }
  if (!isEmpty(data.loginId) && !isEmail(data.loginId)) {
    errors.loginId = 'Please enter a valid email id';
  }
  if (isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

class LoginDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      loginDetails: { loginId: '', password: '' },
      errors: {},
      showpassword: false,
    };
  }
  onBlur = e => {
    const accountErrors = this.state.errors;

    if (!isEmpty(e.target.value)) {
      accountErrors[e.target.name] = '';
    } else {
      accountErrors[e.target.name] = '';
    }
    this.setState({
      errors: accountErrors,
    });
  };
  isValid() {
    const accountErrors = {};
    const { loginDetails } = this.state;
    const { errors, isValid } = validateInput(loginDetails, accountErrors);

    if (!isValid) {
      this.setState({
        errors,
      });
    }
    return isValid;
  }

  showHidePassword = (e, value) => {
    const isText = showHidePassword(value);

    if (!isText) {
      this.setState({ showpassword: false });
    } else {
      this.setState({ showpassword: true });
    }
  };
  handleSignIn = e => {
    e.preventDefault();
    const { loginDetails } = this.state;
    const accountErrors = {};
    const isFormValid = this.isValid();
    if (isFormValid) {
      this.props.handleSign(loginDetails);
    }
  };
  handleSignOut = () => {
    this.props.router.push('/');
    this.props.handleClose();
    this.props.handleSignOut();
  };
  handleOrders = () => {
    this.props.router.push('/orders');
    this.props.handleClose();
  };
  handleMyAccount = () => {
    this.props.router.push('/myaccount');
    this.props.handleClose();
  };
  handleAddressBook = () => {
    this.props.router.push('/addressbook');
    this.props.handleClose();
  };
  handleProfile = () => {
    this.props.router.push('/profile');
    this.props.handleClose();
  };
  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'loginId') {
      this.setState({
        loginDetails: {
          ...this.state.loginDetails,
          [name]: value.toLowerCase(),
        },
      });
    } else {
      this.setState({
        loginDetails: {
          ...this.state.loginDetails,
          [name]: value,
        },
      });
    }
  };
  handleTerms = e => {
    e.preventDefault();

    this.props.router.push({
      pathname: '/generalinfo',
      query: {
        type: 'terms',
      },
    });
    this.props.handleClose();
  };

  handlePrivacy = e => {
    e.preventDefault();

    this.props.router.push({
      pathname: '/generalinfo',
      query: {
        type: 'privacy',
      },
    });
    this.props.handleClose();
  };

  render() {
    const { loginDetails, errors, showpassword } = this.state;
    return (
      <ClickAwayListener onClickAway={this.props.handleClose}>
        <div
          className={
            this.props.authenticated ? 'dropdown-menu auth' : 'dropdown-menu'
          }
          style={{ display: this.props.open ? 'block' : 'none' }}
        >
          <div className="main-div account">
            {this.props.authenticated ? (
              <ul>
                <li onClick={this.handleMyAccount} role="presentation">
                  My Account
                </li>
                <li onClick={this.handleOrders} role="presentation">
                  Orders
                </li>
                {/* <li onClick={this.handleAddressBook} role="presentation">
                  Address Book
                </li> */}
                <li onClick={this.handleProfile} role="presentation">
                  Profile Settings
                </li>
                <li
                  className="sign-out"
                  onClick={this.handleSignOut}
                  role="presentation"
                >
                  Sign out
                </li>
              </ul>
            ) : (
              <form onSubmit={this.handleSignIn}>
                {this.props.invalid_Login && (
                  <div className="commonError" id="invalid_Login">
                    <span>
                      <WarningSvg />
                    </span>
                    {this.props.invalid_Login}
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="loginId"
                    placeholder="Please enter your email"
                    onChange={this.handleChange}
                    value={loginDetails.loginId}
                    onBlur={this.onBlur}
                  />
                  {errors.loginId && (
                    <div className="error" id="email_error">
                      {errors.loginId}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Please enter password"
                    onChange={this.handleChange}
                    value={loginDetails.password}
                    onBlur={this.onBlur}
                    id="loginPassword"
                    className="withshowpass"
                  />
                  {errors.password && (
                    <div className="error" id="password_error">
                      {errors.password}
                    </div>
                  )}
                  <span
                    role="presentation"
                    onClick={event => {
                      this.showHidePassword(event, 'loginPassword');
                    }}
                    className="eyespan"
                  >
                    {showpassword ? <OpenEyeSvg /> : <HideEyeSvg />}
                  </span>
                </div>
                <div className="forgot">
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </div>
                <div className="helper">
                  By Continuing you agree to The Auto Parts Shop{' '}
                  <span role="presentation" onClick={this.handleTerms}>
                    Condtions of use
                  </span>{' '}
                  and{' '}
                  <span role="presentation" onClick={this.handlePrivacy}>
                    Privacy Policy
                  </span>
                </div>
                <div className="actions">
                  <button type="submit" className="button-blue-solid">
                    Sign in
                    {this.props.loader ? (
                      <span className="spinner">
                        <img src="/public/images/spin.gif" alt="loader" />
                      </span>
                    ) : null}
                  </button>
                  <div className="strike">
                    <span>New to The Autoparts Shop ?</span>
                  </div>

                  <span
                    onClick={this.props.showCreateAccount}
                    className="button-blue-line"
                  >
                    Create Account
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </ClickAwayListener>
    );
  }
}

export default withRouter(LoginDropdown);
