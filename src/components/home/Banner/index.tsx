import { useRouter } from 'next/router';
import Slider from 'react-slick';

import styles from '../../../styles/banner.module.scss';

const Banner = () => {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className={styles.homeslider}>
      <div className={styles.homebanner}>
        <img
          src={`${router.basePath}/assets/images/home-banner.png`}
          alt="banner"
        />
        <div>
          <h3>SEARCH AND ORDER ALL YOUR</h3>
          <h1>AUTO PARTS</h1>
          <h5>IN ONE LOCATION</h5>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
