// Exercice 2 //

function GetInteger(entier) 
{
    entier = parseInt(prompt("Veuillez entrer un nombre."));
    return entier;
}
nombre = GetInteger();


function InitTab(Tab) 
{
    Tab = new Array(nombre);
    return Tab;
}
Tab = InitTab();


function saisie() 
{
    for (var i = 0; i < nombre; i++) 
    {
        Tab[i] = parseInt(prompt("Veuillez entrer un poste."))
    }
}


function AfficheTab() 
{
    for (var i = 0; i < nombre; i++) 
    {
        document.write("Le poste du tableau " + i + " est de : " + Tab[i] + '</br>');
    }
    document.write();
}


function RechercheTab() 
{
    var rang = parseInt(prompt("Saisissez le rang d'un poste pour afficher son contenu."));
    if (rang < Tab.length) 
    {
        document.write('</br>' + "Le poste " + rang + " du tableau que vous avez saisi est de rang " + Tab[rang] + '</br>');
    } else 
    {
        var rang = parseInt(prompt("Saisissez le rang d'un poste pour afficher le contenu."));
    }
}

function InfoTab(arr) {
    var somme = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
      somme += arr[i];
    }
    max = Math.max(...Tab)

    document.write('</br>' + "Le maximum des postes est :  " + max + '</br>');   
    document.write("La moyenne des postes est : " + somme / arr.length);
  }


saisie();

AfficheTab();

RechercheTab();

InfoTab(Tab);