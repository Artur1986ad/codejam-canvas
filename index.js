

let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

let data4x4;

fetch("https://raw.githubusercontent.com/Dziazhurny/codejam-canvas/master/assets/data/4x4.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        data4x4=data;
    });

let data32x32;

fetch("https://raw.githubusercontent.com/Dziazhurny/codejam-canvas/master/assets/data/32x32.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        data32x32=data;
    });


function firstCanvas() {
    for (let i=0; i<data4x4.length; i++){
        for (let j=0; j<data4x4[0].length; j++){
            ctx.fillStyle = "#"+data4x4[i][j];
            ctx.fillRect (i*128, j*128, 128, 128);
        }
    }
}

function secondCanvas() {
    for (let i=0; i<data32x32.length; i++){
        for (let j=0; j<data32x32[0].length; j++){
            ctx.fillStyle = `rgba(${data32x32[i][j][0]}, ${data32x32[i][j][1]}, ${data32x32[i][j][2]}, ${data32x32[i][j][3]})`;
            ctx.fillRect (i*16, j*16, 16, 16);
        }
    }
}


function thirdCanvas() {
    pic = new Image();
    pic.src = 'assets/image.png'; 
    pic.onload = function() {
        ctx.drawImage(pic, 0, 0, 512, 512);  
    }
}

window.onload = function() {
    firstCanvas();
 };
