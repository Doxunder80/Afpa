var nom = prompt('Entrez votre nom :');
var prenom = prompt('Entrez votre prénom :');

if (window.confirm("Êtes vous un homme?") == true)
{
    window.alert(" Bonjour Monsieur " + nom + " " + prenom + ". Bienvenue sur notre site web !");   
}
else{
        window.alert(" Bonjour Madamme " + nom + " " + prenom + ". Bienvenue sur notre site web !"); 
    }