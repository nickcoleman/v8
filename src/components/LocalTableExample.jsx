import React from 'react';

import LocalTable from './table/LocalTable';
import { person as data } from './data';
import { personColumns as columns } from './columns';

const LocalTableExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h3>Local Table Example</h3>
      <LocalTable columns={columns} data={data} />
    </div>
  );
};

export default LocalTableExample;
