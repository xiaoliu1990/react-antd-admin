import './account.css'
import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const SETTINGS = Loadable({loader: () => import(/*webpackChunkName:'settings'*/'./settings'),loading: Loading});
const AccountRouter = [{
  path: '/account/settings',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'个人设置'
  },
  component: SETTINGS
}
];
export default AccountRouter;