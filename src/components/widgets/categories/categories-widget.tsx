import Link from 'next/link';

import styles from '../../../styles/widget.module.scss';
import CategoriesList from '../../common/constants/categories-list';
import CategoryWidget from './category-widget';

const CategoriesWidget = () => {
  return (
    <div className={`${styles.widget} ${styles.autoHeight}`}>
      <div className={`${styles.widgetBody} ${styles.categoryWrapper}`}>
        <div className={`${styles.featuredCategoryContainer} ${styles.bottom}`}>
          {CategoriesList.slice(0, 8).map((value, index) => (
            <CategoryWidget
              key={index}
              heading={value.name}
              url={value.url}
              categories
              simplewidget
              showImage
              // vehicle={props.vehicle}
              viaHome
              imagesrc={value.imgsrc}
            />
          ))}
          <span>
            <Link href="/seeall?type=Categories">
              <a>See All</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoriesWidget;
