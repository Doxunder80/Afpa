// Exercice 4 - Multiples //

console.log("Les multiples");

var X = prompt("Entrez un nombre entier")
var N = prompt("Entrez un autre nombre entier")

for(i=1; i<=N; i++)
{
   resultat = X * i;
   console.log((i) + " x " + (X) + " = "+resultat)
}
