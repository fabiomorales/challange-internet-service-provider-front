import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home, NoMatch } from './components/pages';
import { routerPaths } from './utils/routes';

const App: FC = () => {
  return (
    <Routes>
      <Route path={routerPaths.home.default} element={<Home />} />
      <Route path={routerPaths.noMatch} element={<NoMatch />} />
      <Route path={routerPaths.dashboard.default} element={<Dashboard />} />
    </Routes>
  );
};

export default App;
