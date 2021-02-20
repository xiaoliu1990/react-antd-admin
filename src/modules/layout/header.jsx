import { useSelector, useDispatch } from 'react-redux'
import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { toggleSiderBar } from '@/store/layout/actions'
const { Header } = Layout
function LayoutHeader() {
  const { collapsed } = useSelector(state => ({
    collapsed: state.layoutReducer.collapsed,
  }))
  const dispatch = useDispatch()
  return (
    <Header className="header-fixed">
      <span className="trigger" onClick={() => dispatch(toggleSiderBar(collapsed))}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>
    </Header>
  )
}
export default LayoutHeader