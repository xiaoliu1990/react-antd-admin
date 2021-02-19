import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const Index = Loadable({loader: () => import(/*webpackChunkName:'index'*/'./index'),loading: Loading});
const IndexRouter = [{
  path: '/',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'首页'
  },
  component: Index
}
];
export default IndexRouter;