document.body.style.backgroundColor = "grey";

function calcul(){
    var p1=Number(document.getElementById("p1").value);
    var p2=Number(document.getElementById("p2").value);
    var p3=Number(document.getElementById("p3").value);
    var q1=Number(document.getElementById("q1").value);
    var q2=Number(document.getElementById("q2").value);
    var q3=Number(document.getElementById("q3").value);
    var e1=p1*q1
    r1.value=e1;
    var e2=p2*q2
    r2.value=e2;
    var e3=p3*q3
    r3.value=e3;
    var e4=e1+e2+e3;
    r4.value=e4;}

function reset(){
    a1.value="";
    a2.value="";
    a3.value=""; 
    p1.value="";
    p2.value="";
    p3.value="";
    q1.value="";
    q2.value="";
    q3.value="";    
    r1.value="";
    r2.value="";
    r3.value="";
    r4.value="";}