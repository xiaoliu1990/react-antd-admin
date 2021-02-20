import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import common from '@/comm/common';
import echarts from "./echarts";
let chart = {};
function SetOptions({ expectedData, actualData } = {}) {
  chart.setOption({
    backgroundColor: "#fff",
    xAxis: {
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      boundaryGap: false,
      axisTick: {
        show: false,
      },
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 10,
      top: 30,
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      padding: [5, 10],
    },
    yAxis: {
      axisTick: {
        show: false,
      },
    },
    legend: {
      data: ["expected", "actual"],
    },
    series: [
      {
        name: "预期",
        itemStyle: {
          normal: {
            color: "#FF005A",
            lineStyle: {
              color: "#FF005A",
              width: 2,
            },
          },
        },
        smooth: true,
        type: "line",
        data: expectedData,
        animationDuration: 2800,
        animationEasing: "cubicInOut",
      },
      {
        name: "实际",
        smooth: true,
        type: "line",
        itemStyle: {
          normal: {
            color: "#3888fa",
            lineStyle: {
              color: "#3888fa",
              width: 2,
            },
            areaStyle: {
              color: "#f3f8ff",
            },
          },
        },
        data: actualData,
        animationDuration: 2800,
        animationEasing: "quadraticOut",
      },
    ],
  });
}
function Resize() {
  if (chart) {
    common.debounce(chart.resize(), 300);
  }
}
function ComLineChart(props) {
  let { collapsed } = useSelector(state => ({
    collapsed: state.layoutReducer.collapsed
  }));
  useEffect(() => {
    chart = echarts.init(document.getElementById('lineChart'));
    SetOptions(props.lineChart);
    setTimeout(() => Resize(), 210);
    window.addEventListener("resize", () => Resize());
  }, [props.lineChart, collapsed]);
  return (
    <div
      id="lineChart"
      className="chart-box"
    />
  )
}
export default ComLineChart;