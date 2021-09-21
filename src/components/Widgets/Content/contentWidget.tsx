import React from 'react';

import Link from 'next/link';

import styles from 'Styles/widget.module.scss';
import MapSvg from 'Svg/MapSvg';
import PartsSvg from 'Svg/PartsSvg';
import PaymentSvg from 'Svg/PaymentSvg';
import VideoSvg from 'Svg/VideoSvg';

const ContentWidget = () => (
  <div className={`${styles.widget} ${styles.autoHeight} `}>
    <div className={styles.WidgetBody}>
      <div className={styles.WidgetBody}>
        <div className={styles.contentheading}>
          <h1>Shop Auto Parts Online</h1>
          <p>
            The Autoparts Shop the leading auto parts supplier ensures
            durability and compatibility of its products; it is the upper hand
            in the auto parts industry. Our motto is customer’s satisfaction
            with our service and products, so we provide genuine tested products
            at a reasonable price with a 24×7 customer support centre. Our
            trustworthiness and loyalty towards the customers makes us one of
            the leading online platforms to buy car spares online at a
            compatible price.
          </p>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentWrapperbox}>
            <div className={styles.svg}>
              <PaymentSvg />
            </div>
            <p>Multiple Payment Options</p>
          </div>
          <div className={styles.contentWrapperbox}>
            <div className={styles.svg}>
              <VideoSvg />
            </div>
            <p>Instructional Video Library</p>
          </div>
          <div className={styles.contentWrapperbox}>
            <div className={styles.svg}>
              <MapSvg />
            </div>
            <p>Shipping in 48 States </p>
          </div>
          <div className={styles.contentWrapperbox}>
            <div className={styles.svg}>
              <PartsSvg />
            </div>
            <p>3 Million Unique Parts</p>
          </div>
        </div>
        <span className={styles.readmore}>
          <Link href="/">Read More</Link>
        </span>
      </div>
    </div>
  </div>
);

export default ContentWidget;
