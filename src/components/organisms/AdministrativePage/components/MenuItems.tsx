import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../../../utils/routes';
import { Menu } from '../../../molecules';

const MenuItems = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menu.MenuItem label="Planos" onClick={() => navigate(routerPaths.home.default)} />
      <Menu.MenuItem label="Administrativo" onClick={() => navigate(routerPaths.administrative.default)} />
    </>
  );
};

export default MenuItems;
