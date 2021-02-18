import React, { useState } from 'react'
import { Card, Table, Form, Button, Input, Collapse, Select } from "antd";
const columns = [
  {
    title: '姓名',
    width: 150,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '年龄',
    width: 150,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '列 1',
    dataIndex: 'address',
    key: '1',
    width: 250,
  },
  {
    title: '列 2',
    dataIndex: 'address',
    key: '2',
    width: 250,
  },
  {
    title: '列 3',
    dataIndex: 'address',
    key: '3',
    width: 250,
  },
  {
    title: '列 4',
    dataIndex: 'address',
    key: '4',
    width: 250,
  },
  {
    title: '列 5',
    dataIndex: 'address',
    key: '5',
    width: 250,
  },
  {
    title: '列 6',
    dataIndex: 'address',
    key: '6',
    width: 250,
  },
  {
    title: '列 7',
    dataIndex: 'address',
    key: '7',
    width: 250,
  },
  { title: '列 8', dataIndex: 'address', key: '8',width: 350, },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
function TableIndex() {
  let [search, setSearch] = useState({
    title: '',
    status: '',
    star: ''
  });
  function filterTitleChange(e) {
    let value = e.target.value
    setSearch({...search, title: value })
  };
  function filterStatusChange(value) {
    setSearch({...search, status: value })
  };
  function filterStarChange(value) {
    setSearch({...search, star: value })
  };
  return (
    <>
      <Collapse className="space-bottom" defaultActiveKey={["1"]}>
        <Collapse.Panel header="筛选" key="1">
          <Form layout="inline">
            <Form.Item label="标题:">
              <Input onChange={(e) => filterTitleChange(e)} />
            </Form.Item>
            <Form.Item label="类型:">
              <Select
                style={{ width: 120 }}
                onChange={(e) => filterStatusChange(e)}>
                <Select.Option value="published">published</Select.Option>
                <Select.Option value="draft">draft</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="推荐指数:">
              <Select
                style={{ width: 120 }}
                onChange={(e) => filterStarChange(e)}>
                <Select.Option value={1}>★</Select.Option>
                <Select.Option value={2}>★★</Select.Option>
                <Select.Option value={3}>★★★</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" >
                搜索
              </Button>
            </Form.Item>
          </Form>
        </Collapse.Panel>
      </Collapse>
      <Card className="card-no-border">
        <Table columns={columns} dataSource={data} bordered  scroll={{ x: 1500, y: 500 }} />
      </Card>
    </>
  );
}

export default TableIndex;
