function remplir() {
    const tabDesc = new Array("portable", "bureau", "ram 8go", "clef usb 16go", "souris", "ecran 17 pouces");
    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeDesc = document.getElementsByClassName("desc");

    for (var i=0; i<listeDesc.length+2;i++){
        var idesc=Math.floor(tabDesc.length * Math.random());
        listeDesc[i].value = tabDesc[idesc];
        var qte=Math.floor(10*Math.random()+1);
        var prix = Math.floor(100 * Math.random() + 1);
        listeQte[i].value = qte;
        listePrix[i].value = prix;
        var qte = Math.floor(10 * Math.random() + 1);
        var prix = Math.floor(100 * Math.random() + 1);
        listeQte[i+1].value = qte;
        listePrix[i + 1].value = prix;
    }
}

function calcul() {
    var total = 0;

    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeTtl = document.getElementsByClassName("total");

    for (var i = 0; i < listePrix.length; i++) {
        listeTtl[i].value = parseInt(listeQte[i]).value * parseInt(listePrix[i]).value;
        total = total + listeTtl[i];
    }

    var rem = document.getElementById("remise").value;
    stot.value = total - Number(rem);
    stotsr.value = total;
    var impo = document.getElementById("impo").value;
    var taxe = Number(impo) * (total - rem)
    tax.value = taxe;
    var sold = total + taxe;
    document.getElementById('sold').innerText = sold;
}

function ajouterLigne() {
    var newLi = document.getElementById("modeleLigne").cloneNode(true);
    var lastLi = document.getElementById("lastLigne");

    var pere = document.getElementById("table_inv");
    console.log(pere);
    pere.insertBefore(newLi, lastLi);
}