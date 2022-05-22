let cards=document.getElementsByClassName("cards");
let personas=[
  personaUno={
    apellido: "Bracciale",
    nombre: "Pablo",
    edad: 43
  },
  personaDos={
    apellido: "Bracciale",
    nombre: "Pablo",
    edad: 43
  },
  personaTres={
    apellido: "Bracciale",
    nombre: "Pablo",
    edad: 43
  }
]

window.addEventListener("load", function(){
  personas.forEach(e => {
    let card=document.createElement("div");
    let text=document.createElement("p");
    card.appendChild(text);
    text.innerText="Hola soy" + " " + e.apellido + " " + e.nombre + " " + "y tengo" + " " + e.edad;
    cards[0].appendChild(card);
    card.classList.add("fondo")
  });
});

