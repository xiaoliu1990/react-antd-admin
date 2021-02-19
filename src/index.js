import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './style/css/index.css'
import './style/css/antd.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
// 模块热替换
if (module.hot) { module.hot.accept() }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
