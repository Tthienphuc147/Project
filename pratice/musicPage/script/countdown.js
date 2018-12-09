var countDownDate=new Date("Dec 20,2018 14:00:00").getTime();

var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countDownDate-now;
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=Math.floor((distance%(1000*60))/1000);
    document.getElementById("count").innerHTML=days+" DAYS "+hours+":"+minutes+":"+seconds;
    if(distance<0){
        clearInterval(x);
        document.getElementById("count").innerHTML="EXPIRED"
    }
},1000);