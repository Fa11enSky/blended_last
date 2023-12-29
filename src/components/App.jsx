import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Rates from 'pages/Rates';
import Home from 'pages/Home';
import { useEffect } from 'react';
import { getUserInfo } from 'service/getUserInfo';

export const App = () => {
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;
      console.log(pos.console)
      getUserInfo(pos.coords)
      console.log('Ваше текущее местоположение:');
      console.log(`Широта: ${crd.latitude}`);
      console.log(`Долгота: ${crd.longitude}`);
      console.log(`Плюс-минус ${crd.accuracy} метров.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  },[])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
    </Routes>
  );
};
