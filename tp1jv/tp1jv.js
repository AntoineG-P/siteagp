function calcul_moyenne(){
    var n1=prompt("Donner la première note: ");
    var n2=prompt("Donner la deuxième note: ");
    var n3=prompt("Donner la troisième note: ");
    var somme=Number(n1)+Number(n2)+Number(n3)
    document.write("Voici la somme: "+somme+ "<br>");
    var moyenne=somme/3;
    document.write("Voici la moyenne: "+moyenne+"<br>");
    if (moyenne<10){document.write("Vous n'êtes pas admis")}
    else{document.write("Vous êtes admis")};
}

function test_age(){
    var age=prompt("Quel âge avez vous?: ");
    if (age<18) {
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor = "red"
      } else {
        document.write("Vouse êtes majeur");
        document.body.style.backgroundColor = "green";
      }}

function simple_affichage(){
    var nom=prompt("Quel est votre nom?");
    var prenom=prompt("Quel est votre prénom?");
    document.write("<div style='margin:auto; width:300px; border: 2px solid blue;'>")
    document.write("Bonjour "+ nom+ " "+prenom)
    document.write("</div>")
}


        
/*function test_couleur() (Version du prof){
    let c = prompt("Donner une couleur")
    if(c == "rouge" || "Rouge" || c=="R"){
        document.body.style.background="red"
    }
    else if (c=="bleu" || c=="Bleu" || c=="B"){
        document.body.style.background="blue"
    }
    else {
        document.write("Couleur non comprise")
    }
}*/


function test_couleur() {
    var col=prompt("Choissiez une couleur entre: Rouge, Bleu, Vert et Gris");
    if (col=="Rouge" || col=="rouge"){
        document.body.style.backgroundColor = "red";}
    else if (col=="Vert" || col=="vert"){
        document.body.style.backgroundColor = "green";}
    else if (col=="Bleu" || col=="bleu"){
        document.body.style.backgroundColor = "blue";}
    else if (col=="Gris" || col=="gris"){
        document.body.style.backgroundColor = "grey";}
    else {document.write("Couleur non comprise")};}