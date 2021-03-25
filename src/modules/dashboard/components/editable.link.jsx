import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
function EditableLink({ links, onAdd }) {

  return (
    <div className="link-group">
      {links.map((link, index) =>
        <a key={index} href={link.href}>{link.title}</a>
      )}
      <Button size="small" type="primary" ghost onClick={onAdd}>
        <PlusOutlined /> 添加
      </Button>
    </div>
  )
}
export default EditableLink;