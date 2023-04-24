import styled from '@emotion/styled';

import { colors } from '../theme';

export const TableWrapper = styled.div`
  ${({ tableHeight }) => {
    return tableHeight ? `max-height: ${tableHeight + 75}px;` : `max-height: 600px;`;
  }}
  @media (min-height: 1444px) {
    ${({ responsive }) => (responsive ? `max-height: ${1024}px;` : '')}
  }

  @media (min-height: 2048px) {
    ${({ responsive }) => (responsive ? `max-height: ${1444}px;` : '')}
  }
`;

export const TableContainer = styled.div`
  ${({ tableHeight }) => `max-height: ${tableHeight}px;`}

  @media (min-height: 1444px) {
    ${({ responsive }) => (responsive ? `max-height: ${975}px;` : '')}
  }

  @media (min-height: 2048px) {
    ${({ responsive }) => (responsive ? `max-height: ${1369}px;` : '')}
  }

  overflow-y: auto;
  ::-webkit-scrollbar {
    webkit-appearance: none;
    width: 6px;
    height: 6px;
    bacrground-color: red;
  }
  ::-webkit-scrollbar-track {
    background-color: ${colors.gray[200]};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 24px;
    background-color: ${colors.galaxy[200]};
    box-shadow: 0 0 1px ${colors.galaxy[100]};
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0px;
  margin: 0 0 0 0;
`;

export const TableHeadRow = styled.tr`
  height: 48px;
`;

export const TableHeadCell = styled.th`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : '')}
  padding: 8px 16px;
  vertical-align: middle;
  background: ${colors.galaxy[100]};
  border-left: 1px solid 'black';
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  &:hover {
    background: ${colors.galaxy[200]};
    .arrowsVertical {
      visibility: visible;
    }
  }
`;

export const TableBody = styled.tbody`
  background-color: ${colors.gray[0]};
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${colors.galaxy[100]};
`;

export const TableCell = styled.td`
  padding: 15px 16px;
  background-color: ${colors.white};
`;
