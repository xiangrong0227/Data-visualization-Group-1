let myGraph = document.getElementById('myGraph');

function unpack(rows, key){
    return rows.map(function(row){
        return row[key];
    });
}

let tracemap ={};
tracemap.type ="scattermapbox";
tracemap.text =[];
tracemap.lat =unpack(city_location, "lat");
tracemap.lon =unpack(city_location, "lon");
tracemap.fatrate =unpack(city_location, "fatrate");
tracemap.marker ={
    color:[],
    colorscale: 'Reds',
    size:[],
    colorbar: {
        title: {
            text: '過重/肥胖(%)',
            font: { size: 15 },
            
        },
        tickvals: [35, 37.5, 40, 42.5, 45, 47.5, 50], // 調整刻度值
        ticktext: ['35','37.5', '40', '42.5','45','47.5', '50'], // 調整刻度文字
        thickness: 15,
    }
};
    
for(let i=0; i<city_location.length; i++) {
    tracemap.text[i] =city_location[i]["fatrate"];
    }


for(let i=0; i<city_location.length; i++) {
    tracemap.marker.size[i] =tracemap.text[i];
    tracemap.marker.color[i] = tracemap.text[i];
    }


tracemap.text = tracemap.fatrate;
tracemap.textfont = {
color:'white',
size: 15
};

let data = [tracemap];
    

let layout ={
    title: {
        text: '111年台灣各縣市民眾BMI分類屬於過重或肥胖的比例',
        font: { size: 20},
        family: 'Arial',
        weight: 'bold',
    },
    margin: {
        t: 50,
        l: 10,
        r:125,
        b:10
    },
    dragmode:"zoom",
    mapbox: {
        style:"open-street-map",
        center:{
            lat: 23.708167, 
            lon: 120.929999
        },
        zoom:5.5
    },
    
};Plotly.newPlot(myGraph, data, layout)


