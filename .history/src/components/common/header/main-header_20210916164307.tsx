import Logo from './logo';

const MainHeader = () => {
  return (
    <div className="main-header w-screen max-w-screen-xl">
      <Logo />
      <div className="searchbar"></div>
      <div className="cart-button"></div>
    </div>
  );
};

export default MainHeader;
