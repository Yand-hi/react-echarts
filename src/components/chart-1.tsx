import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '城关区', data: 10 },
    { name: '七里河区', data: 26 },
    { name: '西固区', data: 36 },
    { name: '安宁区', data: 41 },
    { name: '红谷区', data: 15 },
    { name: '永登区', data: 26 },
    { name: '皋兰区', data: 37 },
    { name: '榆中区', data: 18 },
    { name: '兰州新区', data: 29 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '城关区', data: Math.floor(Math.random() * 100) },
        { name: '七里河区', data: Math.floor(Math.random() * 100) },
        { name: '西固区', data: Math.floor(Math.random() * 100) },
        { name: '安宁区', data: Math.floor(Math.random() * 100) },
        { name: '红谷区', data: Math.floor(Math.random() * 100) },
        { name: '永登区', data: Math.floor(Math.random() * 100) },
        { name: '皋兰区', data: Math.floor(Math.random() * 100) },
        { name: '榆中区', data: Math.floor(Math.random() * 100) },
        { name: '兰州新区', data: Math.floor(Math.random() * 100) },
      ]
      x(newData)
    }, 1000)
  }, []);
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        data: data.map(i => i.name),
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: '#083B70' }
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: '#083B70' }
        },
      },
      tooltip: {
        show: true,
        backgroundColor: '#0c0d2d',
        borderColor: '#0764bc',
        formatter: (data) => {
          return data.name + '：' + data.value + ' 起';
        },
        textStyle: {
          color: '#fff',
          fontWeight: 'lighter'
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.data)
      }]
    }));
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};