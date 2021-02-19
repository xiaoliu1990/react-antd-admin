import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const TableIndex = Loadable({loader: () => import(/*webpackChunkName:'table'*/'./index'),loading: Loading});
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