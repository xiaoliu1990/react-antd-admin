import { Provider } from 'react-redux'
import { HashRouter as Router, Switch } from 'react-router-dom'
import configureStore from './store'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Layout from '@/modules/layout'
import './style/css/index.css'
import './style/css/antd.css'
dayjs.locale('zh-cn')
const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router>
          <Switch>
            <Layout />
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  )
}
export default App
