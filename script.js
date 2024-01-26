//% Eventi


//* Selettori
const button = document.querySelector('#btn');
const inputText = document.getElementById("input-text");
const outer = document.getElementById("outer-element");
const inner = document.querySelector(".inner-element");
const link = document.querySelector("a");
const blocks = document.querySelectorAll("section > div");


//, addEventListener()

/* button.addEventListener('click', function() {
    // codice da eseguire quando il pulsante viene cliccato
    alert("Mi hai cliccato!");
}); */


/* window.addEventListener('click', function() {
    console.log("Hai cliccato l'oggetto window!");
}); */

/* document.addEventListener('click', function() {
    console.log("Hai cliccato l'oggetto document!");
}); */




//% Oggetto Event

/* document.addEventListener('click', event => console.log(event))

document.addEventListener('click', (event) => {
    console.log(event.target);
}); */



//% Bubbling e Capturing

//, Bubbling

/* outer.addEventListener('click', function() {
    console.log("Hai cliccato sulla section");
    console.log(outer);
});

inner.addEventListener('click', function() {
    console.log("Hai cliccato nel div interno");
    console.log(inner);
}); */


//, Capturing

/* document.body.addEventListener('click', function() {
    console.log("Hai cliccato sul body");
}, true);

outer.addEventListener('click', function() {
    console.log("Hai cliccato sulla section");
}, true);

inner.addEventListener('click', function() {
    console.log("Hai cliccato nel div interno");
}); */


//, stopPropagation

/* inner.addEventListener('click', () => {
    console.log("Hai cliccato nel div interno");
});

outer.addEventListener('click', event => {
    event.stopPropagation();
    console.log("Hai cliccato sulla section");
});

document.body.addEventListener('click', () => {
    console.log("Hai cliccato sul body");
}); */


//, preventDefault()

/* link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Hai cliccato sul link");
}); */


//, Event Delegation

/* blocks.addEventListener('click', () => {
    console.log(blocks);
}); */  //. Errore


/* blocks.forEach(div => {
    div.addEventListener('click', (e) => {
        e.target.style.backgroundColor = "red";
    });
}); */


/* outer.addEventListener('click', (item) => {
    console.log(item.target.tagName) // DIV

    if(item.target.tagName === "DIV") {
        item.target.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "aqua";
    }
}); */


//, removeEventListener()

/* button.addEventListener('click', handleClick);

function handleClick() {
    console.log('Pulsante cliccato!');
}

button.removeEventListener('click', handleClick); */



//% Eventi più utilizzati in JavaScript
//, click e toggle()

/* function toggleButton() {
    this.classList.toggle('active');
}

button.addEventListener('click', toggleButton); */


//, keypress

//* Proprietà which
/* inputText.addEventListener("keypress", (e) => {
    console.log(e.which);
}); */



//, keydown

//* Proprietà value
/* inputText.addEventListener("keydown", function() {
    console.log(inputText.value);
}); */


//, keyup
/* inputText.addEventListener("keyup", function() {
    console.log(inputText.value);
}); */


//, load e DOMContentLoaded

// window.addEventListener('load', function() {
/* window.addEventListener('DOMContentLoaded', function() {
    const loaded = document.createElement('h2');
    loaded.innerHTML = 'Pagina caricata completamente';
    loaded.style.color = "red";

    document.body.prepend(loaded);
    console.log("Pagina caricata");
});
 */


//, scroll
/* window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        document.body.style.backgroundColor = "aqua";
    } else {
        document.body.style.backgroundColor = "white";
    }
}); */