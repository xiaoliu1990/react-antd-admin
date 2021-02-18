import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd';
import { add, reduce } from '@/store/test/home/actions'
function Homelist() {
  let history = useHistory();
  function onRouter() {
    history.push('/test/home');
  }
  const count = useSelector(state => state.homeReducer.numberHome);
  const dispatch = useDispatch();
  return (
    <>
      <p>
        <Button type="primary" onClick={() => onRouter()}>Home页面</Button>
      </p>
        <Button type="primary" onClick={() => dispatch(reduce(count))}>redux -</Button>&emsp;
        <Button type="primary" onClick={() => dispatch(add(count))}>redux +</Button>
        Home list页面sdasdadsa<br/>
      {count}
    </>
  );
}

export default Homelist;
