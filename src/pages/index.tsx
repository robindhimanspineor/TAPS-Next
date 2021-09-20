// import { useRouter } from 'next/router';

// import { Meta } from '../layout/Meta';
// import { Main } from '../templates/Main';
import Header from '../components/common/header';
import Banner from '../components/home/Banner';
import ShopByTabs from '../components/home/shopByTabs';

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
        <Header />
        <section>
          <Banner />
          <ShopByTabs />
        </section>
      </main>
    </div>
  );
};

export default Index;
