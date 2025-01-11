import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => (
  <div className="mainContentContainer">
    <Header />
    <main id="content">
      <ScrollToTop />
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
