let myGraph4 = document.getElementById('myGraph4');

var trace3 = {
    x: ['18y', '19y', '20y', '21y'],
    y:[2203.2, 2596.02, 1454.35, 1927.28],
    name: "大學生身體活動量",
    error_y:{
        type: "data",
        array: [3133.28, 6034.21, 2488.06, 3181.2],
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
    barmode:'group',
    title:'身體活動量',

};

Plotly.newPlot(myGraph4, data4, layout4);