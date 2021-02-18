import { useHistory } from 'react-router-dom';
import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { add, reduce, httpAsk } from '@/store/test/home/actions'
import { Button } from 'antd';
import { apiPanel } from '@/api/index.api'
import ComHome from '@/components/test/home'
function Home() {
  let history = useHistory();
  function onRouter(url) {
    history.push(url);
  }
  const { count, res } = useSelector(state => ({
    count: state.homeReducer.numberHome,
    res: state.homeReducer.res
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      apiPanel({ 'groupId': '1', 'entId': '1807131104131000' }).then((res) => {
        dispatch(httpAsk(res.data))
      });
    };
    fetchData()
  }, []);
  return (
    <>
      <p>
        <Button type="primary" onClick={() => onRouter("/test")}>index 页面</Button>
      </p>
      <p>
        <Button type="primary" onClick={() => onRouter("/test/home/list")}>Home list页面</Button>
      </p>
      <p>
        <Button type="primary" onClick={() => dispatch(reduce(count))}>redux -</Button>&emsp;
        <Button type="primary" onClick={() => dispatch(add(count))}>redux +</Button>
      </p>
      Home页面定义的一个redux值：{count}&emsp;{res.consult && res.consult.panelTitle}
      <div>
        <ComHome />
      </div>
    </>
  );
}

export default Home;
