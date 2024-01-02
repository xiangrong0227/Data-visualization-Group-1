
myGraph3=document.getElementById('myGraph3');
data3 = [
    {
    type: 'scatterpolar',
    r: [15, 7, 1.5, 5.5, 1, 4.5, 3],
    theta: ['全榖雜糧類','豆蛋魚肉類','乳品類', '油脂類', '堅果種子類', '蔬菜類', '水果類'],
    fill: 'toself',
    name: '建議攝取標準'
    },
    {
    type: 'scatterpolar',
    r: [13.5, 8.2, 0.6, 5.6, 0.2, 1.7, 0.8],
    theta: ['全榖雜糧類','豆蛋魚肉類','乳品類', '油脂類', '堅果種子類', '蔬菜類', '水果類'],
    fill: 'toself',
    name: '平均攝取量'
    }
  ]
  
  layout3 = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 15]
      }
    }
  }
  
  Plotly.newPlot(myGraph3, data3, layout3)
  