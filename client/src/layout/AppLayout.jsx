import { Outlet } from 'react-router-dom';
import React from 'react';
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-app-dark text-white">
      {/* Internal app pages — no Navbar/Footer */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
