import { AlipayOutlined, DingdingOutlined, TaobaoOutlined } from '@ant-design/icons';
import { List } from 'antd';
function BindingView() {
  const data = [
    {
      title: '绑定淘宝',
      description: '当前未绑定淘宝账号',
      actions: [<a key="Modify">绑定</a>],
      avatar: <TaobaoOutlined className="taobao" />,
    },
    {
      title: '绑定支付宝',
      description: '当前未绑定支付宝账号',
      actions: [<a key="Modify">绑定</a>],
      avatar: <AlipayOutlined className="alipay" />,
    },
    {
      title: '绑定钉钉',
      description: '当前未绑定钉钉账号',
      actions: [<a key="Modify">绑定</a>],
      avatar: <DingdingOutlined className="dingding" />,
    }
  ]
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={item.actions}>
          <List.Item.Meta
            avatar={item.avatar}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  )
}
export default BindingView;