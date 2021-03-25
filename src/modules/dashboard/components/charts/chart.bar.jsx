import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import common from '@/comm/common';
import echarts from "@/components/echarts";
let chart = {};
function SetOptions({ name, xAxisData, seriesData } = {}) {
  chart.setOption({
    backgroundColor: "#fff",
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xAxisData,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: name,
        type: 'bar',
        barWidth: '60%',
        data: seriesData
      }
    ]
  });
}
function Resize() {
  if (chart) {
    common.debounce(chart.resize(), 300);
  }
}
function ChartBar({ domId, chartData }) {
  let { collapsed } = useSelector(state => ({
    collapsed: state.layoutReducer.collapsed
  }));
  useEffect(() => {
    chart = echarts.init(document.getElementById(domId));
    SetOptions(chartData);
    setTimeout(() => Resize(), 210);
    window.addEventListener("resize", () => Resize());
  }, [chartData, collapsed]);
  return (
    <div
      id={domId}
      className="chart-box"
    />
  )
}
export default ChartBar;