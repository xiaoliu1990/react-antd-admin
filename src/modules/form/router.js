import Loadable from 'react-loadable';
import Loading from '@/components/loading';
const Form = Loadable({loader: () => import(/*webpackChunkName:'form'*/'./index'),loading: Loading});
const FormDate = Loadable({loader: () => import(/*webpackChunkName:'form.date'*/'./form.date'),loading: Loading});
const BraftEditor = Loadable({loader: () => import(/*webpackChunkName:'braft.editor'*/'./braft.editor'),loading: Loading});
const FormUpload = Loadable({loader: () => import(/*webpackChunkName:'form.upload'*/'./form.upload'),loading: Loading});
const FormCrop = Loadable({loader: () => import(/*webpackChunkName:'form.crop'*/'./form.crop'),loading: Loading});

const FormRouter = [{
  path: '/form/basic',
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
},{
  path: '/form/upload',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'上传图片'
  },
  component: FormUpload
},{
  path: '/form/crop',
  exact: true,
  authority: ['admin','user'],
  meta:{
    title:'裁剪上传图片'
  },
  component: FormCrop
}
];

export default FormRouter;