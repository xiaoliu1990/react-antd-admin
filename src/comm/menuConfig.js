
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
    title: "统计系统",
    path: "/dashboard",
    children: [
      {
        title: "分析页",
        path: "/dashboard/analysis",
      },
      {
        title: "工作台",
        path: "/dashboard/workplace",
      },
    ]
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
    title: "异常页",
    path: "/exception",
    children: [
      {
        title: "403",
        path: "/exception/403",
      },
      {
        title: "404",
        path: "/exception/404",
      },
      {
        title: "500",
        path: "/exception/500",
      },
    ],
  },
  {
    title: "详情页",
    path: "/profile/basic",
  },
  {
    title: "个人设置",
    path: "/account/settings",
  },
  {
    title: "表格",
    path: "/table",
  },
  {
    title: "树形控件",
    path: "/tree",
  },
  {
    title: "测试",
    path: "/test",
  }
];
export default menuList;
