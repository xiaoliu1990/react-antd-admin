import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';
function Error500() {
  let history = useHistory();
  function onRouter() {
    history.push("/");
  }
  return (
    <Result
      status="500"
      title="500"
      style={{
        background: 'none',
      }}
      subTitle="抱歉，服务器报错."
      extra={<Button type="primary" onClick={onRouter}>返回首页</Button>}
    />
  );
}

export default Error500;
