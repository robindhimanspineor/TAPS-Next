const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full static border-b z-50">
      <div className="head-top just-between py-1.5 pr-32 pl-28 bg-blue-800 w-full">
        <div className="head-top-left">
          <div className="head-top phone">
            <span></span>
            +1 631 729-8182
          </div>
          <div className="heap-top email">
            <span></span>
            cs@theautopartsshop.com
          </div>
        </div>
        <div>1.1</div>
      </div>
      <div>2</div>
      <div>3</div>
    </header>
  );
};

export default Header;
