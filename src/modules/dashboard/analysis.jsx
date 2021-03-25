import React, { useState, useEffect, Suspense } from 'react'
import { Row, Col } from 'antd';
import comm from '@/comm/common';

const IntroduceRow = React.lazy(() => import('./components/introduce.row'));
const SalesCard = React.lazy(() => import('./components/sales.card'));
const HotSearch = React.lazy(() => import('./components/hot.search'));
const ChannelType = React.lazy(() => import('./components/channel.type'));

function Analysis() {
  const [loading, setLoading] = useState(true);
  const [visitData, setVisitData] = useState({});
  const [rangePickerValue, setRangePickerValue] = useState(comm.getTimeDistance('year'))
  const [salesType, setSalesType] = useState('all');
  
  useEffect(() => {
    setLoading(false)
  }, []);
  function selectDate(type) {
    setRangePickerValue(comm.getTimeDistance(type))
  };
  function handleRangePickerChange(rangePickerValue) {
    setRangePickerValue(rangePickerValue)
  }
  function isActive(type) {
    if (!rangePickerValue) {
      return '';
    }
    const value = comm.getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return 'current-date';
    }
    return '';
  }
  function handleChangeSalesType (e) {
    setSalesType(e.target.value);
  };
  return (
    <>
      <div className="grid-content">
        <Suspense fallback={null}>
          <IntroduceRow
            loading={loading}
            visitData={visitData}
          />
        </Suspense>
        <Suspense fallback={null}>
          <SalesCard
            loading={loading}
            rangePickerValue={rangePickerValue}
            handleRangePickerChange={handleRangePickerChange}
            selectDate={selectDate}
            isActive={isActive}
          />
        </Suspense>
        <Row
          gutter={24}
          style={{
            marginTop: 24,
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <HotSearch
                loading={loading}
              />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <ChannelType 
                loading={loading}
                salesType={salesType}
                handleChangeSalesType={handleChangeSalesType}
              />
            </Suspense>
          </Col>
        </Row>
        <Suspense fallback={null}>

        </Suspense>
      </div>
    </>
  );
}

export default Analysis;
