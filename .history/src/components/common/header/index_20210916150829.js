const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full static border-b z-50">
      <div className="head-top flex justify-between py-1.5 pr-32 pl-28 bg-blue-800 w-full">
        <div className="w-screen max-w-screen-xl flex justify-between">
          <div className="head-top-left flex text-white font-medium w-9/12">
            <div className="head-top phone">
              <span></span>
              +1 631 729-8182
            </div>
            <div className="heap-top email">
              <span></span>
              cs@theautopartsshop.com
            </div>
          </div>
          <div className="head-top-right text-white font-medium">
            Track Order
          </div>
        </div>
      </div>
      <div>2</div>
      <div>3</div>
    </header>
  );
};

export default Header;
