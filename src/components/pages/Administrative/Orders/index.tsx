import { FC } from 'react';
import { Menu } from '../../../molecules';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../../../utils/routes';
import { Layout } from '../../../templates';

const Orders: FC = () => {
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
    <>
      <Layout title="Pedidos">
        <div>Lala</div>
        <div>Lala</div>
        <div>Lala</div>
      </Layout>
    </>
  );
};

export default Orders;
