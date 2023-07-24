function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color
    elemento.style.textDecoration = "underline";
    elemento.style.borderRadius = "20px"
}
const divHello = document.getElementById("ele1")
divHello.addEventListener("click", () => {
    pintar(divHello, "yellow")
});