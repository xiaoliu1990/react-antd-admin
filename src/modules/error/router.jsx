import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const NOTFOUND = Loadable({loader: () => import(/*webpackChunkName:'404'*/'./404'),loading: Loading});
const ErrorRouter = [{
  path: '/*',
  authority: ['admin','user'],
  meta:{
    title:'404'
  },
  component: NOTFOUND
}
];

export default ErrorRouter;