import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';
function Error403() {
  let history = useHistory();
  function onRouter() {
    history.push("/");
  }
  return (
    <Result
      status="403"
      title="403"
      style={{
        background: 'none',
      }}
      subTitle="抱歉，你没有权限访问."
      extra={<Button type="primary" onClick={onRouter}>返回首页</Button>}
    />
  );
}

export default Error403;
