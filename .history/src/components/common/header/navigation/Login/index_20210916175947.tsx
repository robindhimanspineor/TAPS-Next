import UserSvg from '../../../../../svg/UserSvg.js';

const Login = () => {
  return (
    <li className=".account">
      <div className="wrap" role="presentation" id="account_login">
        <span className={'nav-icon'}>
          <UserSvg />
        </span>
        <span className="meta">Account</span>
      </div>
    </li>
  );
};

export default Login;
