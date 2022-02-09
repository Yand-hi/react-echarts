import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      tooltip: {
        show: true,
        backgroundColor: '#0c0d2d',
        borderColor: '#0764bc',
        textStyle: {
          color: '#fff',
          fontWeight: 'lighter'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val + '%';
          }
        }
      },
      series: [
        {
          name: '抢劫',
          type: 'line',
          data: [50, 40, 60, 30, 50, 40, 70, 90, 60].reverse()
        },
        {
          name: '醉驾',
          type: 'line',
          data: [20, 40, 40, 60, 30, 40, 50, 60, 50].reverse()
        },
        {
          name: '盗窃',
          type: 'line',
          data: [30, 40, 40, 30, 50, 60, 50, 80, 70].reverse()
        },
        {
          name: '诈骗',
          type: 'line',
          data: [20, 10, 40, 30, 50, 40, 30, 50, 60].reverse()
        },
        {
          name: '故意伤人',
          type: 'line',
          data: [50, 50, 40, 60, 50, 30, 40, 70, 60].reverse()
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }));
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>案发趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};