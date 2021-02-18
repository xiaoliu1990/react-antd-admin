import NOTFOUND from /*webpackChunkName:'404'*/'./404'
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