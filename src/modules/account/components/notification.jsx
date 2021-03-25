import { List, Switch } from 'antd';
function NotificationView(){
  const Action = ( <Switch checkedChildren='开' unCheckedChildren='关' defaultChecked /> );
  const data = [
    {
      title: '绑定淘宝',
      description: '当前未绑定淘宝账号',
      actions: [Action],
    },
    {
      title: '绑定支付宝',
      description: '当前未绑定支付宝账号',
      actions: [Action],
    },
    {
      title: '绑定钉钉',
      description: '当前未绑定钉钉账号',
      actions: [Action],
    }
  ]
  return(
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={item.actions}>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  )
}
export default NotificationView;