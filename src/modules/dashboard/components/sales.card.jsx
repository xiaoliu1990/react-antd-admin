
import { Card, Col, DatePicker, Row, Tabs } from 'antd';
import numeral from 'numeral';
import { ChartBar } from './charts';
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: '工专路 ' + i + ' 号店',
    total: 323234,
  });
}
function SalesCard({ loading, rangePickerValue, handleRangePickerChange, selectDate, isActive }) {
  return (
    <Card
      loading={loading}
      bordered={false}
      bodyStyle={{
        padding: 0,
      }}
    >
      <Tabs
        tabBarExtraContent={
          <div className="sales-extraWrap">
            <div className="sales-extra">
              <a className={isActive('today')} onClick={() => selectDate('today')}>
                今日
              </a>
              <a className={isActive('week')} onClick={() => selectDate('week')}>
                本周
              </a>
              <a className={isActive('month')} onClick={() => selectDate('month')}>
                本月
              </a>
              <a className={isActive('year')} onClick={() => selectDate('year')}>
                全年
              </a>
            </div>
            <RangePicker
              value={rangePickerValue}
              onChange={handleRangePickerChange}
              style={{
                width: 256,
              }}
            />
          </div>
        }
        size="large"
        tabBarStyle={{
          marginBottom: 24,
          paddingLeft: 24,
        }}
      >
        <TabPane
          tab="销售额"
          key="sales1"
        >
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className="sales-bar">
                <h4>销售趋势</h4>
                <ChartBar domId="barChartSale" chartData={{ name: '销售额', xAxisData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], seriesData: [10, 52, 200, 334, 390, 330, 220, 228, 365, 180, 280, 330] }} />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className="sales-rank">
                <h4>门店销售额排名</h4>
                <ul className="sales-rankingList">
                  {rankingListData.map((item, i) => (
                    <li key={item.title}>
                      <span className={`sales-rankingItemNumber ${i < 3 ? 'active' : ''}`}>
                        {i + 1}
                      </span>
                      <span className='sales-rankingItemTitle' title={item.title}>
                        {item.title}
                      </span>
                      <span>{numeral(item.total).format('0,0')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane
          tab="访问量"
          key="sales2"
        >
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className="sales-bar">
                <h4>访问量趋势</h4>
                <ChartBar domId="barChartVisit" chartData={{ name: '访问量', xAxisData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], seriesData: [1111, 2222, 3333, 4444, 5555, 666, 777, 888, 550, 333, 999, 288] }} />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className="sales-rank">
                <h4>门店访问量排名</h4>
                <ul className="sales-rankingList">
                  {rankingListData.map((item, i) => (
                    <li key={item.title}>
                      <span className={`sales-rankingItemNumber ${i < 3 ? 'active' : ''}`}>
                        {i + 1}
                      </span>
                      <span className='sales-rankingItemTitle' title={item.title}>
                        {item.title}
                      </span>
                      <span>{numeral(item.total).format('0,0')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Card>
  )
}
export default SalesCard;