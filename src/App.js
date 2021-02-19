import { Provider } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom'
import configureStore from './store'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Layout from '@/modules/layout'
import Login from '@/modules/login'
const store = configureStore()
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Layout />
          </Switch>
        </HashRouter>
      </Provider>
    </ConfigProvider>
  )
}
export default App
