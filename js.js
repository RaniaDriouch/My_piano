var prevs;
var cat;
function myfunc(ref,tf,tt)
{
    if (cat=='a') {document.getElementById(prevs).style.backgroundColor="white";}
else if(cat=='b'){
    document.getElementById(prevs).style.backgroundColor="black";
}
if (tt=='a') {document.getElementById(tf).style.backgroundColor="#726d6d";}
else {
    document.getElementById(tf).style.backgroundColor="#403e3e";
}
cat=tt;
prevs=tf;
ref.currentTime=0;
ref.play();
ref.addEventListener("ended",ef=>{
    if (tt=='a') {document.getElementById(tf).style.backgroundColor="white";}
else {
    document.getElementById(tf).style.backgroundColor="black";
}
})
}
document.addEventListener("keypress", e=>{
    var key=e.key;
    if(key=='') $("#w1").click();
    else if(key=='') $("#w2").click();
    else if(key=='') $("#w3").click();
    else if(key=='') $("#w4").click();
    else if(key=='') $("#w5").click();
    else if(key=='') $("#w6").click();
    else if(key=='') $("#w7").click();
    else if(key=='') $("#w8").click();
    else if(key=='') $("#w9").click();
    else if(key=='') $("#w0").click();
    else if(key=='') $("#w10").click();
    else if(key=='') $("#w11").click();
    else if(key=='') $("#w12").click();
    else if(key=='') $("#w13").click();
    else if(key=='') $("#b1").click();
    else if(key=='') $("#b2").click();
    else if(key=='') $("#b3").click();
    else if(key=='') $("#b4").click();
    else if(key=='') $("#b5").click();
    else if(key=='') $("#b6").click();
    else if(key=='') $("#b7").click();
    else if(key=='') $("#b8").click();
    else if(key=='') $("#b9").click();
    else if(key=='') $("#b0").click();
});