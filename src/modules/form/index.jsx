import React, { useState } from 'react'
import { Card, Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

const residences = [
  {
    value: 'guangdong',
    label: '广东',
    children: [
      {
        value: 'shenzhen',
        label: '深圳',
        children: [
          {
            value: 'nanshan',
            label: '南山',
          },
        ],
      },
    ],
  },
  {
    value: 'hunan',
    label: '湖南',
    children: [
      {
        value: 'yongzhou',
        label: '永州',
        children: [
          {
            value: 'lengshuitan',
            label: '冷水滩',
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 28 },
    sm: { span: 12 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 10,
      offset: 0,
    },
    sm: {
      span: 8,
      offset: 6,
    },
  },
};

function FormIndex() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('收到的值的形式：', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));

  return (
    <Card className="card-no-border">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['guangdong', 'shenzhen', 'nanshan'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: 'email',
              message: '输入的电子邮箱无效!',
            },
            {
              required: true,
              message: '请输入电子邮箱!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次输入的密码不一致!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label={
            <span>
              昵称&nbsp;
            <Tooltip title="您想让别人给您打电话吗？">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[{ required: true, message: '请输入昵称!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="residence"
          label="常用地址"
          rules={[
            { type: 'array', required: true, message: '请选择常用地址!' },
          ]}
        >
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="手机"
          rules={[{ required: true, message: '请输入手机号!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="website"
          label="网址"
          rules={[{ required: true, message: '请输入网址!' }]}
        >
          <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="请输入网址">
            <Input />
          </AutoComplete>
        </Form.Item>
        <Form.Item label="验证码" extra="我们必须确保你是有效用户.">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[{ required: true, message: '请输入验证码!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('请接收协议'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            我已阅读<a href="">协议</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
        </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default FormIndex;
