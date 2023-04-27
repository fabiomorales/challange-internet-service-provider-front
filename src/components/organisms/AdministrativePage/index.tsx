import { FC } from 'react';
import { Menu } from '../../molecules';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../../utils/routes';
import { Layout } from '../../templates';
import * as S from './styles';
import { Button } from '../../atoms';

const AdministrativePage: FC = () => {
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
    <Layout title="Administrativo" menuItem={<MenuItems />}>
      <S.ButtonWrapper>
        <Button text="Gerenciar Planos" onClick={() => navigate(routerPaths.administrative.plans)} />
        <Button text="Gerenciar Pedidos" onClick={() => navigate(routerPaths.administrative.orders)} />
      </S.ButtonWrapper>
    </Layout>
  );
};

export default AdministrativePage;
