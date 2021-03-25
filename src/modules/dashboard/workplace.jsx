import { Avatar, Row, Col, Card, Statistic, List } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import EditableLink from './components/editable.link';
import { ChartRadar } from './components/charts';
dayjs.extend(relativeTime)

function WorkPlace() {
  const activities = [{ "id": "trend-1", "updatedAt": "2021-03-23T02:05:12.625Z", "user": { "name": "曲丽丽", "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" }, "group": { "name": "高逼格设计天团", "link": "http://github.com/" }, "project": { "name": "六月迭代", "link": "http://github.com/" }, "template": "在 @{group} 新建项目 @{project}" }, { "id": "trend-2", "updatedAt": "2021-03-23T02:05:12.625Z", "user": { "name": "付小小", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png" }, "group": { "name": "高逼格设计天团", "link": "http://github.com/" }, "project": { "name": "六月迭代", "link": "http://github.com/" }, "template": "在 @{group} 新建项目 @{project}" }, { "id": "trend-3", "updatedAt": "2021-03-23T02:05:12.625Z", "user": { "name": "林东东", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png" }, "group": { "name": "中二少女团", "link": "http://github.com/" }, "project": { "name": "六月迭代", "link": "http://github.com/" }, "template": "在 @{group} 新建项目 @{project}" }, { "id": "trend-4", "updatedAt": "2021-03-23T02:05:12.625Z", "user": { "name": "周星星", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png" }, "project": { "name": "5 月日常迭代", "link": "http://github.com/" }, "template": "将 @{project} 更新至已发布状态" }, { "id": "trend-5", "updatedAt": "2021-03-23T02:05:12.625Z", "user": { "name": "朱偏右", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png" }, "project": { "name": "工程效能", "link": "http://github.com/" }, "comment": { "name": "留言", "link": "http://github.com/" }, "template": "在 @{project} 发布了 @{comment}" }, { "id": "trend-6", "updatedAt": "2021-03-23T02:05:12.625Z", "user": { "name": "乐哥", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png" }, "group": { "name": "程序员日常", "link": "http://github.com/" }, "project": { "name": "品牌迭代", "link": "http://github.com/" }, "template": "在 @{group} 新建项目 @{project}" }];
  const projectNotice = [{ "id": "xxx1", "title": "Alipay", "logo": "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png", "description": "那是一种内在的东西，他们到达不了，也无法触及的", "updatedAt": "2021-03-23T02:05:12.625Z", "member": "科学搬砖组", "href": "", "memberLink": "" }, { "id": "xxx2", "title": "Angular", "logo": "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png", "description": "希望是一个好东西，也许是最好的，好东西是不会消亡的", "updatedAt": "2017-07-24T00:00:00.000Z", "member": "全组都是吴彦祖", "href": "", "memberLink": "" }, { "id": "xxx3", "title": "Ant Design", "logo": "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png", "description": "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆", "updatedAt": "2021-03-23T02:05:12.625Z", "member": "中二少女团", "href": "", "memberLink": "" }, { "id": "xxx4", "title": "Ant Design Pro", "logo": "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png", "description": "那时候我只会想自己想要什么，从不想自己拥有什么", "updatedAt": "2017-07-23T00:00:00.000Z", "member": "程序员日常", "href": "", "memberLink": "" }, { "id": "xxx5", "title": "Bootstrap", "logo": "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png", "description": "凛冬将至", "updatedAt": "2017-07-23T00:00:00.000Z", "member": "高逼格设计天团", "href": "", "memberLink": "" }, { "id": "xxx6", "title": "React", "logo": "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png", "description": "生命就像一盒巧克力，结果往往出人意料", "updatedAt": "2017-07-23T00:00:00.000Z", "member": "骗你来学计算机", "href": "", "memberLink": "" }]
  const links = [{ title: '操作一', href: '', }, { title: '操作二', href: '', }, { title: '操作三', href: '', }, { title: '操作四', href: '', }, { title: '操作五', href: '', }, { title: '操作六', href: '', },];

  function renderActivities(item) {
    const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      if (item[key]) {
        return (
          <a href={item[key].link} key={item[key].name}>
            {item[key].name}
          </a>
        );
      }
      return key;
    });
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
              <a className="username">{item.user.name}</a>
              &nbsp;
              <span className="event">{events}</span>
            </span>
          }
          description={
            <span className="datetime" title={item.updatedAt}>
              {dayjs(item.updatedAt).fromNow()}
            </span>
          }
        />
      </List.Item>
    );
  };
  return (
    <>
      <div className="pageHeader">
        <Row
          gutter={24}
        >
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <div className="pageHeader-title">工作台</div>
            <div className='pageHeader-content'>
              <div className='avatar'>
                <Avatar size="large" src='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png' />
              </div>
              <div className='content'>
                <div className='content-title'>
                  早安，
                  Serati Ma
                  ，祝你开心每一天！
            </div>
                <div>
                  交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
            </div>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <div className="extra-content">
              <div className="stat-item">
                <Statistic title="项目数" value={56} />
              </div>
              <div className="stat-item">
                <Statistic title="团队内排名" value={8} suffix="/ 24" />
              </div>
              <div className="stat-item">
                <Statistic title="项目访问" value={2223} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            className="project-list"
            style={{
              marginBottom: 24,
            }}
            title="进行中的项目"
            bordered={false}
            extra='全部项目'
          >
            <Card.Grid className="project-grid">
              <Card
                bodyStyle={{
                  padding: 0,
                }}
                bordered={false}
              >
                <Card.Meta
                  title={
                    <div className="card-title">
                      <Avatar size="small" src='https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png' />
                      <span>Alipay</span>
                    </div>
                  }
                  description='那是一种内在的东西，他们到达不了，也无法触及的'
                />
                <div className='project-item-content'>
                  <span >程序员日常</span>
                  <span className="datetime">
                    {dayjs('2021-03-23T02:05:12.625Z').fromNow()}
                  </span>
                </div>
              </Card>
            </Card.Grid>
            <Card.Grid className="project-grid">
              <Card
                bodyStyle={{
                  padding: 0,
                }}
                bordered={false}
              >
                <Card.Meta
                  title={
                    <div className="card-title">
                      <Avatar size="small" src='https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png' />
                      <span>Alipay</span>
                    </div>
                  }
                  description='那是一种内在的东西，他们到达不了，也无法触及的'
                />
                <div className='project-item-content'>
                  <span >程序员日常</span>
                  <span className="datetime">
                    {dayjs('2021-03-23T02:05:12.625Z').fromNow()}
                  </span>
                </div>
              </Card>
            </Card.Grid>
            <Card.Grid className="project-grid">
              <Card
                bodyStyle={{
                  padding: 0,
                }}
                bordered={false}
              >
                <Card.Meta
                  title={
                    <div className="card-title">
                      <Avatar size="small" src='https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png' />
                      <span>Alipay</span>
                    </div>
                  }
                  description='那是一种内在的东西，他们到达不了，也无法触及的'
                />
                <div className='project-item-content'>
                  <span >程序员日常</span>
                  <span className="datetime">
                    {dayjs('2021-03-23T02:05:12.625Z').fromNow()}
                  </span>
                </div>
              </Card>
            </Card.Grid>
          </Card>

          <Card
            bodyStyle={{
              padding: 0,
            }}
            bordered={false}
            className="active-card"
            title="动态"
          >
            <List
              renderItem={(item) => renderActivities(item)}
              dataSource={activities}
              className="activities-list"
              size="large"
            />
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{
              marginBottom: 24,
            }}
            title="快速开始 / 便捷导航"
            bordered={false}
            bodyStyle={{
              padding: 0,
            }}
          >
            <EditableLink onAdd={() => { }} links={links} />
          </Card>
          <Card
            style={{
              marginBottom: 24,
            }}
            bordered={false}
            title="XX 指数"
          >
            <div className="chart">
              <ChartRadar domId="radarIndex" chartData={{name:"指数",legend:['个人', '团队', '部门'],indicator:[{"name":"引用","max":6500},{"name":"热度","max":16000},{"name":"口碑","max":30000},{"name":"贡献","max":38000},{"name":"产量","max":52000}],seriesData:[{"value":[4300,10000,28000,35000,50000],"name":"个人"},{"value":[5000,14000,28000,31000,42000],"name":"团队"},{"value":[5000,12000,20000,30000,38000],"name":"部门"}]}} />
            </div>
          </Card>
          <Card
            bodyStyle={{
              paddingTop: 12,
              paddingBottom: 12,
            }}
            bordered={false}
            title="团队"
          >
            <div className="members">
              <Row gutter={48}>
                {projectNotice.map((item) => (
                  <Col span={12} key={`members-item-${item.id}`}>
                    <a to={item.href}>
                      <Avatar src={item.logo} size="small" />
                      <span className="member">{item.member}</span>
                    </a>
                  </Col>
                ))}
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default WorkPlace;