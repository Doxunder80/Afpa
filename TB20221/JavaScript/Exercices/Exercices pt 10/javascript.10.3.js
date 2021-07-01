// Exercice 3 : Tri d’un tableau //

var Tableau = [74, 58, 2, 65, 21, 42, 35, 15]
document.write("Tableau initial : " + Tableau + '</br>')

// var Tableau = new Array(10,7,1,6,2,5,4,9,3,8);

for (var i1 = Tableau.length-1; i1 >= 0; i1--) {
    var temp;
    for (var i2 = Tableau.length-1; i2 >= 0; i2--) {
        if (Tableau[i2] < Tableau[i1]) {
            temp = Tableau[i2];
            Tableau[i2] = Tableau[i1];
            Tableau[i1] = temp;
        }
    }
    document.write("Tableau après : ")
    for (var i1 = 0; i1 < Tableau.length;i1++) {   
        document.write(" | " + Tableau[i1] + " | ")
    }
}
    