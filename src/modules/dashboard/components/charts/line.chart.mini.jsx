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
      left: '-33',
      right: '0',
      top: '0',
      bottom: '-20',
      containLabel: true
    },
    yAxis: {show:false},
    xAxis: [
      {
        show:false,
        type: 'category',
        data: xAxisData,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    series: [
      {
        name: name,
        type: 'line',
        areaStyle: {},
        smooth: true,
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
function LineChartMini({domId, chartData}){
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
      className="chart-mini"
      id={domId}
    />
  )
}
export default LineChartMini;