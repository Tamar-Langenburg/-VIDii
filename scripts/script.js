// JavaScript Document
console.log("Howdy!");
/////////////////
// bron Sanne //
////////////////

// button1 red //
var button1 = document.querySelector("li:nth-of-type(1) button");
var list1 = document.querySelector("li:nth-of-type(1)");

button1.addEventListener("click", openen1);

function openen1() {
    // zoeken of er een li is die nu open is
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
    // zoeken of er een li is die nu open is
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
    // zoeken of er een li is die nu open is
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
    // zoeken of er een li is die nu open is
    var huidigeOpenLi = document.querySelector("li.open:not(li:nth-of-type(4))");
    // als die er is de class open eraf halen
    if (huidigeOpenLi) {
        huidigeOpenLi.classList.remove("open");
    }
    list4.classList.toggle("open");
}

//////

var pokebutton1 = document.querySelector("section button:nth-of-type(1)");
var sectionballen = document.querySelector("section");

pokebutton1.addEventListener("click", pokebalSwitch1);

function pokebalSwitch1() {
    // zoeken of er een li is die nu open is
    var huidigePokebal = sectionballen.querySelector(".active");
    // als die er is de class open eraf halen
    
     huidigePokebal.classList.remove("active");
    
    pokebutton1.classList.add("active");
   document.body.classList.remove("pokebal", "trainerbal", "hyperbal");
    document.body.classList.add("masterbal");
}

var pokebutton2 = document.querySelector("section button:nth-of-type(2)");
var sectionballen = document.querySelector("section");

pokebutton2.addEventListener("click", pokebalSwitch2);

function pokebalSwitch2() {
    // zoeken of er een li is die nu open is
    var huidigePokebal = sectionballen.querySelector(".active");
    // als die er is de class open eraf halen
    
     huidigePokebal.classList.remove("active");
    
    pokebutton2.classList.add("active");
    document.body.classList.remove("masterbal", "trainerbal", "hyperbal");
    document.body.classList.add("pokebal");
}

var pokebutton3 = document.querySelector("section button:nth-of-type(3)");
var sectionballen = document.querySelector("section");

pokebutton3.addEventListener("click", pokebalSwitch3);

function pokebalSwitch3() {
    // zoeken of er een li is die nu open is
    var huidigePokebal = sectionballen.querySelector(".active");
    // als die er is de class open eraf halen
    
     huidigePokebal.classList.remove("active");
    
    pokebutton3.classList.add("active");
    document.body.classList.remove("masterbal", "pokebal", "hyperbal");
    document.body.classList.add("trainerbal");
}

var pokebutton4 = document.querySelector("section button:nth-of-type(4)");
var sectionballen = document.querySelector("section");

pokebutton4.addEventListener("click", pokebalSwitch4);

function pokebalSwitch4() {
    // zoeken of er een li is die nu open is
    var huidigePokebal = sectionballen.querySelector(".active");
    // als die er is de class open eraf halen
    
     huidigePokebal.classList.remove("active");
    
    pokebutton4.classList.add("active");
    document.body.classList.remove("masterbal", "trainerbal", "pokebal");
    document.body.classList.add("hyperbal");
}


