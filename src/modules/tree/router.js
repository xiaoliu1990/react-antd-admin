import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const TreeIndex = Loadable({loader: () => import(/*webpackChunkName:'tree'*/'./index'),loading: Loading});

const TreeRouter = [{
  path: '/tree',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'树形控件'
  },
  component: TreeIndex
}
];

export default TreeRouter;