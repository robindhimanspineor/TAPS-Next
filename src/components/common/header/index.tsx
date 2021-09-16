import TopHeader from './top-header';
import MainHeader from './main-header';
import CategoriesHeader from './categories-header';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full static border-b z-50">
      <TopHeader />
      <MainHeader />
      <CategoriesHeader />
    </header>
  );
};

export default Header;
