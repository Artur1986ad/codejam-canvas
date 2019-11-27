

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let data4x4;
let data32x32 =[];
let url4 = "https://raw.githubusercontent.com/Dziazhurny/codejam-canvas/master/assets/data/4x4.json";
let url32 = "https://raw.githubusercontent.com/Dziazhurny/codejam-canvas/master/assets/data/32x32.json";
function fetchData(linkUrl, dataArray)
    {
            fetch(linkUrl).then(function(resp){
        return resp.json();
    }).then(function(data){
        if(data.length === 4)
        {
            data4x4 =data;
        }else{
            data32x32 = data;
        }
    });      
}
(function(){
 var rad = document.formCheck.visible;
    var prev = null;
    for(var i = 0; i < rad.length; i++) {
        rad[i].addEventListener('change', function() {
            this.value
            if(this.value === "1"){
                fetchData(url4,data4x4);
                setTimeout(firstCanvas, 100);
            } else if(this.value === "2")
            {   fetchData(url32,data32x32);
                setTimeout(secondCanvas, 100);}
            else if(this.value === "3")
            {
                thirdCanvas();
            }
        });
    }
})();
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

