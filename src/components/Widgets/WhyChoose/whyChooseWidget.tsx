import Link from 'next/link';

import Heading from 'Components/Common/headings';
import styles from 'Styles/widget.module.scss';
import CustomerSupportSvg from 'Svg/CustomerSupportSvg';
import ExpertAdviceSvg from 'Svg/ExpertAdviceSvg';
import GuranteedFitSvg from 'Svg/GuranteedFitSvg';
import ReturnSvg from 'Svg/ReturnnSvg';
import SelectionSvg from 'Svg/SelectionSvg';
import ShippingSvg from 'Svg/ShippingSvg';

const WhyChooseWidget = () => (
  <div className={`${styles.widget} ${styles.autoHeight} `}>
    <Heading label="Why The Autoparts Shop" />
    <div className={styles.widgetBody}>
      <div className={styles.widgetRowWrapper}>
        <div className={styles.boxWrapper}>
          <div className={styles.widgetColWrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.WhyChooseHeading}>
                <h3>Guaranteed fitted</h3>
              </div>
              <div className={styles.contentWrapper}>
                If you drive vintage cars or a new model vehicle, then it is
                very difficult to get the original spare part of that particular
                vehicle,but we also provide these procure model spare parts.
                Whatever you&apos;re automotive-related needs, you can easily
                fulfil it with us just a few click of online order on our
                portal. We make buying vehicle parts online simpler by giving
                exact and detailed fitment data, which makes for a clear and
                bother free shopping experience. Our built-in vehicle selector
                additionally permits you to look from our list of aftermarket
                parts and adornments by year, make, and model, so you&apos;re
                constantly ensured an ideal fit for your vehicle.
              </div>
            </div>
            <div className={styles.svgWrapper}>
              <div className={styles.logo}>
                <GuranteedFitSvg />
              </div>
            </div>
          </div>
          <span className={`${styles.readmore} ${styles.readbtn}`}>
            <Link href="/about">Read More</Link>
          </span>
        </div>
        <div className={styles.boxWrapper}>
          <div className={styles.widgetColWrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.WhyChooseHeading}>
                <h3>Hassle free shipping</h3>
              </div>
              <div className={styles.contentWrapper}>
                We offer hassle free shipping of your ordered parts at your door
                step or business within one business day with the best offer.You
                can search on our website for auto parts of your cars and
                accessories as per to their name,brands, make, model, year and
                part respectively. If you&apos;re looking for any specific auto
                part component that matches the need of your vehicle, then you
                have just to type the respective part name on our auto parts
                gallery search bar, and then simply choose your car parts that
                matches the model of your car.
              </div>
            </div>
            <div className={styles.svgWrapper}>
              <div className={styles.logo}>
                <ShippingSvg />
              </div>
            </div>
          </div>
          <span className={`${styles.readmore} ${styles.readbtn}`}>
            <Link href="/about">Read More</Link>
          </span>
        </div>
      </div>
      <div className={styles.widgetRowWrapper}>
        <div className={styles.boxWrapper}>
          <div className={styles.widgetColWrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.WhyChooseHeading}>
                <h3>30 days return</h3>
              </div>
              <div className={styles.contentWrapper}>
                In case you purchase a wrong auto part or you are not satisfied
                by the product then you can easily return that spare part
                without any problem. You just simply submit your return request
                within 30 days of your purchase; you will receive a mail in
                which you will get all details of product returning.
              </div>
            </div>
            <div className={styles.svgWrapper}>
              <div className={styles.logo}>
                <ReturnSvg />
              </div>
            </div>
          </div>
          <span className={`${styles.readmore} ${styles.readbtn}`}>
            <Link href="/about">Read More</Link>
          </span>
        </div>
        <div className={styles.boxWrapper}>
          <div className={styles.widgetColWrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.WhyChooseHeading}>
                <h3>Multi- channels customer support</h3>
              </div>
              <div className={styles.contentWrapper}>
                Customer’s satisfaction is our top priority! We are available
                24*7 through different communication channels. You can connect
                with us through chat, calls or email.
              </div>
            </div>
            <div className={styles.svgWrapper}>
              <div className={styles.logo}>
                <CustomerSupportSvg />
              </div>
            </div>
          </div>
          <span
            className={`${styles.readmore} ${styles.readbtn} ${styles.multichannelbtn}`}
          >
            <Link href="/about">Read More</Link>
          </span>
        </div>
      </div>
      <div className={styles.widgetRowWrapper}>
        <div className={styles.boxWrapper}>
          <div className={styles.widgetColWrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.WhyChooseHeading}>
                <h3>Wide selection</h3>
              </div>
              <div className={styles.contentWrapper}>
                We offer highest and best variety of auto parts and accessories
                that perfectly suits your vehicle. We offer both OEM and
                aftermarket parts. If you want to save your money by purchasing
                aftermarket parts or original parts then you will be able to
                find the parts and accessories you need at TAPS. Whatever
                you&apos;re automotive-related needs, you can easily fulfil it
                with us just a few click of online order on our portal. TAPS has
                a large product selection and supply of auto parts as well the
                car accessories range of various cars. These are about a million
                automotive parts and the auto accessories in order to satisfy
                every car owner’s demand as well.
              </div>
            </div>
            <div className={styles.svgWrapper}>
              <div className={styles.logo}>
                <SelectionSvg />
              </div>
            </div>
          </div>
          <span className={`${styles.readmore} ${styles.readbtn}`}>
            <Link href="/about">Read More</Link>
          </span>
        </div>
        <div className={styles.boxWrapper}>
          <div className={styles.widgetColWrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.WhyChooseHeading}>
                <h3>Expert car part advice</h3>
              </div>
              <div className={styles.contentWrapper}>
                If you are not sure about the need of your car in terms of
                reconditioned, aftermarket or a factory part, simply give a call
                to our team and explain your situation. All our parts experts
                have extensive automotive experience. Our experts will be happy
                to provide wide range of options that also include weather you
                can save money by purchasing these parts.
              </div>
            </div>
            <div className={styles.svgWrapper}>
              <div className={styles.logo}>
                <ExpertAdviceSvg />
              </div>
            </div>
          </div>
          <span className={`${styles.readmore} ${styles.readbtn}`}>
            <Link href="/about">Read More</Link>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default WhyChooseWidget;
