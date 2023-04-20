import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
