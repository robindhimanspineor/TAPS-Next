import CategoriesHeader from './categoriesHeader';
import MainHeader from './mainHeader';
import TopHeader from './topHeader';

const Header: any = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full static border-b z-50">
      <TopHeader />
      <MainHeader />
      <CategoriesHeader />
    </header>
  );
};

export default Header;
