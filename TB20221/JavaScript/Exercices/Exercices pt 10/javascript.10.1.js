// Exercice 1 //

var tableau = [];
var taille = parseInt(prompt("Veuillez entrer le nombre d'élèves."));

for(var i = 0; i < taille; i++){
    contenu = prompt("Veuillez entrer les noms des élèves.")

    tableau.push(contenu);
    document.write('Élève n° ' + (i+1) + ' - ' + tableau[i] + '</br>' )
}
   
