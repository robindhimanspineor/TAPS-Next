import Link from 'next/link';

import BlogsList from 'Components/Common/Constants/BlogsList.json';
import Heading from 'Root/components/Common/headings';
import styles from 'Styles/widget.module.scss';

import CategoryWidget from '../Categories/categoryWidget';

const BlogsWidget = (props: any) => (
  <div className={`${styles.widget} ${styles.autoHeight}`}>
    <div className={styles.WidgetHeader}>
      <Heading className="heading" label="Know more with our Blogs" />
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        Customer&apos;s satisfaction with our dedicated services is our main
        motto
      </span>
    </div>
    <div className={styles.widgetBody}>
      <div>
        <div
          className={`${styles.featuredCategoryContainer} ${styles.bottom} ${styles.BlogsWrapper}`}
        >
          <div className={styles.row1Wrapper}>
            {BlogsList.slice(0, 3).map((value, index) => (
              <CategoryWidget
                key={index}
                heading={value.category}
                description={value.desc}
                url={value.url}
                simplewidget
                partTypewidget
                showImage
                blogs
                vehicle={props.vehicle}
                viaHome
                imagesrc={value.imgsrc}
              />
            ))}
          </div>
          <div className={styles.row2Wrapper}>
            {BlogsList.slice(3, 6).map((value, index) => (
              <CategoryWidget
                key={index}
                heading={value.category}
                description={value.desc}
                url={value.url}
                simplewidget
                partTypewidget
                showImage
                blogs
                vehicle={props.vehicle}
                viaHome
                imagesrc={value.imgsrc}
              />
            ))}
          </div>
          <span>
            <Link href="/blog">
              <a>See All</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default BlogsWidget;
