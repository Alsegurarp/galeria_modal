const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img")
const left = document.querySelector("button.left");
const right = document.querySelector("button.right");
let imgActual = 0;

//al hacer click en cualquier enlace, se agrega .visible a ".modal"
/*enlaces.forEach((addEventListener("click", 
    evento => {evento.preventDefault();
    modal.classList.add("visible");})
));*/
enlaces.forEach((enlace) => {
    enlace.addEventListener("click", evento => {
        evento.preventDefault();
        imgModal.setAttribute("src",enlace.getAttribute("href"));
        modal.classList.add("visible");
    })
});


//al hacer click en cualquier otra parte, se le retira ".visible" a ".modal"
modal.addEventListener("click", () => 
{modal.classList.remove("visible"); });
/* aqui dice que al dar click sobre
cualquier espacio del modal se le quitará la clase "visible"*/
left.addEventListener("click", (evento) => {
    evento.stopPropagation();
    imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;
    imgModal.setAttribute("src", enlaces[imgActual].getAttribute("href"));
});
right.addEventListener("click", (evento) => {
    evento.stopPropagation();
    imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
    imgModal.setAttribute("src", enlaces[imgActual].getAttribute("href"));
});


