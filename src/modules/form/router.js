import Form from /*webpackChunkName:'form'*/'./index'
import FormDate from /*webpackChunkName:'form.date'*/'./form.date'
import BraftEditor from /*webpackChunkName:'braft.editor'*/'./braft.editor'
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