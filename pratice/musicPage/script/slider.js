var i=0;
var images=['img/slider/img1.jpg','img/slider/img3.jpg'];
var time=4000;
function changeImg(){
    document.slide.src=images[i];
    if(i<images.length-1){
        i++;

    }
    else{
        i=0;
    }
    setTimeout('changeImg()',time);
    
}
window.onload=changeImg;