//% Eventi

// Selettori
const button = document.querySelector('#btn');
const inputText = document.getElementById("input-text");
const container = document.getElementById("container");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const link = document.querySelector("a");
const blocks = document.querySelectorAll("div > section")

//$ addEventListener()

/*
button.addEventListener('click', function() {
  // codice da eseguire quando il pulsante viene cliccato
  alert("Mi hai cliccato!");
});
*/

/*
document.addEventListener('click', function() {
    console.log("Hai cliccato nel DOM");
});
*/

//* Sintassi eventi inline HTML


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
    event.stopPropagation();
    console.log("Hai cliccato sulla section");
});

container.addEventListener('click', () => {
    console.log("Hai cliccato sul div");
});
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
blocks.forEach(link => {
    link.addEventListener('click', color);
})

function color(e) {
    e.target.style.backgroundColor = "red";
}
*/
/*
container.addEventListener('click', (item) => {
    console.log(item.target.tagName) //SECTION
    if(item.target.tagName === "SECTION") {
        item.target.style.backgroundColor = "red";
    }
});
 */




//% Eventi più utilizzati in JavaScript


//$ keypress
/*
//* Proprietà which
inputText.addEventListener("keypress", (e) => {
    console.log(e.which);
}); */


//$ keydown
/*
//* Proprietà value
inputText.addEventListener("keydown", function() {
    console.log(inputText.value);
});
*/

//$ keyup


//$ load


//$ scroll