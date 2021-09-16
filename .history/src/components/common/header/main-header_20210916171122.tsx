import Logo from './logo';
import SearchBar from './searchbar';

const MainHeader = () => {
  return (
    <div className="main-header">
      <Logo />
      <SearchBar />
      <div className="cart-button"></div>
    </div>
  );
};

export default MainHeader;
