let myGraph4 = document.getElementById('myGraph4');

var trace3 = {
    x: ['大一', '大二', '大三', '大四'],
    y:[40.15, 35.55, 34.39, 34.28],
    name: "不同年級大學生之平均身體活動量比較",
    error_y:{
        type: "data",
        array: [8.82, 8.35, 7.89, 7.8],
        visible: true,
        color: '#4C78A8'
    },
    type: 'scatter',
    marker: {
        color: '#85144B',
        size: 8
      }
    // text: [2203.2, 2596.02, 1454.35, 1927.28],
    // textposition: "bottom center",
    // textfont: {
    //     family:"Raleway, sans-serif",
    //     color: 'black',
    //     size:10
    // }
};



let data4 = [];
data4.push(trace3);

let layout4 = {
    margin:{
        t:50
    },
    title:'不同年級大學生之平均身體活動量比較',
    xaxis: {
        range:[-1,4],
        title: {
          text: '年級',
          font: {
            size: 15,
            color: '#7f7f7f'
          }
        },
    },
    yaxis: {
        range:[0,50],
        title: {
          text: '平均身體活動量(METs)',
          font: {
            size: 15,
            color: '#7f7f7f'
          }
        }
    }
};

Plotly.newPlot(myGraph4, data4, layout4);