import { FC, useEffect, useState } from 'react';
import { listOrderService } from '../../../services/orders/ListOrdersService';
import { IOrder } from '../../../services/orders/ListOrdersService/interfaces/response';
import { Flex, Loading } from '../../atoms';
import { Layout } from '../../templates';
import TableOrder from './components/TableOrder';
import MenuItems from './components/MenuItems';

const AdministrativeOrderPage: FC = () => {
  const [spinnerShow, setSpinnerShow] = useState<boolean>(true);
  const [listOrders, setListOrders] = useState<Array<IOrder>>([] as Array<IOrder>);

  const getListOrders = async () => {
    const response = await listOrderService();

    if (response.data.length) {
      setListOrders(response.data);
    }

    setSpinnerShow(false);
  };

  useEffect(() => {
    getListOrders();
  }, []);

  if (spinnerShow) {
    return (
      <Flex flex={1}>
        <Loading>
          <Loading.Dot />
        </Loading>
      </Flex>
    );
  }

  return (
    <Layout title="Pedidos" menuItem={<MenuItems />}>
      <TableOrder listOrders={listOrders} />
    </Layout>
  );
};

export default AdministrativeOrderPage;
