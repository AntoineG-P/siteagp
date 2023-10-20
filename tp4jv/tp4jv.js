document.body.style.backgroundColor = "grey";

function mention(x) {
    if (x>=10 && x<14) {res.value="Admis Passable";}
    else if (x>=14 && x<16) {res.value="Admis Bien";} 
    else if (x>=16) {res.value="Admis Très Bien";} 
    else {res.value="Rattrapages";}}

function calcul(){
    var n1=Number(document.getElementById("n1").value);
    var n2=Number(document.getElementById("n2").value);
    var n3=Number(document.getElementById("n3").value);
    var c1=Number(document.getElementById("c1").value);
    var c2=Number(document.getElementById("c2").value);
    var c3=Number(document.getElementById("c3").value);
    var r=((n1*c1)+(n2*c2)+(n3*c3))/(c1+c2+c3)
    moy.value=r;
    mention(Number(r))}


