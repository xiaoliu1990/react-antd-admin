import React, { useReducer } from 'react'
import { Button } from 'antd';
import { initialState, reducer } from '@/components/test/use.reducer'
function ComIndexList(){
  const [state, dispatch] = useReducer(reducer, initialState);
  return(
    <div>
      {state.count}
      <p>
        <Button type="primary" onClick={() => { dispatch({ type: 'decrement' }) }}>改变count--</Button>&emsp;
        <Button type="primary" onClick={() => { dispatch({ type: 'increment' }) }}>改变count++</Button>
      </p>
    </div>
  )
}
export default ComIndexList;