import * as echarts from 'echarts';

function optionDraw(title, val) {
  let option = {
  series: [{
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '75%'],
      radius: '90%',
      min: 2000,
      max: 2200,
      splitNumber: 0,
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.15, '#92D1A4'],
            [0.25, '#F5C745'],
            [0.5, '#E86D84'],
            [1, '#a30023']
          ]
        }
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 20,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'inherit'
        }
      },
      axisTick: {
        length: 0,
        lineStyle: {
          color: 'inherit',
          width: 2
        }
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: 'inherit',
          width: 0
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 20,
        distance: -60,
        rotate: 'tangential'
      },
      title: {
        offsetCenter: [0, '-10%'],
        fontSize: 20
      },
      detail: {
        fontSize: 30,
        offsetCenter: [0, '-35%'],
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


export const drawGraph = (id, title, val) => {
  const chartDom = document.getElementById(id);
  const myChart = echarts.init(chartDom);

  
  myChart.setOption(optionDraw(title, val));
  
  return 
}
