import Logo from './logo';

const MainHeader = () => {
  return (
    <div className="main-header w-screen max-w-screen-xl flex flex-row flex-wrap items-center content-start w-full flex-grow h-20">
      <Logo />
      <div className="searchbar"></div>
      <div className="cart-button"></div>
    </div>
  );
};

export default MainHeader;
