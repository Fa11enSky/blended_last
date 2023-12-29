import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from '../../redux/selectors';

const Layout = () => {
  const baseCurrence = useSelector(selectBaseCurrency);
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
        {baseCurrence && <p>Your baseCurrence: {baseCurrence}</p>}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export { Layout };
