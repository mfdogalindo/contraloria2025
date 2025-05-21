import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation(); // To scroll to top on navigation

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Nav />
      <main className="container mx-auto px-4 py-8 flex-grow min-h-[calc(100vh-197px)]">
        <Outlet /> {/* Nested routes will render here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;