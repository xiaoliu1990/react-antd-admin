import React, { useState } from 'react';
import { Card, Form, Button, Upload, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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
function FormUpload() {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  function onFinish(values) {
    values = { ...values, fileList }
    console.log('收到的值的形式：', values);
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    setFileList(e.fileList);
    return e && e.fileList;
  };
  return (
    <Card className="card-no-border">
      <Form
        {...formItemLayout}
        form={form}
        name="upload"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[{ required: true, message: '请输入标题!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="fileList"
          label="上传图片"
          rules={[{ required: true, message: '请上传图片!' }]}
          initialValue={fileList}
          getValueFromEvent={normFile}
          valuePropName={fileList}
        >
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
          >
            {fileList.length < 3 && <div><PlusOutlined /><div style={{ marginTop: 8 }}>上传图片</div></div>}
          </Upload>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default FormUpload;
