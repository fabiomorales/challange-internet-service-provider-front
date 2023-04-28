import { FC } from 'react';
import { ITableProps, Subcomponents } from './interfaces';
import * as S from './styles';

const Table: FC<ITableProps> & Subcomponents = ({ children, thList }) => {
  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            {thList.map((th, key) => (
              <S.TH key={`th-${key}`}>{th.name}</S.TH>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </S.Table>
    </S.TableContainer>
  );
};

Table.TD = S.TD;

export default Table;
