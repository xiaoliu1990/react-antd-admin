import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, withRouter } from "react-router-dom"
import { Layout, Menu } from 'antd'
import menuList from "@/comm/menuConfig";
import { HomeOutlined } from '@ant-design/icons'
import logo from '@/style/img/logo.svg'
const { Sider } = Layout
const { SubMenu } = Menu
function LayoutSider(props) {
  let { collapsed } = useSelector(state => ({
    collapsed: state.layoutReducer.collapsed
  })),
    [openKey, setOpenKey] = useState([]),
    [lightKey, setLightKey] = useState(''),
    [menuTreeNode, setMenuTreeNode] = useState([]),
    path = props.location.pathname;
  // 菜单渲染
  function getMenuNodes(menuList) {
    // 得到当前请求的路由路径
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        if (path.indexOf(item.path) === 0) {
          setLightKey(item.path)
        }
        pre.push(
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <HomeOutlined />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        // 查找一个与当前请求路径匹配的子Item
        let cItem = item.children.find(
          (cItem) => path.indexOf(cItem.path) === 0
        );
        // 如果存在, 说明当前item的子列表需要打开
        if (cItem) { setOpenKey([...openKey, item.path]) }
        pre.push(
          <SubMenu
            key={item.path}
            title={
              <>
                <HomeOutlined />
                <span>{item.title}</span>
              </>
            }
          >
            {getMenuNodes(item.children)}
          </SubMenu>
        );
      }
      return pre;
    }, []);
  };
  useEffect(() => {
    setMenuTreeNode(getMenuNodes(menuList))
  }, []);
  return (
    <>
      <div className={collapsed ? "sider-size-collapsed" : "sider-size"}></div>
      <Sider
        className="sider-fixed"
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
      >
        <div className="logo" >
          <img src={logo} className="logo-img" />
          {!collapsed && <h1>Ant Design</h1>}
        </div>
        {menuTreeNode.map((item, index) => (
          <Menu
            key={index}
            onClick={(e) => setLightKey(e.key)}
            selectedKeys={[lightKey]}
            defaultOpenKeys={openKey}
            theme="light"
            mode="inline"
          >
            {item}
          </Menu>
        ))}
      </Sider>
    </>
  )
}
export default withRouter(LayoutSider)