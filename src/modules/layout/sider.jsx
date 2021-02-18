import { useSelector } from 'react-redux'
import { Link, withRouter } from "react-router-dom"
import { Layout, Menu } from 'antd'
import { HomeOutlined, TableOutlined, FormOutlined, CrownOutlined, } from '@ant-design/icons'
const { Sider } = Layout
const { SubMenu } = Menu
function LayoutSider() {
  const { collapsed } = useSelector(state => ({
    collapsed: state.layoutReducer.collapsed,
  }))
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to='/'>首页</Link>
        </Menu.Item>
        <Menu.Item icon={<TableOutlined />}>
          <Link to='/table'>表格</Link>
        </Menu.Item>
        <SubMenu icon={<FormOutlined />} title="表单">
          <Menu.Item ><Link to='/form'>基础表单</Link></Menu.Item>
          <Menu.Item ><Link to='/form/date'>日期表单</Link></Menu.Item>
          <Menu.Item ><Link to='/braft/editor'>Braft Editor富文本</Link></Menu.Item>
        </SubMenu>
        <Menu.Item icon={<CrownOutlined />}>
          <Link to='/test'>测试</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
export default withRouter(LayoutSider)