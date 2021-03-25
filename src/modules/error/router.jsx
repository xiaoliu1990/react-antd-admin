import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const NOTFOUND = Loadable({loader: () => import(/*webpackChunkName:'404'*/'./404'),loading: Loading});
const NORIGHT= Loadable({loader: () => import(/*webpackChunkName:'403'*/'./403'),loading: Loading});
const SERVERERROR= Loadable({loader: () => import(/*webpackChunkName:'500'*/'./500'),loading: Loading});
const ErrorRouter = [{
  path: '/exception/403',
  authority: ['admin','user'],
  meta:{
    title:'403'
  },
  component: NORIGHT
},{
  path: '/exception/500',
  authority: ['admin','user'],
  meta:{
    title:'500'
  },
  component: SERVERERROR
},{
  path: '/*',
  authority: ['admin','user'],
  meta:{
    title:'404'
  },
  component: NOTFOUND
}
];

export default ErrorRouter;