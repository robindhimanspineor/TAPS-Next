import { useState } from 'react';

import SearchByPart from 'Components/Common/searchByPart';
import ShopByVehicle from 'Components/Common/searchByVehicle';
import SearchByVin from 'Components/Common/searchByVin';
import styles from 'Styles/tabs.module.scss';

const shopBy = [
  {
    id: 'Shop_0',
    val: 'Shop By Vehicle',
  },
  {
    id: 'Shop_1',
    val: 'Shop By VIN',
  },
  {
    id: 'Shop_2',
    val: 'Shop By Part',
  },
];
const ShopByTabs = () => {
  const [activeIndex, setActiveIndex] = useState('Shop_0');

  const renderForms = () => {
    switch (activeIndex) {
      case 'Shop_1':
        return <SearchByVin />;
      case 'Shop_2':
        return <SearchByPart />;
      default:
        return <ShopByVehicle />;
    }
  };
  return (
    <section className={`${styles.tabs}`}>
      <div className={styles.container}>
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsMain}>
            <ol className={styles.tabList}>
              {shopBy.map((item) => (
                <li
                  key={item.id}
                  className={`${styles.tabListItem} ${styles.tabsButton} ${
                    activeIndex === item.id ? styles.tabListActive : ''
                  }`}
                  id={item.id}
                  onClick={() => setActiveIndex(item.id)}
                >
                  {item.val}
                </li>
              ))}
            </ol>
            <div className={styles.tabContent}>{renderForms()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByTabs;
