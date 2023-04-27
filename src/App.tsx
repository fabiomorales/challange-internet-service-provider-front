import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Administrative, Home, NoMatch, Orders, Plans } from './components/pages';
import { routerPaths } from './utils/routes';

const App: FC = () => {
  return (
    <Routes>
      <Route path={routerPaths.home.default} element={<Home />} />
      <Route path={routerPaths.noMatch} element={<NoMatch />} />
      <Route path={routerPaths.administrative.default} element={<Administrative />} />
      <Route path={routerPaths.administrative.orders} element={<Orders />} />
      <Route path={routerPaths.administrative.plans} element={<Plans />} />
    </Routes>
  );
};

export default App;
