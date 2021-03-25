import { Card, Col, Row, Table } from 'antd';
import numeral from 'numeral';
import { LineChartMini } from './charts';
import NumberInfo from './number.info';
import Trend from './trend';

const columns = [
  {
    title: '排名',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '搜索关键词',
    dataIndex: 'keyword',
    key: 'keyword',
    render: (text) => <a href="/">{text}</a>,
  },
  {
    title: '用户数',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    className: 'hot-alignRight',
  },
  {
    title: '周涨幅',
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <Trend flag={record.status === 1 ? 'down' : 'up'}>
        <span
          style={{
            marginRight: 4,
          }}
        >
          {text}%
        </span>
      </Trend>
    ),
  },
];
const searchData = [{ "index": 1, "keyword": "搜索关键词-0", "count": 225, "range": 99, "status": 1 }, { "index": 2, "keyword": "搜索关键词-1", "count": 78, "range": 23, "status": 0 }, { "index": 3, "keyword": "搜索关键词-2", "count": 645, "range": 3, "status": 1 }, { "index": 4, "keyword": "搜索关键词-3", "count": 310, "range": 33, "status": 0 }, { "index": 5, "keyword": "搜索关键词-4", "count": 733, "range": 80, "status": 1 }, { "index": 6, "keyword": "搜索关键词-5", "count": 948, "range": 2, "status": 1 }, { "index": 7, "keyword": "搜索关键词-6", "count": 415, "range": 22, "status": 1 }, { "index": 8, "keyword": "搜索关键词-7", "count": 120, "range": 8, "status": 1 }, { "index": 9, "keyword": "搜索关键词-8", "count": 410, "range": 39, "status": 1 }, { "index": 10, "keyword": "搜索关键词-9", "count": 281, "range": 5, "status": 1 }, { "index": 11, "keyword": "搜索关键词-10", "count": 424, "range": 92, "status": 1 }, { "index": 12, "keyword": "搜索关键词-11", "count": 541, "range": 28, "status": 1 }, { "index": 13, "keyword": "搜索关键词-12", "count": 352, "range": 69, "status": 1 }, { "index": 14, "keyword": "搜索关键词-13", "count": 735, "range": 64, "status": 0 }, { "index": 15, "keyword": "搜索关键词-14", "count": 820, "range": 7, "status": 0 }, { "index": 16, "keyword": "搜索关键词-15", "count": 712, "range": 75, "status": 1 }, { "index": 17, "keyword": "搜索关键词-16", "count": 340, "range": 38, "status": 1 }, { "index": 18, "keyword": "搜索关键词-17", "count": 674, "range": 53, "status": 0 }, { "index": 19, "keyword": "搜索关键词-18", "count": 288, "range": 84, "status": 1 }, { "index": 20, "keyword": "搜索关键词-19", "count": 744, "range": 16, "status": 0 }, { "index": 21, "keyword": "搜索关键词-20", "count": 670, "range": 50, "status": 0 }, { "index": 22, "keyword": "搜索关键词-21", "count": 970, "range": 1, "status": 1 }, { "index": 23, "keyword": "搜索关键词-22", "count": 960, "range": 96, "status": 1 }, { "index": 24, "keyword": "搜索关键词-23", "count": 590, "range": 74, "status": 1 }, { "index": 25, "keyword": "搜索关键词-24", "count": 291, "range": 69, "status": 1 }, { "index": 26, "keyword": "搜索关键词-25", "count": 251, "range": 99, "status": 0 }, { "index": 27, "keyword": "搜索关键词-26", "count": 873, "range": 59, "status": 0 }, { "index": 28, "keyword": "搜索关键词-27", "count": 611, "range": 93, "status": 0 }, { "index": 29, "keyword": "搜索关键词-28", "count": 95, "range": 71, "status": 0 }, { "index": 30, "keyword": "搜索关键词-29", "count": 26, "range": 23, "status": 0 }, { "index": 31, "keyword": "搜索关键词-30", "count": 971, "range": 97, "status": 1 }, { "index": 32, "keyword": "搜索关键词-31", "count": 138, "range": 29, "status": 1 }, { "index": 33, "keyword": "搜索关键词-32", "count": 745, "range": 83, "status": 0 }, { "index": 34, "keyword": "搜索关键词-33", "count": 77, "range": 40, "status": 0 }, { "index": 35, "keyword": "搜索关键词-34", "count": 297, "range": 62, "status": 1 }, { "index": 36, "keyword": "搜索关键词-35", "count": 303, "range": 71, "status": 1 }, { "index": 37, "keyword": "搜索关键词-36", "count": 813, "range": 30, "status": 1 }, { "index": 38, "keyword": "搜索关键词-37", "count": 635, "range": 30, "status": 0 }, { "index": 39, "keyword": "搜索关键词-38", "count": 134, "range": 76, "status": 0 }, { "index": 40, "keyword": "搜索关键词-39", "count": 67, "range": 78, "status": 0 }, { "index": 41, "keyword": "搜索关键词-40", "count": 971, "range": 61, "status": 0 }, { "index": 42, "keyword": "搜索关键词-41", "count": 760, "range": 15, "status": 0 }, { "index": 43, "keyword": "搜索关键词-42", "count": 427, "range": 28, "status": 0 }, { "index": 44, "keyword": "搜索关键词-43", "count": 169, "range": 58, "status": 0 }, { "index": 45, "keyword": "搜索关键词-44", "count": 260, "range": 51, "status": 0 }, { "index": 46, "keyword": "搜索关键词-45", "count": 599, "range": 96, "status": 1 }, { "index": 47, "keyword": "搜索关键词-46", "count": 199, "range": 10, "status": 0 }, { "index": 48, "keyword": "搜索关键词-47", "count": 244, "range": 20, "status": 0 }, { "index": 49, "keyword": "搜索关键词-48", "count": 272, "range": 24, "status": 0 }, { "index": 50, "keyword": "搜索关键词-49", "count": 837, "range": 0, "status": 0 }]
function HotSearch({ loading }) {

  return (
    <Card
      loading={loading}
      bordered={false}
      title="线上热门搜索"
    >
      <Row gutter={68} type="flex">
        <Col
          sm={12}
          xs={24}
          style={{
            marginBottom: 24,
          }}
        >
          <NumberInfo
            title='搜索用户数'
            tips='指标说明'
            gap={8}
            total={numeral(12321).format('0,0')}
            status="up"
            subTotal={17.1}
          >
            <LineChartMini domId="lineChartUser" chartData={{ name: '用户数', xAxisData: ['2021-3-22', '2021-3-23', '2021-3-24', '2021-3-25', '2021-3-26', '2021-3-27'], seriesData: [10, 20, 30, 40, 50, 22, 33] }} />
          </NumberInfo>
        </Col>
        <Col
          sm={12}
          xs={24}
          style={{
            marginBottom: 24,
          }}
        >
          <NumberInfo
            title='人均搜索次数'
            tips='指标说明'
            gap={8}
            total={2.7}
            status="down"
            subTotal={26.2}
          >
            <LineChartMini domId="lineChartSecond" chartData={{ name: '次数', xAxisData: ['2021-3-22', '2021-3-23', '2021-3-24', '2021-3-25', '2021-3-26', '2021-3-27'], seriesData: [22, 33, 44, 55, 36, 12, 22] }} />
          </NumberInfo>
        </Col>
      </Row>
      <Table
        rowKey={(record) => record.index}
        size="small"
        columns={columns}
        dataSource={searchData}
        pagination={{
          style: {
            marginBottom: 0,
          },
          pageSize: 5,
        }}
      />
    </Card>
  )
}
export default HotSearch;