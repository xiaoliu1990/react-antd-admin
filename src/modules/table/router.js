import TableIndex from /*webpackChunkName:'table'*/'./index'
const TableRouter = [{
  path: '/table',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'表格'
  },
  component: TableIndex
}
];

export default TableRouter;