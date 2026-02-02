import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-app-dark text-white">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
