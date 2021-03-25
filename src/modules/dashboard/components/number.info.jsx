import { InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
function NumberInfo({ title, tips, gap, total, status, subTotal, children }) {
  return (
    <div
      className='numberInfo'
    >
      {title && (
        <div className='numberInfoTitle' title={typeof title === 'string' ? title : ''}>
          {title}
          <Tooltip
            title={tips}
          >
            <InfoCircleOutlined
              style={{
                marginLeft: 8,
              }}
            />
          </Tooltip>
        </div>
      )}
      <div className="numberInfoValue"
        style={
          gap
            ? {
              marginTop: gap,
            }
            : {}
        }
      >
        <span>
          {total}
        </span>
        {(status || subTotal) && (
          <span className='subTotal'>
            {subTotal}
            {status && status === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}
export default NumberInfo;