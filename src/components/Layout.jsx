import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <div className="mainContentContainer">
    <Header />
    <main id="content">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
