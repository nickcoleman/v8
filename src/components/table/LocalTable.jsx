/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowsVertical } from '@carbon/icons-react';

import {
  ArrowWrapper,
  VerticalArrowsWrapper,
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

export const LocalTable = ({ columns: tableColumns, data: tableData, tableHeight, responsive }) => {
  const [sorting, setSorting] = React.useState([]);
  const columns = React.useMemo(() => {
    return tableColumns || STATIC_ARRAY;
  }, [tableColumns]);

  const data = React.useMemo(() => {
    return tableData || STATIC_ARRAY;
  }, [tableData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <TableWrapper tableHeight={tableHeight} responsive>
      <TableContainer tableHeight={tableHeight} responsive>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHeadRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeadCell key={header.id} style={{ width: header.getSize() }}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: (
                            <ArrowWrapper aria-label='Sort Ascending'>
                              <ArrowDown />
                            </ArrowWrapper>
                          ),
                          desc: (
                            <ArrowWrapper aria-label='Sort Descending'>
                              <ArrowUp />
                            </ArrowWrapper>
                          ),
                        }[header.column.getIsSorted()] ??
                          (header.column.getCanSort() && (
                            <VerticalArrowsWrapper aria-label='Sortable Column' className='arrowsVertical'>
                              <ArrowsVertical />
                            </VerticalArrowsWrapper>
                          ))}
                      </div>
                    )}
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

LocalTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHeight: PropTypes.number,
  responsive: PropTypes.bool,
};

LocalTable.defaultProps = {
  tableHeight: 500,
  responsive: false,
};

export default LocalTable;
