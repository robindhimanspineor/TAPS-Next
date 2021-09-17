import Logo from './logo';
import Navigation from './navigation/Navigation';
import SearchBar from './searchbar';

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
