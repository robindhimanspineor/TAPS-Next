import TopHeader from './top-header';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full static border-b z-50">
      <TopHeader />
      <div>The AutoPArt Search</div>
      <div>Categories</div>
    </header>
  );
};

export default Header;
