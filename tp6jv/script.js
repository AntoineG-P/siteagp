

function seconnecter(){    
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin") 
    {document.write("Bienvenue : "+login);}
    else {alert("Accès refusé")}}

function seconnecter2(){window.location.href="identification.html"}

function seconnecter3(){
    i=0;
    do{
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin") 
        {document.write("Bienvenue : "+login);
        break;}
    else {alert("Accès refusé");
    i+=1;}
    }
    while(i<3)
    if (i==3){alert("Délai dépassé")}}

function seconnecter3recur(x){ //Version de seconnecter3 qui utilise la récursivité
    if (x==3){alert("Délai dépassé")}
    else{
        var login=prompt("Donnez votre nom d'utilisateur");
        var password=prompt("Entrez votre mot de passe");
        if (login=="admin" && password=="admin") 
            {document.write("Bienvenue : "+login);}
        else{alert("Accès refusé");
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
      alert("Couleur non supportée")
  }}

function cdc() {
    var chaine=prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaîne contient "+chaine.length+" caracteres "+"<br>");
    document.write("La première lettre est "+chaine.substr(0,1)+"<br>");
}

function bonus(){
    var ttc=0;
    var c="Oui";
    while (c!="Non"){
        var art=prompt("Donnez un article");
        var p=prompt("Le prix");
        var q=prompt("La quantité");
        var t=p*q;
        
        if (q==1){alert("Votre "+art+" coûtera "+ t+"€")}
        else{alert("Vos "+ art+ " coûteront "+ t+"€")}

        document.write("Article : "+ art+"<br>");
        document.write("Prix : "+p+"€<br>");
        document.write("Quantité : "+q+"<br>");
        document.write("Total : "+t+"€<br><br>");
        ttc=ttc+t;
        c=prompt("Continuer? (Oui/Non)")}
    document.write("Prix TTC : "+ttc+"€")
}

function ligne(){window.location.href="ajoutligne.html"}

function ajouterLigne(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    if(a==""||b==""){alert("Un ou 2 champs vide");}
    else if((Number(b)<10||Number(b)>20)){alert("Âge invalide");}
    else{
        var table=document.getElementById("myTable");
        var newRow=table.insertRow(-1);
        var cell1=newRow.insertCell(0);
        var cell2=newRow.insertCell(1);
        cell1.innerHTML=document.getElementById("t1").value;
        cell2.innerHTML=document.getElementById("t2").value;
    }
}