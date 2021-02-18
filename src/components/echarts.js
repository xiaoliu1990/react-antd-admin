//需引入 echarts
import * as echarts from 'echarts/core'
// 引入线图
import { LineChart } from 'echarts/charts'
// 引入提示框和标题组件
import { TitleComponent, TooltipComponent, GridComponent,  } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use( [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer ] );
export default echarts