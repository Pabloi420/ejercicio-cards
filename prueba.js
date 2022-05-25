let contenedor=document.getElementById("contenedor-cards");

window.addEventListener("load", function(){
  personas.forEach(e => {
    contenedor.classList.add("contenedor-cards");
    let card=document.createElement("div");
    let text=document.createElement("p");
    let button=document.createElement("button");
    button.innerText="Conoceme"
    card.appendChild(button);
    card.appendChild(text);
    text.innerText="Hola soy" + " " + e.apellido + " " + e.nombre + " " + "y tengo" + " " + e.edad + " años";
    contenedor.appendChild(card);
    card.classList.add("card-persona");
    text.classList.add("texto-persona");
    button.classList.add("button")
    text.classList.add("texto-margin");
    button.addEventListener("click", function(){
      text.classList.toggle("texto-persona");
    })
  });
});



