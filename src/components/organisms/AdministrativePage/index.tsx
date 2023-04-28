import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../../utils/routes';
import { Button } from '../../atoms';
import { Layout } from '../../templates';
import MenuItems from './components/MenuItems';
import * as S from './styles';

const AdministrativePage: FC = () => {
  const navigate = useNavigate();

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
