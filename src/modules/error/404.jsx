import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';
function Error404() {
  let history = useHistory();
  function onRouter() {
    history.push("/");
  }
  return (
    <Result
      status="404"
      title="404"
      style={{
        background: 'none',
      }}
      subTitle="抱歉，您访问的页面不存在."
      extra={<Button type="primary" onClick={onRouter}>返回首页</Button>}
    />
  );
}

export default Error404;
