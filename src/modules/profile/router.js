import './profile.css'
import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const BASIC = Loadable({loader: () => import(/*webpackChunkName:'basic'*/'./basic'),loading: Loading});
const ProfileRouter = [{
  path: '/profile/basic',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'详情页'
  },
  component: BASIC
}
];
export default ProfileRouter;