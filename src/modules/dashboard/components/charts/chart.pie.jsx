import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import common from '@/comm/common';
import echarts from "@/components/echarts";
let chart = {};
function SetOptions({ name, seriesData } = {}) {
  chart.setOption({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 'center',
      right: 'right'
    },
    series: [
      {
        name: name,
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
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
function PieChart({ domId, chartData }) {
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
      className="chart-box"
      id={domId}
    />
  )
}
export default PieChart;