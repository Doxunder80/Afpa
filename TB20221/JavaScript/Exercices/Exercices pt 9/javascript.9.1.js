// Exercice 1 //

function cube(nbr1) 
{
  var resultat = Math.pow(nbr1, 3);
  return resultat; 
}

function produit(nbr1, nbr2) 
{
  var resultat = nbr1 * nbr2;
  return resultat; 
}

var x = prompt("Entrez un nombre");
var y = prompt("Entrez un multiplicateur");

var r1 = cube(x);
var r2 = produit(x, y) ;


function afficheImg(src){
    document.write(src);
}
afficheImg('<img src="papillon.jpg">' + "</br>");

document.write(" Le cube de " + x + " est égal à " + r1 + '<br>');
document.write(" Le produit de " + x + " x "+ y + " est égal à " + r2);

