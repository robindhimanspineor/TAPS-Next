// import { useRouter } from 'next/router';

// import { Meta } from '../layout/Meta';
// import { Main } from '../templates/Main';
import Header from '../components/common/header';

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
      </main>
    </div>
  );
};

export default Index;
