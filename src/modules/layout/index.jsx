import { Layout } from 'antd'
import Content from './content'
import Header from './header'
import Sider from './sider'
function Main () {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  )
}
export default Main