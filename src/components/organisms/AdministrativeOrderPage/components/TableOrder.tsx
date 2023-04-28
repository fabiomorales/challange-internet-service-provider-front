import { FC, memo } from 'react';
import { ITableOrderProps } from '../interfaces';
import { Table } from '../../../molecules';
import StatusOrder from './StatusOrder';
import { Button } from '../../../atoms';
import { useModalProvider } from '../../../../context/modal/ModalProvider';
import ModalConfirmation from './ModalConfirmation';

const TableOrder: FC<ITableOrderProps> = ({ listOrders }) => {
  const { setModal } = useModalProvider();

  const thList = [
    { name: 'Nome' },
    { name: 'Email' },
    { name: 'Telefone' },
    { name: 'ID do Plano' },
    { name: 'Status' },
    { name: 'Ação' },
  ];

  const handleClick = async (id: string, variant: 'finalize' | 'exclude') => {
    setModal({
      show: true,
      children: <ModalConfirmation id={id} variant={variant} />,
    });
  };

  return (
    <Table thList={thList}>
      {listOrders.map((order, key) => (
        <tr key={`tr-${key}`}>
          <Table.TD>{order.customerName}</Table.TD>
          <Table.TD>{order.customerEmail}</Table.TD>
          <Table.TD>{order.customerPhone}</Table.TD>
          <Table.TD>{order.planId}</Table.TD>
          <StatusOrder status={order.status} />
          <Table.TD>
            <Button.ActionButton
              id={`finalize-${order.id}`}
              mr={12}
              text="Finalizar"
              disabled={order.status === 'DONE'}
              onClick={() => handleClick(order.id, 'finalize')}
            />
            <Button.ActionButton
              id={`exclude-${order.id}`}
              text="Excluir"
              onClick={() => handleClick(order.id, 'exclude')}
            />
          </Table.TD>
        </tr>
      ))}
    </Table>
  );
};

export default memo(TableOrder);
