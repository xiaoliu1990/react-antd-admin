import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const Form = Loadable({loader: () => import(/*webpackChunkName:'form'*/'./index'),loading: Loading});
const FormDate = Loadable({loader: () => import(/*webpackChunkName:'form.date'*/'./form.date'),loading: Loading});
const BraftEditor = Loadable({loader: () => import(/*webpackChunkName:'braft.editor'*/'./braft.editor'),loading: Loading});
const FormRouter = [{
  path: '/form',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'表单'
  },
  component: Form
},{
  path: '/form/date',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'日期表单'
  },
  component: FormDate
},{
  path: '/braft/editor',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'Braft Editor富文本'
  },
  component: BraftEditor
}
];

export default FormRouter;