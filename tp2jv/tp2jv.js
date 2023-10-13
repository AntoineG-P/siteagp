document.body.style.backgroundColor = "grey";

function addition(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=Number(a)+Number(b);
    t3.value=c;}

function soustraction(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=Number(a)-Number(b);
    t3.value=c;}

function division(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=Number(a)/Number(b);
    t3.value=c;}

function multiplication(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=Number(a)*Number(b);
    t3.value=c;}

function permute(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    t1.value=b;
    t2.value=a;}

function parite(){
    if (t3.value.length == 0)
    { 
        var a=document.getElementById("t1").value;
        var b=document.getElementById("t2").value;
        var c=Number(a)+Number(b);
        if (c%2==0){t4.value=a+"+"+b+"="+c+" est pair"}
        else{t4.value=a+"+"+b+"="+c+" est impair"}
    } 
    else{
        var c=document.getElementById("t3").value;
        if (c%2==0){t4.value=c+" est pair"}
        else{t4.value=c+" est impair"}}
}