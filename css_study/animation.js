var header = document.getElementById('header');
var degree = 0;
function rotate(){
    degree += 6;
    degree %= 360;
    if((degree >= 0 && degree < 90) || (degree >= 270 && degree <360)){
        header.className = 'face';
    }else{
        header.className = 'back';
    }
    header.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotate, 20)