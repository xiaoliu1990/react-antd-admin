import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import common from '@/comm/common';
import echarts from "@/components/echarts";
let chart = {};
function SetOptions({ name, legend, indicator, seriesData } = {}) {
  chart.setOption({
    backgroundColor: "#fff",
    tooltip: {},
    legend: {
      top: 'center',
      right: 'right',
      data: legend
    },
    radar: {
        name: {
            textStyle: {
                color: '#333333',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: indicator
    },
    series: [
      {
        name: name,
        type: 'radar',
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
function ChartRadar({ domId, chartData }) {
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
export default ChartRadar;
