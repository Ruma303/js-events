//% Eventi
// Selettori
const button = document.querySelector('#btn');
const inputText = document.getElementById("input-text");
const container = document.getElementById("container");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const link = document.querySelector("a");
const blocks = document.querySelectorAll("div > section");

//$ addEventListener()
/*
button.addEventListener('click', function() {
  // codice da eseguire quando il pulsante viene cliccato
  alert("Mi hai cliccato!");
});
*/

/*
window.addEventListener('click', function() {
    console.log("Hai cliccato nel DOM");
});
*/

//% Oggetto Event
/*
document.addEventListener('click', (event) => {
    console.log(event);
});

document.addEventListener('click', (event) => {
    console.log(event.target);
});
*/

//% Bubbling e Capturing

//$ Bubbling
/*
container.addEventListener('click', function() {
    console.log("Hai cliccato sul div");
});

section1.addEventListener('click', function() {
    console.log("Hai cliccato sulla section");
});
*/

//$ Capturing
/*
document.body.addEventListener('click', function() {
    console.log("Hai cliccato sul body");
}, true);

container.addEventListener('click', function() {
    console.log("Hai cliccato sul div");
}, true);

section1.addEventListener('click', function() {
    console.log("Hai cliccato sulla section");
});
*/

//$ stopPropagation
/*
section1.addEventListener('click', (event) => {
    //event.stopPropagation();
    console.log("Hai cliccato sulla section");
});

container.addEventListener('click', () => {
    //event.stopPropagation();
    console.log("Hai cliccato sul div");
}, true);

document.body.addEventListener('click', function() {
    console.log("Hai cliccato sul body");
}, true);
*/

//$ preventDefault
/*
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Hai cliccato sul link");
});
*/

//$ Event Delegation
/*
blocks.addEventListener('click', (e) =>{
    console.log(blocks);
});  // Errore
*/

/*
blocks.forEach(select => {
    select.addEventListener('click', color);
});

function color(e) {
    e.target.style.backgroundColor = "red";
};
*/

/*
container.addEventListener('click', (item) => {
    console.log(item.target.tagName) //SECTION

    if(item.target.tagName === "SECTION") {
        item.target.style.backgroundColor = "red";
    } else {
        button.style.backgroundColor = "blue";
    }
});
*/

//$ removeEventListener()
/*
function handleClick() {
  console.log('Pulsante cliccato!');
}
button.addEventListener('click', handleClick);

// Rimuove l'ascoltatore di eventi click
button.removeEventListener('click', handleClick);
*/

//% Eventi più utilizzati in JavaScript
//$ click e toggle()
/*
function toggleButton() {
    this.classList.toggle('active');
}

button.addEventListener('click', toggleButton);
*/

//$ keypress
/*
//* Proprietà which
inputText.addEventListener("keypress", (e) => {
    console.log(e.target.value);
    console.log(e.which);
});
*/


//$ keydown
/*
//* Proprietà value
inputText.addEventListener("keydown", function() {
    console.log(inputText.value);
});
*/

//$ keyup
/*
inputText.addEventListener("keyup", function() {
    console.log(inputText.value);
});
*/

//$ load
/*
window.addEventListener('load', function() {
    const loaded = document.createElement('h2');
    loaded.innerHTML = 'Pagina caricata completamente';
    loaded.style.color = "red";
    document.body.prepend(loaded);
    console.log("Pagina caricata");
});
*/

//$ scroll
/*
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        document.body.style.backgroundColor = "bisque";
    } else {
        document.body.style.backgroundColor = "white";
    }
});
*/