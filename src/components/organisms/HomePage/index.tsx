import { FC } from 'react';
import { Layout } from '../../templates';
import MenuItems from './components/MenuItems';
import OfferCards from './components/OfferCards';

const HomePage: FC = () => {
  return (
    <Layout title="Planos" menuItem={<MenuItems />}>
      <OfferCards />
    </Layout>
  );
};

export default HomePage;
