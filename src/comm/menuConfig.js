
/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/index",
  },
  {
    title: "表格",
    path: "/table",
  },
  {
    title: "表单",
    path: "/form",
    children: [
      {
        title: "基本表单",
        path: "/form/basic",
      },
      {
        title: "日期表单",
        path: "/form/date",
      },
      {
        title: "Braft Editor富文本",
        path: "/braft/editor",
      },
      {
        title: "上传图片",
        path: "/form/upload",
      },
      {
        title: "裁剪上传图片",
        path: "/form/crop",
      },
    ],
  },
  {
    title: "测试",
    path: "/test",
  }
];
export default menuList;
