import { Badge, Card, Descriptions, Divider, Table } from 'antd';
function Basic() {
  const profileAndbasic = { "basicGoods": [{ "id": "1234561", "name": "矿泉水 550ml", "barcode": "12421432143214321", "price": "2.00", "num": "1", "amount": "2.00" }, { "id": "1234562", "name": "凉茶 300ml", "barcode": "12421432143214322", "price": "3.00", "num": "2", "amount": "6.00" }, { "id": "1234563", "name": "好吃的薯片", "barcode": "12421432143214323", "price": "7.00", "num": "4", "amount": "28.00" }, { "id": "1234564", "name": "特别好吃的蛋卷", "barcode": "12421432143214324", "price": "8.50", "num": "3", "amount": "25.50" }], "basicProgress": [{ "key": "1", "time": "2017-10-01 14:10", "rate": "联系客户", "status": "processing", "operator": "取货员 ID1234", "cost": "5mins" }, { "key": "2", "time": "2017-10-01 14:05", "rate": "取货员出发", "status": "success", "operator": "取货员 ID1234", "cost": "1h" }, { "key": "3", "time": "2017-10-01 13:05", "rate": "取货员接单", "status": "success", "operator": "取货员 ID1234", "cost": "5mins" }, { "key": "4", "time": "2017-10-01 13:00", "rate": "申请审批通过", "status": "success", "operator": "系统", "cost": "1h" }, { "key": "5", "time": "2017-10-01 12:00", "rate": "发起退货申请", "status": "success", "operator": "用户", "cost": "5mins" }] };
  let goodsData = [];
  if (profileAndbasic.basicGoods.length) {
    let num = 0, amount = 0;
    profileAndbasic.basicGoods.forEach((item) => {
      num += Number(item.num);
      amount += Number(item.amount);
    });
    goodsData = profileAndbasic.basicGoods.concat({
      id: '总计',
      num,
      amount,
    });
  }
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === profileAndbasic.basicGoods.length) {
      obj.props.colSpan = 0;
    }
    return obj;
  };
  const progressColumns = [
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '当前进度',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        if (text === 'success') {
          return <Badge status="success" text="成功" />;
        }
        return <Badge status="processing" text="进行中" />;
      },
    },
    {
      title: '操作员ID',
      dataIndex: 'operator',
      key: 'operator',
    },
    {
      title: '耗时',
      dataIndex: 'cost',
      key: 'cost',
    },
  ];
  const goodsColumns = [
    {
      title: '商品编号',
      dataIndex: 'id',
      key: 'id',
      render: (text, row, index) => {
        if (index < profileAndbasic.basicGoods.length) {
          return <a href="javascrpt:;">{text}</a>;
        }
        return {
          children: (
            <span
              style={{
                fontWeight: 600,
              }}
            >
              总计
            </span>
          ),
          props: {
            colSpan: 4,
          },
        };
      },
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      render: renderContent,
    },
    {
      title: '商品条码',
      dataIndex: 'barcode',
      key: 'barcode',
      render: renderContent,
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      render: renderContent,
    },
    {
      title: '数量（件）',
      dataIndex: 'num',
      key: 'num',
      align: 'right',
      render: (text, row, index) => {
        if (index < profileAndbasic.basicGoods.length) {
          return text;
        }
        return (
          <span
            style={{
              fontWeight: 600,
            }}
          >
            {text}
          </span>
        );
      },
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (text, row, index) => {
        if (index < profileAndbasic.basicGoods.length) {
          return text;
        }
        return (
          <span
            style={{
              fontWeight: 600,
            }}
          >
            {text}
          </span>
        );
      },
    },
  ];
  return (
    <>
      <div className="pageHeader">
      <div className="pageHeader-title">基础详情页</div>
      </div>
      <Card bordered={false}>
        <Descriptions
          title="退款申请"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="取货单号">1000000000</Descriptions.Item>
          <Descriptions.Item label="状态">已取货</Descriptions.Item>
          <Descriptions.Item label="销售单号">1234123421</Descriptions.Item>
          <Descriptions.Item label="子订单">3214321432</Descriptions.Item>
        </Descriptions>
        <Divider
          style={{
            marginBottom: 32,
          }}
        />
        <Descriptions
          title="用户信息"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
          <Descriptions.Item label="联系电话">18100000000</Descriptions.Item>
          <Descriptions.Item label="常用快递">菜鸟仓储</Descriptions.Item>
          <Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
          <Descriptions.Item label="备注">无</Descriptions.Item>
        </Descriptions>
        <Divider
          style={{
            marginBottom: 32,
          }}
        />
        <div className='title'>退货商品</div>
        <Table
          style={{
            marginBottom: 24,
          }}
          pagination={false}
          dataSource={goodsData}
          columns={goodsColumns}
          rowKey="id"
        />
        <div className='title'>退货进度</div>
        <Table
          style={{
            marginBottom: 16,
          }}
          pagination={false}
          dataSource={profileAndbasic.basicProgress}
          columns={progressColumns}
        />
      </Card>
    </>
  )
}
export default Basic;