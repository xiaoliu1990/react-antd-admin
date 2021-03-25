
import { Card, Radio } from 'antd';
import React from 'react';
import { PieChart } from './charts';
function ChannelType({ loading, salesType, handleChangeSalesType }) {

  return (
    <Card
      loading={loading}
      className='channel-salesCard'
      bordered={false}
      title="销售额类别占比"
      style={{
        height: '100%',
      }}
      extra={
        <div className="salesCardExtra">
          <div className="salesTypeRadio">
            <Radio.Group value={salesType} onChange={handleChangeSalesType}>
              <Radio.Button value="all">全部渠道</Radio.Button>
              <Radio.Button value="online">线上</Radio.Button>
              <Radio.Button value="stores">门店</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      }
    >
      <div>
        <h4
          style={{
            marginTop: 8,
            marginBottom: 32,
          }}
        >销售额</h4>
        <PieChart domId="pieChart" chartData={{ name: '销售额', seriesData: [{ value: 1048, name: '家用电器' }, { value: 735, name: '食用酒水' }, { value: 580, name: '个护健康' }, { value: 484, name: '服饰箱包' }, { value: 300, name: '母婴产品' }, { value: 300, name: '其他' }] }} />
      </div>
    </Card>
  )
}
export default ChannelType;