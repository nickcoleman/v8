import React from 'react';

import LocalTable from './table/LocalTable';
import { makePersonData } from './data';
import { personColumns as columns } from './columns';

const LocalTableExample = () => {
  const data = React.useMemo(() => makePersonData(100), []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h3>Local Table Example</h3>
      <LocalTable columns={columns} data={data} tableHeight={500} responsive />
    </div>
  );
};

export default LocalTableExample;
