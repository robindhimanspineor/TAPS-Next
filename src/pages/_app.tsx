import { AppProps } from 'next/app';

import Footer from 'Components/Common/Footer';
import Header from 'Components/Common/Header';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="wrapper_main">
    <Header />
    <Component {...pageProps} />
    <div className="spacer" />
    <Footer />
  </div>
);

export default MyApp;
