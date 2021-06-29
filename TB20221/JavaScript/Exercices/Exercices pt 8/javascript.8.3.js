// Exercice 3 - Moyenne //

var nombre;
var i = 0;
var moyenne = 0;
var somme = 0;

while (nombre != 0)
{
    nombre = parseInt(prompt("Entrez des nombres entiers :\n on arrête la saisie avec la valeur 0"));
    somme = somme + nombre;
    i++ 
    moyenne = somme / (i - 1);
}

console.log("La moyenne est : " + moyenne +'</br>')
document.write("La moyenne est : " + moyenne +'</br>');
console.log("La somme est : " + somme)
document.write("La somme est : " + somme);