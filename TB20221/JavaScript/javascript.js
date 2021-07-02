// Exercice 1 //

do{
    var val = parseInt(window.prompt("Veuillez entrer un nombre intier. Saisissez 0 pour arreter la saisie."))
} while(val != 0)

function Somme(nombre) {
    somme = nombre + nombre;
    return somme
}

window.alert(Somme(val))