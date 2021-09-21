import Link from 'next/link';

import styles from 'Styles/widget.module.scss';
import ArrowNextSvg from 'Svg/ArrowNextSvg';

const CategoryWidget = (props: any) => {
  const {
    imagesrc,
    heading,
    url,
    description,
    hoverlistarray,
    // type,
    simplewidget,
    partTypewidget,
    // vehicle,
    // categoryName,
    showImage,
    viaHome,
  } = props;
  const featuredPath = `/feature/subcategory/${encodeURIComponent(
    heading.trim()
  )}`;
  const path = '';
  const partTypePath = '';
  // if (!vehicle) {
  //   if (makes) {
  //     path = `/${url}`;
  //   } else if (brands) {
  //     path = `/${url}`;
  //   } else if (categories) {
  //     path = `/${url}`;
  //   } else if (blogs) {
  //     path = `/${url}`;
  //   }
  //   partTypePath = `/${heading.replace(/\s/g, '-').toLowerCase()}`;
  // } else if (vehicle) {
  //   if (makes) {
  //     path = this.getMakesWithVehicle(url);
  //   } else if (brands) {
  //     path = this.getPathWithVehicle(url);
  //   } else if (categories) {
  //     path = this.getPathWithVehicle(url);
  //   } else if (blogs) {
  //     path = this.getPathWithVehicle(url);
  //   }
  //   partTypePath = this.getPathWithVehicle(url);
  // }

  const renderClasses = () => {
    if (viaHome && !showImage) return `${styles.categoryBox} ${styles.noImg}`;
    if (viaHome && showImage)
      return `${styles.categoryBox} ${styles.noImg} ${styles.partype}`;
    return `${styles.categoryBox}`;
  };

  const renderCategoryItem = () => {
    if (!partTypewidget && simplewidget && !showImage) {
      return (
        <Link href={path.replace(/\s/g, '')}>
          <img src={imagesrc} alt="logo" />
        </Link>
      );
    }
    if (!partTypewidget && simplewidget && showImage) {
      return (
        <>
          <img src={imagesrc} alt="categoryimage" />
          <Link href={path.replace(/\s/g, '')}>
            <p>{heading}</p>
          </Link>
        </>
      );
    }
    if (!partTypewidget && !simplewidget) {
      return (
        <ul>
          {hoverlistarray.slice(0, 3).map((name: any, i: number) => {
            return (
              <li key={i}>
                {/* <Link href={skuListingPath.replace(/\s/g, '')}> */}
                {name.subcategory}
                {/* </Link> */}
              </li>
            );
          })}
          <li>
            <Link href={featuredPath.replace(/\s/g, '')}>View All &gt;</Link>
          </li>
        </ul>
      );
    }
    if (partTypewidget && simplewidget) {
      return (
        <>
          <img src={imagesrc} alt="Image" />
          <div className={`${styles.ImageText}`}>
            <h4>July 21, 2021</h4>
            <p>
              {heading}
              <h6>
                {description}
                <span>
                  <Link href={`/${url}`}>
                    <a>
                      <ArrowNextSvg />
                    </a>
                  </Link>
                </span>
              </h6>
            </p>
            <Link href={partTypePath.replace(/\s/g, '')}>
              <a>SHOP NOW</a>
            </Link>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className={renderClasses()}>
      <div className={`${styles.cbInner} ${styles.innerBox}`}>
        {!simplewidget ? <img src={imagesrc} alt="categoryimage" /> : null}
        {renderCategoryItem()}
      </div>
    </div>
  );
};

export default CategoryWidget;
