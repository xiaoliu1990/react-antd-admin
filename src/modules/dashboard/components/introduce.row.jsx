import React from 'react';
import numeral from 'numeral';
import { Row, Col } from 'antd'
import { ChartCard, Field } from './charts';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};
function IntroduceRow({ loading, visitData }) {

  return (
    <Row gutter={24} type="flex">
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          title="总销售额"
          tips="指标说明"
          total={`￥${numeral(126560).format('0,0')}`}
          contentHeight={46}
          footer={
            <Field
              label='日销售额'
              value={`￥${numeral(12423).format('0,0')}`}
            />
          }
        >
          111
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          title="访问量"
          tips="访问量说明"
          total={numeral(8846).format('0,0')}
          contentHeight={46}
          loading={loading}
          footer={
            <Field
              label='日访问量'
              value={numeral(1234).format('0,0')}
            />
          }
        >
          222
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          title="支付笔数"
          tips="支付笔数说明"
          loading={loading}
          total={numeral(6560).format('0,0')}
          contentHeight={46}
          footer={
            <Field
              label='转化率'
              value="60%"
            />
          }
        >
          333
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          title="运营活动效果"
          tips="运营活动效果说明"
          loading={loading}
          total='78%'
          contentHeight={46}
          footer={
            <Field
              label='周同比'
              value="12%"
            />
          }
        >
          444
        </ChartCard>
      </Col>

    </Row>
  )
}

export default IntroduceRow;