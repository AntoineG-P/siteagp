function seconnecter(){    
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin") 
    {document.write("Bienvenue : "+login);}
    else {alert("Acces refuse")}}

function seconnecter2(){window.location.href="identification.html"}

function seconnecter3(){
    i=0;
    do{
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin") 
        {document.write("Bienvenue : "+login);
        break;}
    else {alert("Acces refuse");
    i+=1;}
    }
    while(i<3)
    if (i==3){alert("Delai depasse")}}

function seconnecter3recur(x){ //Version de seconnecter3 qui utilise la récursivité
    if (x==3){alert("Delai depasse")}
    else{
        var login=prompt("Donnez votre nom d'utilisateur");
        var password=prompt("Entrez votre mot de passe");
        if (login=="admin" && password=="admin") 
            {document.write("Bienvenue : "+login);}
        else{alert("Acces refuse");
            seconnecter3recur(x+1)}}
}

function login(){
    var login=document.getElementById("t1").value;
    var mdp=document.getElementById("t2").value;
    if (login=="admin" && mdp=="admin") 
        {window.location.href="yes.html"}
    else {window.location.href="non.html"}
}

function Annuler(){window.location.href="tp6jv.html"}

function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function affichagetab2(){
    var len=prompt("Combien de lignes?");
    document.write("<table border=2px width=30%");
    for(let i=0; i<=len-1; i++){
        document.write("<tr><td>"+(i+1)+"</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function swich(){
    var c=prompt("Quelle couleur voulez-vous? Couleurs disponibles: Vert, rouge et bleu")
    switch(c) {
        case "vert":
            document.body.style.backgroundColor = "green";
            break;
        case "VERT":
            document.body.style.backgroundColor = "green";
            break;
        case "Vert":
            document.body.style.backgroundColor = "green";
            break;
        case "rouge":
            document.body.style.backgroundColor = "red";
            break;
        case "Rouge":
            document.body.style.backgroundColor = "red";
            break;
        case "ROUGE":
            document.body.style.backgroundColor = "red";
            break;
        case "bleu":
            document.body.style.backgroundColor = "blue";
            break;
        case "Bleu":
            document.body.style.backgroundColor = "blue";
            break;
        case "BLEU":
            document.body.style.backgroundColor = "blue";
            break;
    default:
      alert("Couleur non supporte")
  }}

function cdc() {
    var chaine=prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient "+chaine.length+" caracteres "+"<br>");
    document.write("La premire lettre est "+chaine.substr(0,1)+"<br>");
}

function bonus(){}