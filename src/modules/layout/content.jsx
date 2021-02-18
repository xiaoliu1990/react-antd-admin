import { Redirect, withRouter, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
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
    title = `${item[0].meta.title} - Ant Design Pro`
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
    <DocumentTitle title={getPageTitle(routes, pathname)}>
      <Content>
        <div className="container">
          <Switch>
            {renderRoutes(routes)}
            <Redirect to="/error/404" />
          </Switch>
        </div>
      </Content>
    </DocumentTitle>
  )
}
export default withRouter(LayoutContent)