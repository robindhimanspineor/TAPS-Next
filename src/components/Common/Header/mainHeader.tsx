import Logo from './Logo';
import Navigation from './Navigation/Navigation';
import SearchBar from './Searchbar';

const MainHeader: any = () => {
  return (
    <div className="main-header">
      <Logo />
      <SearchBar />
      <Navigation />
    </div>
  );
};

export default MainHeader;
