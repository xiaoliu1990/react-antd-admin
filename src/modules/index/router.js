import Index from /*webpackChunkName:'index'*/'./index'
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