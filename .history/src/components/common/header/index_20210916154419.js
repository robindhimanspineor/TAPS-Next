import PhoneHandle from '../../../svg/PhoneHandleSvg.js';
import MailBoxSvg from '../../../svg/MailBoxSvg';

import topHeaderStyles from '../../../styles/top-header.module.css';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full static border-b z-50">
      <div
        className={`${topHeaderStyles.bgBlue} head-top flex justify-between py-2 pr-32 pl-28  w-full text-base`}
      >
        <div className="w-screen max-w-screen-xl flex justify-between">
          <div className="head-top-left flex text-white font-medium w-9/12">
            <div className="head-top-phone flex items-center text-white w-auto  font-semibold">
              <div className="text-white h-6 w-4 flex items-center fill-current">
                <PhoneHandle />
              </div>
              <p className="pl-0.5">+1 631 729-8182</p>
            </div>
            <div className="heap-top-email flex items-center text-white w-auto  font-semibold ml-8">
              <div className="text-white h-6 w-6 flex items-center pr-2">
                <MailBoxSvg />
              </div>
              <p>cs@theautopartsshop.com</p>
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