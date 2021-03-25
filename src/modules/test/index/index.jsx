import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Space, DatePicker, Button, message } from 'antd'
import { apiPanel } from '@/api/index.api'
import ComIndex from '@/components/test/index'
/**
 * history 定义 useHistory
 * onRouter 路由跳转方法
 */
function Index() {
  let history = useHistory()
  function onRouter(url) {
    history.push(url)
  }
  const [data, setData] = useState({})
  const [count, setCount] = useState(0)
  let { collapsed } = useSelector(state => ({
    collapsed: state.layoutReducer.collapsed
  }));
  console.log(collapsed)
  useEffect(() => {
    const fetchData = () => {
      message.loading('加载中...', 0);
      apiPanel({ 'groupId': '1', 'entId': '1807131104131000' }).then((res) => {
        if (res.code === 0) {
          setData(res.data)
        } else {
          message.warning(res.msg, 1.5)
        }
      });
    };
    fetchData()
  }, [count]);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  //console.log(data)
  return (
    <>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
      <p>
        <Button type="primary" onClick={() => onRouter('/test/home')}>home页面</Button>
      </p>
      <p>
        <Button type="primary" onClick={() => onRouter('/test/list')}>index list页面</Button>
      </p>
      <p>
        <Button type="primary" onClick={() => setCount(count + 1)}>count+1</Button>&emsp;
        <Button type="primary" onClick={() => setCount(count - 1)}>count-1</Button>
      </p>
      <p className="sz">
        index页面热更新了啊：<br />count：{count}
      </p>
      <ComIndex count={count} />
      <div style={{height:'10000px'}}></div>
    </>
  );
}

export default Index;
