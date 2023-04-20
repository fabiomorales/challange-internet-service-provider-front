import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, NoMatch } from './components/pages';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
