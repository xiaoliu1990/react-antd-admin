
import { Card, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import classNames from 'classnames';
function ChartCard(props) {
  const { loading, title, tips, total, footer, contentHeight, children } = props;
  if (loading) {
    return false;
  }
  return (
    <Card
      loading={loading}
      bodyStyle={{
        padding: '20px 24px 8px 24px',
      }}
    >
      <div className="chart-card">
        <div
          className={classNames('chart-card-top', {
            'chart-card-topMargin': !children && !footer,
          })}
        >
          <div className="chart-card-metaWrap">
            <div className="chart-card-meta">
              <span className="chart-card-title">{title}</span>
              <span className="chart-card-action">
                <Tooltip
                  title={tips}
                >
                  <InfoCircleOutlined />
                </Tooltip>
              </span>
            </div>
            <div className="chart-card-total">{total}</div>
          </div>
        </div>
        {children && (
          <div
            className="chart-card-content"
            style={{
              height: contentHeight || 'auto',
            }}
          >
            <div className={contentHeight && "chart-card-contentFixed"}>{children}</div>
          </div>
        )}
        {footer && (
          <div
            className={classNames("chart-card-footer", {
              "chart-card-footerMargin": !children,
            })}
          >
            {footer}
          </div>
        )}
      </div>
    </Card>
  )
}
export default ChartCard;