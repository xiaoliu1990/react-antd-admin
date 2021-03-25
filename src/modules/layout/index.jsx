import { Layout } from 'antd'
import Sider from './sider'
import Header from './header'
import Content from './content'
import Footer from './footer'
function Main() {
  return (
    <Layout className="ant-pro-basicLayout">
      <Sider />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  )
}
export default Main