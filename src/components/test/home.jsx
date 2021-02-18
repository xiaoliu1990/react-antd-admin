import { useSelector } from 'react-redux'
function ComHome(){
  const count = useSelector(state => state.homeReducer.numberHome);
  return (
    <p>
      我是一个组件，获取了一个redux 的值：{count}
    </p>
  )
}
export default ComHome;