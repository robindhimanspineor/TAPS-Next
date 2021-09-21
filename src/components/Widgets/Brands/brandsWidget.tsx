import Link from 'next/link';

import BrandsList from 'Components/Common/Constants/brandsList';
import Heading from 'Components/Common/headings';
import styles from 'Styles/widget.module.scss';

import CategoryWidget from '../Categories/categoryWidget';

const BrandsWidget = () => (
  <div
    className={`${styles.widget} ${styles.autoHeight} ${styles.logoWrapper}`}
  >
    <div className={styles.WidgetHeader}>
      <Heading
        className="heading"
        label="Choose your auto parts with most dependable brands"
      />
      <span>Shop around with the popular brands without hesitation</span>
    </div>
    <div className={`${styles.WidgetBody} ${styles.brandWrapper}`}>
      <div>
        <div
          className={`${styles.featuredCategoryContainer} ${styles.bottom} ${styles.boxWrapper}`}
        >
          {BrandsList.slice(0, 12).map((value: any, index: number) => (
            <CategoryWidget
              key={index}
              heading={value.name}
              imagesrc={value.imgsrc}
              url={value.url}
              simplewidget
              brands
              // vehicle={props.vehicle}
              viaHome
            />
          ))}
          {BrandsList.length > 18 ? (
            <span>
              <Link href="/seeall?type=Brands">
                <a>See All</a>
              </Link>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);

export default BrandsWidget;
