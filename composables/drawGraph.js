import * as echarts from 'echarts';

function optionDraw(title, val, color) {
  let option = {
  series: [{
    width: '100%',
    height: '200%',
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '50%'],
      radius: '100%',
      min: 2000,
      max: 2100,
      splitNumber: 0,
      axisLine: {
        lineStyle: {
          width: 50,
          color: [
            [0.15, color],
            [0.25, color],
            [0.5, color],
            [1, color]
          ]
        }
      },
      pointer: {
        icon: 'path://M 313.07812 494.81641 L 268.05273 788 A 48.380697 59.145653 0 0 1 312.78125 751.32617 A 48.380697 59.145653 0 0 1 357.92578 789.23047 L 313.07812 494.81641 z M 313.00781 758.67773 A 42.430617 42.430617 0 0 0 270.57812 801.10742 A 42.430617 42.430617 0 0 0 313.00781 843.53906 A 42.430617 42.430617 0 0 0 355.43945 801.10742 A 42.430617 42.430617 0 0 0 313.00781 758.67773 z ',
        length: '80%',
        width: 30,
        offsetCenter: [0, '0%'],
        itemStyle: {
          color: '#222', 
          opacity: '100%'
        }
      },
      axisTick: {
        length: 20,
        lineStyle: {
          color: '#fff',
          width: 0
        }
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: 'inherit',
          width:0
        }
      },
      axisLabel: {
        opacity:0,
        color: '#fff',
        fontSize: 20,
        distance: -60,
        rotate: 'tangential'
      },
      title: {
        position: 'outside',
        offsetCenter: [0, '-10%'],
        fontSize: 10,
        opacity:0, 
        formatter: function (value) {
          return Math.round(value) + '';
        },
      },
      detail: {
        fontSize: 30,
        opacity:0,
        offsetCenter: [0, '-130%'],
        valueAnimation: false,
        formatter: function (value) {
          return Math.round(value) + '';
        },
        color: 'inherit'
      },
      data: [
        {
          value: val,
          name: title
        }
      ]
    }
  ]};
  return option
}


export const drawGraph = (id, title, val, color) => {
  const chartDom = document.getElementById(id);
  const myChart = echarts.init(chartDom);
  myChart.setOption(optionDraw(title, val, color));
  
  return 
}
