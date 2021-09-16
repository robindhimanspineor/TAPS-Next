import UserSvg from '../../../../../svg/UserSvg.js';
import React from 'react';

const Login = () => {
  return (
    <li className=".account">
      <div className="wrap">
        <span className="nav-icon">
          <UserSvg />
        </span>
        <span className="icon_label">Account</span>
      </div>
    </li>
  );
};

export default Login;
