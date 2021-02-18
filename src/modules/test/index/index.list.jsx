
import React, { useState, useReducer } from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import ComIndexList from '@/components/test/index.list'
import { initialState, reducer } from '@/components/test/use.reducer'

function IndexList() {
  let history = useHistory();
  function onRouter(url) {
    history.push(url);
  }
  const [value, setValue] = useState('init');
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{value}</div>
      <div>count：{state.count}</div>
      index list页面
      <p>
        <Button type="primary" onClick={() => onRouter("/test")}>index页面</Button>
      </p>
      <p>
        <Button type="primary" onClick={() => onRouter("/test/detail")}>index.detail页面</Button>
      </p>
      <p>
        <Button type="primary" onClick={() => { setValue(`${Date.now()}_newValue`) }}>改变value</Button>
      </p>
      <p>
        <Button type="primary" onClick={() => { dispatch({ type: 'decrement' }) }}>改变count--</Button>&emsp;
        <Button type="primary" onClick={() => { dispatch({ type: 'increment' }) }}>改变count++</Button>
      </p>
        子组件：
      <ComIndexList count={state.count} value={value}/>
    </>
  );
}

export default IndexList;
