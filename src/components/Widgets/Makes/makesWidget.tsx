import Link from 'next/link';

import MakesList from 'Components/Common/Constants/MakesList.json';
import Heading from 'Components/Common/headings';
import styles from 'Styles/widget.module.scss';

import CategoryWidget from '../Categories/categoryWidget';

const MakesWidget = (props: any) => (
  <div
    className={`${styles.widget} ${styles.autoHeight} ${styles.logoWrapper}`}
  >
    <div className={styles.WidgetHeader}>
      <Heading className="heading" label="Find your own Makes" />
      <span>
        Our concern is for your vehicle, your vehicle will never under the lock
        down, make sure to keep your vehicle healthy!!
      </span>
    </div>
    <div className={`${styles.WidgetBody} ${styles.makeWrapper}`}>
      <div>
        <div className={`${styles.featuredCategoryContainer} ${styles.bottom}`}>
          {MakesList.slice(0, 18).map((value, index) => (
            <CategoryWidget
              key={index}
              heading={value.category}
              imagesrc={value.imgsrc}
              makes
              simplewidget
              vehicle={props.vehicle}
              viaHome
            />
          ))}
          {MakesList.length > 18 ? (
            <span>
              <Link href="/seeall?type=Makes">
                <a>See All</a>
              </Link>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);

export default MakesWidget;
