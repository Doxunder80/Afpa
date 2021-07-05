// Exercice 1 //

var valeurs;
var moyenne = 0;
var somme = 0;
var i = 0;

while (valeurs!=0)
{
    valeurs = parseInt(prompt("Veuillez saisir un nombre. \n Entrez 0 pour arrretez la saisie."));
    somme = somme + valeurs;
    i++ 
    moyenne = somme / (i - 1) ;
}

document.write('Vous avez saisie ' + (i - 1) + ' nombre(s).' + '</br>'+ " La somme est :  " + somme + '<br>');
console.log(" La somme est :  " + somme);
document.write(" La moyenne est :  " + moyenne);
console.log(" La moyenne est :  " + moyenne);
