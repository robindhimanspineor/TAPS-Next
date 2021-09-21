import PartTypesList from 'Components/Common/Constants/partTypeList';
import Heading from 'Components/Common/headings';
import styles from 'Styles/widget.module.scss';

import CategoryWidget from '../Categories/categoryWidget';

const PartType = () => {
  return (
    <div className={`${styles.widget} ${styles.autoHeight}`}>
      <div className={styles.WidgetHeader}>
        <Heading
          classname={styles.heading}
          label="Reliable automotive industry"
        />
        <span>
          You can purchase auto parts of your vehicle with full dependability
        </span>
        <div className={styles.widgetBody}>
          <div>
            <div
              className={`${styles.featuredCategoryContainer} ${styles.bottom} ${styles.PartTypesWrapper}`}
            >
              <div className={styles.row1Wrapper}>
                {PartTypesList.slice(0, 2).map((value: any, index: number) => (
                  <CategoryWidget
                    key={index}
                    heading={value.name}
                    simplewidget
                    partTypewidget
                    showImage
                    // vehicle={props.vehicle}
                    viaHome
                    imagesrc={value.imgsrc}
                  />
                ))}
              </div>
              <div className={styles.row2Wrapper}>
                {PartTypesList.slice(2, 5).map((value, index) => (
                  <CategoryWidget
                    key={index}
                    heading={value.name}
                    simplewidget
                    partTypewidget
                    showImage
                    // vehicle={props.vehicle}
                    viaHome
                    imagesrc={value.imgsrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartType;
