import UserSvg from '../../../../../svg/UserSvg.js';
import UserSvg from '../../../../../svg/CommentsSvg.js';
import React from 'react';

const Login = () => {
  return (
    <li className=".account">
      <div className="wrap">
        <span className="nav-icon">
          <CommentsSvg />
        </span>
        <span className="icon_label">Chat</span>
      </div>
    </li>
  );
};

export default Login;
