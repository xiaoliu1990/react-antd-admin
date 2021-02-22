import { Redirect, withRouter, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Layout } from 'antd'
import common from '@/comm/common'
import { renderRoutes } from 'react-router-config'
import IndexRouter from '@/modules/index/router'
import TableRouter from '@/modules/table/router'
import FormRouter from '@/modules/form/router'
import ErrorRouter from '@/modules/error/router'
import TestRouter from '@/modules/test/router'
const { Content } = Layout
const routes = [
  ...IndexRouter,
  ...TableRouter,
  ...FormRouter,
  ...TestRouter,
  ...ErrorRouter
]
function getPageTitle(menuList, pathname) {
  let title = 'Ant Design Pro'
  let item = common.getTitle(menuList, 'path', pathname)
  if (item.length > 0) {
    title = `${item[0].meta.title} - Ant Design`
  }
  return title
}
function LayoutContent(props) {
  const { pathname } = props.location
  const routerFilter = (routes) => {
    return routes.filter((item) => {
      return item.authority && item.authority.some((auth) => { return auth === sessionStorage.getItem('token') });
    })
  }
  //routerFilter(routes)
  return (
    <Content className="content-fixed">
      <Helmet>
        <title>{getPageTitle(routes, pathname)}</title>
      </Helmet>
      <div className="container">
        <Switch>
          <Redirect exact from="/" to="/index" />
          {renderRoutes(routes)}
          <Redirect to="/error/404" />
        </Switch>
      </div>
    </Content>
  )
}
export default withRouter(LayoutContent)