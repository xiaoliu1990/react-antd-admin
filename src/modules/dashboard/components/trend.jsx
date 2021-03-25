import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
function Trend({ colorful = true, reverseColor = false, flag, children, className }) {
  const classString = classNames(
    'trendItem',
    {
      "trendItemGrey": !colorful,
      "reverseColor": reverseColor && colorful,
    },
    className,
  );
  return (
    <div className={classString} title={typeof children === 'string' ? children : ''}>
      <span>{children}</span>
      {flag && (
        <span className={flag}>
          {flag === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </span>
      )}
    </div>
  )
};

export default Trend;