import { Button, Input, Select, Upload, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PhoneView from './phone.view';
const { Option } = Select; 

function BaseView() {
  const currentUser = { "name": "Serati Ma", "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png", "userid": "00000001", "email": "antdesign@alipay.com", "notifyCount": 12, "unreadCount": 11, "country": "China", "geographic": { "province": { "label": "浙江省", "key": "330000" }, "city": { "label": "杭州市", "key": "330100" } }, "address": "西湖区工专路 77 号", "phone": "0752-268888888" }
  const validatorPhone = (rule, value, callback) => {
    const values = value.split('-');
    if (!values[0]) {
      callback('请输入您的区号!');
    }
    if (!values[1]) {
      callback('请输入您的电话号码!');
    }
    callback();
  };
  function handleFinish() {
    message.success('更新基本信息成功');
  }
  const AvatarView = ({ avatar }) => (
    <>
      <div className='avatar-title'>头像</div>
      <div className='avatar'>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload showUploadList={false}>
        <div className='button-view'>
          <Button>
            <UploadOutlined />
            更换头像
          </Button>
        </div>
      </Upload>
    </>
  );
  return (
    <div className='base-view'>
      <div className='left'>
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={currentUser}
          hideRequiredMark
        >
          <Form.Item
            name="email"
            label='邮箱'
            rules={[
              {
                required: true,
                message: '请输入您的邮箱!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label='昵称'
            rules={[
              {
                required: true,
                message: '请输入您的昵称!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="profile"
            label='个人简介'
            rules={[
              {
                required: true,
                message: '请输入个人简介!',
              },
            ]}
          >
            <Input.TextArea
              placeholder='个人简介'
              rows={4}
            />
          </Form.Item>
          <Form.Item
            name="country"
            label='国家/地区'
            rules={[
              {
                required: true,
                message: '请选择国家',
              },
            ]}
          >
            <Select
              style={{
                maxWidth: 220,
              }}
            >
              <Option value="China">中国</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="address"
            label='地址'
            rules={[
              {
                required: true,
                message: '请输入您的地址!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label='联系电话'
            rules={[
              {
                required: true,
                message: '请输入联系电话',
              },
              {
                validator: validatorPhone,
              },
            ]}
          >
            <PhoneView />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">更新基本信息</Button>
          </Form.Item>
        </Form>
      </div>
      <div className='right'>
          <AvatarView avatar={currentUser.avatar?currentUser.avatar:'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'} />
        </div>
    </div>
  )
}
export default BaseView;