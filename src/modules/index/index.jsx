import React, { useState } from 'react'
import { Row, Col } from 'antd'
import ComLineChart from '@/components/line.chart'

const lineChartDefaultData = {
  News: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  Messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  Purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  Shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

function Index() {
  const [lineChartData, setLineChartData] = useState(lineChartDefaultData['News'])
  const onLineChart = (type) => setLineChartData(lineChartDefaultData[type])
  return (
    <>
      <div className="space-bottom">
        <Row gutter={10}>
          <Col lg={6} sm={12} xs={12} onClick={() => onLineChart('News')} className="card-panel-col">
            <div className="card-panel">News</div>
          </Col>
          <Col lg={6} sm={12} xs={12} onClick={() => onLineChart('Messages')} className="card-panel-col">
            <div className="card-panel">Messages</div>
          </Col>
          <Col lg={6} sm={12} xs={12} onClick={() => onLineChart('Purchases')} className="card-panel-col">
            <div className="card-panel">Purchases</div>
          </Col>
          <Col lg={6} sm={12} xs={12} onClick={() => onLineChart('Shoppings')} className="card-panel-col">
            <div className="card-panel">Shoppings</div>
          </Col>
        </Row>
      </div>
      <ComLineChart lineChart={lineChartData} />
    </>
  );
}

export default Index;
