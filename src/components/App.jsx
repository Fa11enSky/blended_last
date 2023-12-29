import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Rates from 'pages/Rates';
import Home from 'pages/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from '../redux/operations';
import { setBaseCurrency } from '../redux/slice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error() {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
    </Routes>
  );
};
