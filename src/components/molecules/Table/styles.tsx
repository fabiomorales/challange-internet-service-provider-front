import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TH = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #555;
`;

export const TD = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: #333;
`;
