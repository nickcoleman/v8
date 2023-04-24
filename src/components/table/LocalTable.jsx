/* eslint-disable react/prop-types */
import * as React from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import {
  Table,
  TableContainer,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableBody,
  TableRow,
  TableCell,
  TableWrapper,
} from './table.styles';

const STATIC_ARRAY = [];

export const LocalTable = ({ columns: tableColumns, data: tableData }) => {
  const columns = React.useMemo(() => {
    return tableColumns || STATIC_ARRAY;
  }, [tableColumns]);
  const data = React.useMemo(() => {
    return tableData || STATIC_ARRAY;
  }, [tableData]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHeadRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeadCell key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHeadCell>
                ))}
              </TableHeadRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default LocalTable;
