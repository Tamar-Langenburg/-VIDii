// JavaScript Document
console.log("Howdy!");

/////////////////
// bron Sanne //
////////////////

////////////////////////////
// Code openen van de list//
////////////////////////////

// button1 red //
var button1 = document.querySelector("li:nth-of-type(1) button");
var list1 = document.querySelector("li:nth-of-type(1)");

button1.addEventListener("click", openen1);

function openen1() {
    // zoeken of er al een li is die open staat, maar niet de list waar je op klikt.
    var huidigeOpenLi = document.querySelector("li.open:not(li:nth-of-type(1))");
    // als die er is de class open eraf halen
    if (huidigeOpenLi) {
        huidigeOpenLi.classList.remove("open");
    }
    list1.classList.toggle("open");
   
}
//button2 gold//
var button2 = document.querySelector("li:nth-of-type(2) button");
var list2 = document.querySelector("li:nth-of-type(2)");

button2.addEventListener("click", openen2);

function openen2() {
     // zoeken of er al een li is die open staat, maar niet de list waar je op klikt.
    var huidigeOpenLi = document.querySelector("li.open:not(li:nth-of-type(2))");
    // als die er is de class open eraf halen
    if (huidigeOpenLi) {
        huidigeOpenLi.classList.remove("open");
    }

    // dan de nieuwe li opnenen
    list2.classList.toggle("open");
}
//button3 emerald//
var button3 = document.querySelector("li:nth-of-type(3) button");
var list3 = document.querySelector("li:nth-of-type(3)");

button3.addEventListener("click", openen3);

function openen3() {
     // zoeken of er al een li is die open staat, maar niet de list waar je op klikt.
    var huidigeOpenLi = document.querySelector("li.open:not(li:nth-of-type(3))");
    // als die er is de class open eraf halen
    if (huidigeOpenLi) {
        huidigeOpenLi.classList.remove("open");
    }
    list3.classList.toggle("open");
   
}
//button4 diamond//
var button4 = document.querySelector("li:nth-of-type(4) button");
var list4 = document.querySelector("li:nth-of-type(4)");

button4.addEventListener("click", openen4);

function openen4() {
     // zoeken of er al een li is die open staat, maar niet de list waar je op klikt.
    var huidigeOpenLi = document.querySelector("li.open:not(li:nth-of-type(4))");
    // als die er is de class open eraf halen
    if (huidigeOpenLi) {
        huidigeOpenLi.classList.remove("open");
    }
    list4.classList.toggle("open");
}

/////////////////////////////////////////////
// Code van de section buttons en de cursor//
/////////////////////////////////////////////

var pokebutton1 = document.querySelector("section button:nth-of-type(1)");
var sectionballen = document.querySelector("section");

pokebutton1.addEventListener("click", pokebalSwitch1);

function pokebalSwitch1() {
    // active class toevoegen
    var huidigePokebal = sectionballen.querySelector(".active");
    // als er al een class op zit wordt het eraf gehaald
     huidigePokebal.classList.remove("active");
    //Als je de knop pokebutton klikt, komt de class active erop
    pokebutton1.classList.add("active");
    //Dan wordt ook gelijk de classes weggehaald van de andere buttons
    document.body.classList.remove("pokebal", "trainerbal", "hyperbal");
    // Dan komt de class die class erop die de cursor verandert naar de goede afbeelding
    document.body.classList.add("masterbal");
}

var pokebutton2 = document.querySelector("section button:nth-of-type(2)");
var sectionballen = document.querySelector("section");

pokebutton2.addEventListener("click", pokebalSwitch2);

function pokebalSwitch2() {
    // active class toevoegen
    var huidigePokebal = sectionballen.querySelector(".active");
    // als er al een class op zit wordt het eraf gehaald
     huidigePokebal.classList.remove("active");
    //Als je de knop pokebutton klikt, komt de class active erop
    pokebutton2.classList.add("active");
    document.body.classList.remove("masterbal", "trainerbal", "hyperbal");
    document.body.classList.add("pokebal");
}

var pokebutton3 = document.querySelector("section button:nth-of-type(3)");
var sectionballen = document.querySelector("section");

pokebutton3.addEventListener("click", pokebalSwitch3);

function pokebalSwitch3() {
    // active class toevoegen
    var huidigePokebal = sectionballen.querySelector(".active");
    // als er al een class op zit wordt het eraf gehaald
     huidigePokebal.classList.remove("active");
    //Als je de knop pokebutton klikt, komt de class active erop
    pokebutton3.classList.add("active");
    //Dan wordt ook gelijk de classes weggehaald van de andere buttons
    document.body.classList.remove("masterbal", "pokebal", "hyperbal");
    // Dan komt de class die class erop die de cursor verandert naar de goede afbeelding
    document.body.classList.add("trainerbal");
}

var pokebutton4 = document.querySelector("section button:nth-of-type(4)");
var sectionballen = document.querySelector("section");

pokebutton4.addEventListener("click", pokebalSwitch4);

function pokebalSwitch4() {
    // active class toevoegen
    var huidigePokebal = sectionballen.querySelector(".active");
    // als er al een class op zit wordt het eraf gehaald
     huidigePokebal.classList.remove("active");
    //Als je de knop pokebutton klikt, komt de class active erop
    pokebutton4.classList.add("active");
    //Dan wordt ook gelijk de classes weggehaald van de andere buttons
    document.body.classList.remove("masterbal", "trainerbal", "pokebal");
    // Dan komt de class die class erop die de cursor verandert naar de goede afbeelding
    document.body.classList.add("hyperbal");
}


