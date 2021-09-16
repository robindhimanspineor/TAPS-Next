import PhoneHandle from '../../../svg/PhoneHandleSvg';
import MailBoxSvg from '../../../svg/MailBoxSvg';
import TrackOrderSvg from '../../../svg/TrackOrderSvg';

import topHeaderStyles from '../../../styles/top-header.module.css';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full static border-b z-50">
      <div
        className={`${topHeaderStyles.bgBlue} head-top flex justify-between py-2 pr-32 pl-28  w-full text-base`}
      >
        <div className="w-screen max-w-screen-xl flex justify-between">
          <div className="head-top-left flex text-white font-medium w-9/12">
            <div className="head-top-phone flex items-center text-white w-auto">
              <div
                className="text-white h-6 w-6 flex items-center pr-2"
                style={{ fill: '#fff' }}
              >
                <PhoneHandle />
              </div>
              <p>+1 631 729-8182</p>
            </div>
            <div className="heap-top-email flex items-center text-white w-auto ml-8">
              <div
                className="text-white h-6 w-6 flex items-center pr-2"
                style={{ fill: '#fff' }}
              >
                <MailBoxSvg />
              </div>
              <p>cs@theautopartsshop.com</p>
            </div>
          </div>
          <div className="head-top-right text-white font-medium">
            <div
              className="head-top-track-order flex items-center text-white w-auto cursor-pointer"
              onClick={() => console.log('track order')}
            >
              <div
                className="text-white h-6 w-6 flex items-center pr-2 "
                style={{ fill: '#fff' }}
              >
                <TrackOrderSvg />
              </div>
              <p>Track order</p>
            </div>
          </div>
        </div>
      </div>
      <div>The AutoPArt Search</div>
      <div>Categories</div>
    </header>
  );
};

export default Header;
