import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rates">Rates</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export { Layout };
