import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

const statusMap = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  started: 'Started',
  assigned: 'Assigned',
};

export const personColumns = [
  columnHelper.accessor('lastName', {
    id: 'lastName',
    cell: ({ row }) => (
      <div style={{ display: 'flex', alignContent: 'start' }}>
        {row.original.firstName} {row.original.lastName}
      </div>
    ),
    header: () => 'Learner',
  }),
  columnHelper.accessor('email', {
    header: () => <span>Email</span>,
    cell: ({ row }) => <div style={{ display: 'flex', alignContent: 'start' }}>{row.original.email}</div>,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      return <div style={{ display: 'flex', alignContent: 'start' }}>{statusMap[status]}</div>;
    },
  }),
  columnHelper.accessor('progress', {
    header: 'Course Progress',
    cell: (info) => <div style={{ display: 'flex', alignContent: 'start' }}>{info.getValue()}%</div>,
  }),
];
