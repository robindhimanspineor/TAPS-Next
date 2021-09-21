// import { useRouter } from 'next/router';

// import { Meta } from '../layout/Meta';
// import { Main } from '../templates/Main';

import Banner from 'Components/Home/Banner';
import ShopByTabs from 'Components/Home/ShopByTabs';
import BlogsWidget from 'Components/Widgets/Blogs/BlogsWidget';
import BrandsWidget from 'Components/Widgets/Brands/brandsWidget';
import CategoriesWidget from 'Components/Widgets/Categories/categoriesWidget';
import ContentWidget from 'Components/Widgets/Content/contentWidget';
import MakesWidget from 'Components/Widgets/Makes/makesWidget';
import PartTypesWidget from 'Components/Widgets/PartsType/partTypeWidget';
import WhyChooseWidget from 'Components/Widgets/WhyChoose/whyChooseWidget';
import styles from 'Styles/home.module.scss';

const Index = () => {
  // const router = useRouter();

  return (
    // <Main
    //   meta={
    //     <Meta
    //       title="Next.js Boilerplate Presentation"
    //       description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
    //     />
    //   }
    // >
    // </Main>
    <div>
      <main className="main-container block">
        <section>
          <Banner />
          <ShopByTabs />
          <div className={styles.bodyContainer}>
            <div className={`${styles.container} ${styles.home}`}>
              <CategoriesWidget />
              <PartTypesWidget />
              <MakesWidget />
              <BlogsWidget />
              <BrandsWidget />
              <ContentWidget />
              <WhyChooseWidget />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
