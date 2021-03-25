import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { Card, Form, Button, Upload, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/es/modal/style';
import 'antd/es/slider/style';
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
function FormCrop() {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  function onFinish(values) {
    console.log('收到的值的形式：', values);
  };
  function onChange({ fileList: newFileList }) {
    form.setFieldsValue({ fileList: newFileList })

    newFileList.length === 0 && form.validateFields()
    setFileList(newFileList);
  };
  function onPreview(file) {
    let src = file.url;
    if (!src) {
      src = file.response.url;
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
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
        >
          <ImgCrop grid modalTitle="裁剪图片" modalOk="确定" modalCancel="取消">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 3 && <div><PlusOutlined /><div style={{ marginTop: 8 }}>上传图片</div></div>}
            </Upload>
          </ImgCrop>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default FormCrop;
