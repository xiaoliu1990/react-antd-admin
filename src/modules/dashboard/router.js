import './dashboard.css'
import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const Analysis = Loadable({ loader: () => import(/*webpackChunkName:'analysis'*/'./analysis'), loading: Loading });
const Workplace = Loadable({ loader: () => import(/*webpackChunkName:'workplace'*/'./workplace'), loading: Loading });

const DashboardRouter = [{
  path: '/dashboard/analysis',
  exact: true,
  authority: ['admin', 'user'],
  meta: {
    title: '分析页'
  },
  component: Analysis
},{
  path: '/dashboard/workplace',
  exact: true,
  authority: ['admin', 'user'],
  meta: {
    title: '工作台'
  },
  component: Workplace
}
];

export default DashboardRouter;