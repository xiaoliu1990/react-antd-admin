import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const Index = Loadable({loader: () => import(/*webpackChunkName:'test.index'*/'./index'),loading: Loading});
const IndexList = Loadable({loader: () => import(/*webpackChunkName:'test.index.list'*/'./index/index.list'),loading: Loading});
const IndexDetail = Loadable({loader: () => import(/*webpackChunkName:'test.index.detail'*/'./index/index.detail'),loading: Loading});
const Home = Loadable({loader: () => import(/*webpackChunkName:'test.home'*/'./home/home'),loading: Loading});
const HomeList = Loadable({loader: () => import(/*webpackChunkName:'test.home.list'*/'./home/home.list'),loading: Loading});
const TestRouter = [{
  path: '/test',
  exact: true,
  authority: ['admin', 'user'],
  meta: {
    title: '测试首页'
  },
  component: Index
},
{
  path: '/test/list',
  authority: ['admin', 'user'],
  meta: {
    title: '测试列表页'
  },
  component: IndexList
},
{
  path: '/test/detail',
  authority: ['admin', 'user'],
  meta: {
    title: '测试详情'
  },
  component: IndexDetail
}, {
  path: '/test/home',
  exact: true,
  authority: ['admin', 'user'],
  meta: {
    title: '测试主页'
  },
  component: Home
},
{
  path: '/test/home/list',
  authority: ['admin'],
  meta: {
    title: '测试主页列表页'
  },
  component: HomeList
}
];

export default TestRouter;