
myGraph3=document.getElementById('myGraph3');
data3 = [
    {
    type: 'scatterpolar',
    r: [1, 1, 1, 1, 1, 1, 1],
    theta: ['全榖雜糧類','豆蛋魚肉類','乳品類', '油脂類', '堅果種子類', '蔬菜類', '水果類'],
    fill: 'toself',
    name: '建議攝取標準'
    },
    {
    type: 'scatterpolar',
    r: [0.9, 1.17, 0.4, 1.01, 0.2, 0.38, 0.27],
    theta: ['全榖雜糧類','豆蛋魚肉類','乳品類', '油脂類', '堅果種子類', '蔬菜類', '水果類'],
    fill: 'toself',
    name: '平均攝取量'
    }
  ]
  
  layout3 = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 1.2]
      }
    },
    title:'16~18歲六大類食物平均攝取量',
  }
  
  Plotly.newPlot(myGraph3, data3, layout3)
  