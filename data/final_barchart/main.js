let myGraph = document.getElementById('myGraph');

let sleep1 = {};
sleep1.type = "bar";
sleep1.name = "男生";
sleep1.x = [];
sleep1.y = [];
sleep1.marker = { color: 'rgba(63, 127, 191, 0.8)' } // 淺藍色

for (let i = 0; i < sleeptime_age_male.length; i++) {
    sleep1.x[i] = sleeptime_age_male[i]['age'];
    sleep1.y[i] = sleeptime_age_male[i]['sleeptime'];
}

sleep1.text = sleep1.y;
sleep1.textfont = {
    color:'white',
    size: 13
};

let sleep2 = {};
sleep2.type = "bar";
sleep2.name = "女生";
sleep2.x = [];
sleep2.y = [];
sleep2.marker = { color: 'rgba(255, 99, 132, 0.8)'} // 淺粉色

for (let i = 0; i < sleeptime_age_female.length; i++) {
    sleep2.x[i] = sleeptime_age_female[i]['age'];
    sleep2.y[i] = sleeptime_age_female[i]['sleeptime'];
}

sleep2.text = sleep2.y;
sleep2.textfont = {
    color:'white',
    size: 13
};

let sleep3 = {};
sleep3.type = "bar";
sleep3.name = "整體";
sleep3.x = [];
sleep3.y = [];
sleep3.marker = { color:  'rgba(75, 192, 112, 0.9)'   } // 淺綠色

for (let i = 0; i < sleeptime_age_female.length; i++) {
    sleep3.x[i] = sleeptime_age_female[i]['age'];
    sleep3.y[i] = sleeptime_age_female[i]['sleeptime'];
}

sleep3.text = sleep3.y;
sleep3.textfont = {
    color:'white',
    size: 18
};

let data = [];
data.push(sleep1);
data.push(sleep2);
data.push(sleep3);



let layout = {
    title: {
        text: '民國106-109年各年齡層工作/上學日平均睡眠時間',
        font: { size: 20},
        family: 'Arial',
        weight: 'bold',
    },
    xaxis: {
        title: {
            text: '年齡層',
            font: { size: 18 },
        },
        tickfont: {
        size: 14 // 調整 x 軸字型大小
        },
        tickangle: -45, // 旋轉 x 軸標籤角度
    },
    yaxis: {
        title: {
            text: '睡眠時間 (小時)',
            font: { size: 18 },
        },
        tickfont: {
            size: 14 // 調整 y 軸字型大小
        },
        rangemode: 'tozero', // y 軸從 0 開始
    },
    margin: {
        t: 50, // 上邊距
    }
};
Plotly.newPlot(myGraph, data, layout);
