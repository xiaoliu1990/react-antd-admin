
import { List } from 'antd';
function SecurityView(){
  const data=[
    {
      title: '账户密码',
      description: '当前密码强度：强',
      actions: [<a key="Modify">修改</a>],
    },
    {
      title: '密保手机',
      description: '已绑定手机：138****8293',
      actions: [<a key="Modify">修改</a>],
    },
    {
      title: '密保问题',
      description: '未设置密保问题，密保问题可有效保护账户安全',
      actions: [<a key="Modify">修改</a>],
    },
    {
      title: '备用邮箱',
      description: '已绑定邮箱：5434****0@qq.com',
      actions: [<a key="Modify">修改</a>],
    },
    {
      title: 'MFA 设备',
      description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
      actions: [<a key="Modify">修改</a>],
    },
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
export default SecurityView;