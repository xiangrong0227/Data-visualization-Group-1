let myGraph=document.getElementById('myGraph');
let trace1={};
trace1.type="pie";
trace1.title="男性";
trace1.titlefont={
    size:50
};
trace1.hole=0.5;
trace1.labels=[];
trace1.values=[];
trace1.domain={
    row:0,
    column:0
};
for (let x=0;x<male.length;x++){
    trace1.labels[x]=male[x]['name'];
    trace1.values[x]=male[x]['count'];
}
let trace2={};
trace2.type="pie";
trace2.title="女性";
trace2.titlefont={
    size:50
};
trace2.hole=0.5;
trace2.labels=[];
trace2.values=[];
trace2.domain={
    row:0,
    column:1
};
for (let x=0;x<female.length;x++){
    trace2.labels[x]=female[x]['name'];
    trace2.values[x]=female[x]['count'];
}

let data=[];
data.push(trace1);
data.push(trace2);
let layout={
    margin:{
        t:30,
        l:0,
    },
    grid:{
        rows:1,
        columns:2
    },
    title:"2017-2020 年 19-30 歲男性女性各BMI區間比率分佈"
};
Plotly.newPlot(myGraph,data,layout);