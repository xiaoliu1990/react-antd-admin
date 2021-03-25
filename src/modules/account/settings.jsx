import React, { useState } from 'react'
import { Menu, } from 'antd'
import BaseView from './components/base';
import BindingView from './components/binding';
import NotificationView from './components/notification';
import SecurityView from './components/security';
const { Item } = Menu;
function Setting() {
  const menuMap = { base: '基本设置', security: '安全设置', binding: '帐号绑定', notification: '新消息通知' };
  const [selectKey, setSelectKey] = useState('base');
  function getMenu() {
    return Object.keys(menuMap).map((item) => <Item key={item}>{menuMap[item]}</Item>);
  }
  function renderChildren() {
    switch (selectKey) {
      case 'base':
        return <BaseView />;
      case 'security':
        return <SecurityView />;
      case 'binding':
        return <BindingView />;
      case 'notification':
        return <NotificationView />;
      default:
        break;
    }
  }
  return (
    <div className="account-main">
      <div className="left-menu">
        <Menu mode='inline' selectedKeys={[selectKey]} onClick={({ key }) => setSelectKey(key)}>
          {getMenu()}
        </Menu>
      </div>
      <div className="right">
        <div className="title">{menuMap[selectKey]}</div>
        {renderChildren()}
      </div>
    </div>
  )
}
export default Setting;