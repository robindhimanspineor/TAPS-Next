import Link from 'next/link';

import FacebookSvg from 'Root/svg/FacebookSvg';
import TwitterSvg from 'Root/svg/TwitterSvg';
import YoutubeSvg from 'Root/svg/YoutubeSvg';
import styles from 'Styles/footer.module.scss';
import Comments2Svg from 'Svg/Comments2Svg';
import MailBoxSvg from 'Svg/MailBoxSvg';
import MapMarkSvg from 'Svg/MapMarkSvg';
import PhoneHandle from 'Svg/PhoneHandleSvg';

import FeaturedCategoriesList from '../Constants/FeaturedCategoriesList.json';

const Footer = () => {
  const getPathWithVehicle = (path: any) => {
    // if (this.props.vehicle) {
    //   const { year, make, model, submodel, engine } = this.props.vehicle;
    //   return `/${path}/${sanitizeFitmentPath({
    //     year,
    //     make,
    //     model,
    //     submodel,
    //     engine,
    //   })}`;
    // }
    // return `/${path.replace(/\s/g, '')}`;
    return `/${path}`;
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={`${styles.row} row`}>
            <div className="taps-sm">
              <h4>Information</h4>
              <ul>
                <li>
                  <Link href="/about">
                    <a>About Us </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faqs">
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contactus">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
              <h4>Customer Service</h4>
              <ul>
                <li>
                  <Link href="/generalinfo?type=terms">
                    <a>Terms &amp; Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shipping">
                    <a>Shipping Rates Policies</a>
                  </Link>
                </li>
                <li>
                  <Link href="/returnpolicy">
                    <a>Returns and Refunds Policies</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="taps-sm">
              <h4>Popular Searches</h4>
              <ul>
                <li>
                  <Link href={getPathWithVehicle('headlight-assembly')}>
                    Headlights
                  </Link>
                </li>
                <li>
                  <Link href={getPathWithVehicle('bumper-cover')}>
                    Bumper Cover
                  </Link>
                </li>
                <li>
                  <Link href={getPathWithVehicle('grille')}> Grille </Link>
                </li>
                <li>
                  <Link href={getPathWithVehicle('wheel')}> Wheel </Link>
                </li>
              </ul>
              <h4>Catalogs</h4>
              <ul>
                <li>
                  <Link href="/seeall?type=Brands">All Brands</Link>
                </li>
                <li>
                  <Link href="/seeall?type=part-types">All Parttypes</Link>
                </li>
                <li>
                  <Link href="/seeall?type=Categories">All Categories</Link>
                </li>
              </ul>
            </div>
            <div className="taps-sm">
              <h4>Shop with the Autopartshop</h4>
              <ul>
                {FeaturedCategoriesList.map((value, index) => (
                  <li key={index}>
                    <Link
                      href={`/${value.category
                        .replace(/\s/g, '-')
                        .toLowerCase()}`}
                    >
                      {value.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`taps-sm ${styles.contact}`}>
              <h4>Contact </h4>
              <ul>
                <li>
                  <span className={styles.foot_svg}>
                    <MapMarkSvg />
                  </span>
                  <div>
                    <address>
                      <strong>Corporate Address </strong>
                      <br />
                      <span>Ebc Technologies LLC</span>
                      <br />
                      <span>200 Motor Parkway, Suite D-26</span>
                      <br />
                      <span>Hauppauge, NY 11788</span>
                      <br />
                      <span>United States</span>
                    </address>
                  </div>
                </li>
                <li>
                  <span className={styles.foot_svg}>
                    <PhoneHandle />
                  </span>
                  <div>
                    <strong>Contact Number</strong>
                    <span>(631) 729-8182</span>
                  </div>
                </li>
                <li>
                  <span className={styles.foot_svg}>
                    <MailBoxSvg />
                  </span>
                  <div>
                    <strong>Email Address</strong>
                    <span>cs@theautopartsshop.com</span>
                  </div>
                </li>
                <li>
                  <span className={styles.foot_svg}>
                    <Comments2Svg />
                  </span>
                  <div onClick={() => console.log('Live Chat')}>Live Chat</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`taps-sm ${styles.security}`}>
            <p>
              The auto parts shop has a complete catalog of digicert secured
              auto parts that is totally protected and verified
            </p>
            <img src="/assets/images/footer-security.png" alt="security" />
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.container}>
            <div className={styles.row1}>
              <div className={styles.copyright}>
                Copyright &copy; 2009-2021 Ebc Technologies LLC. All Rights
                Reserved.
              </div>
              <div className={styles.follow}>
                <h4>Follow Us</h4>
                <ul className={styles.followUs}>
                  <li>
                    <a href="https://www.facebook.com/The-AutoParts-Shop-106012230924381/?modal=admin_todo_tour  ">
                      <FacebookSvg />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/DAutoPartsShop">
                      <TwitterSvg />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sm.taps/  ">
                      <img height={30} src="/assets/images/instagram.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UC4bcYhtha4KGNMTcFYNQ4sg ">
                      <YoutubeSvg />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.payment}>
                <img src="/assets/images/all_card.png" alt="payment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
