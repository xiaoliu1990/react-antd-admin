import Index from /*webpackChunkName:'index'*/'./index'
import IndexList from /*webpackChunkName:'index.lit'*/'./index/index.list'
import IndexDetail from /*webpackChunkName:'index.lit'*/'./index/index.detail'
import Home from /*webpackChunkName:'home'*/'./home/home'
import HomeList from /*webpackChunkName:'home.list'*/'./home/home.list'
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