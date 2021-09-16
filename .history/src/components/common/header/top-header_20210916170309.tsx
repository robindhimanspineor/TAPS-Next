import PhoneHandle from '../../../svg/PhoneHandleSvg.js';
import MailBoxSvg from '../../../svg/MailBoxSvg.js';
import TrackOrderSvg from '../../../svg/TrackOrderSvg.js';

import topHeaderStyles from '../../../styles/top-header.module.css';
const TopHeader = () => {
  return (
    <div className={`${topHeaderStyles.bgBlue} head-top py-2 w-full text-base`}>
      <div className="w-screen max-w-screen-xl flex justify-between mx-auto">
        <div className="head-top-left flex text-white font-medium pl-4">
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
  );
};
export default TopHeader;
