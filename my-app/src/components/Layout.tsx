import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';



const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      const layout = document.getElementById('layout-container');
      layout?.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};



const Layout = () => {
  return (
    <div
      id="layout-container" // <- Add this ID
      className="flex flex-col bg-[#e2dbcc] pt-4 pb-4 min-h-screen overflow-y-auto w-full"
    >
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};


export default Layout;