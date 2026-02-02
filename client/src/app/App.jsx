import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import PublicLayout from './../layout/PublicLayout';
import AppLayout from './../layout/AppLayout';
import { CanvasProvider } from '../canvas/CanvasProvider';
import React from 'react';
function App() {
  return (
    <Routes>
      {/* Public pages */}
      <Route element={<PublicLayout />}>
        {routes.public.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Route>

      {/* App/Internal pages */}
      <Route element={
        <CanvasProvider>
          <AppLayout />
        </CanvasProvider>}>
        {routes.app.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
