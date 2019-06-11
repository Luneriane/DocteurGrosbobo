const titre = document.querySelector("#texte h3");
const paragraphe = document.querySelector("#texte p");

const contenu = [
    {
        nom : "tete",
        titreP : "Tête :",
        p : "Lorem tête"},
    {
        nom : "epaule",
        titreP : "Epaule :",
        p : "Blabla épaule"},
    {
        nom : "bras",
        titreP : "Bras :",
        p : "Blablabla bras"},
    {
        nom : "main",
        titreP : "Main :",
        p : "Truc main"},
    {
        nom : "hanche",
        titreP : "Hanche :",
        p : "Bidule hanche"},
    {
        nom : "jambe",
        titreP : "Jambe :",
        p : "Chouette jambe"},
    {
        nom : "pied",
        titreP : "Pied :",
        p : "Machin pied"}
    ];

const actif = document.getElementsByClassName('actif');
const passif = document.getElementsByClassName('passif');

let isActive = false;

function changeClass(idName){
    isActive.className = "passif";
    var myElement = document.getElementById(idName);
    isActive = myElement;
    myElement.className = 'actif';

    var myName = idName;
    
    for (let i in contenu){

        if (contenu[i].nom == myName){
            titre.innerText = contenu[i].titreP;
            paragraphe.innerText = contenu[i].p;
        }
    }
};