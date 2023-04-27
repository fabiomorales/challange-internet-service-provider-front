import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../../utils/routes';
import { Menu, OfferCards } from '../../molecules';
import { Layout } from '../../templates';

const HomePage: FC = () => {
  const navigate = useNavigate();

  const MenuItems = () => {
    return (
      <>
        <Menu.MenuItem label="Planos" onClick={() => navigate(routerPaths.home.default)} />
        <Menu.MenuItem label="Administrativo" onClick={() => navigate(routerPaths.administrative.default)} />
      </>
    );
  };

  return (
    <Layout title="Planos" menuItem={<MenuItems />}>
      <OfferCards />
    </Layout>
  );
};

export default HomePage;
