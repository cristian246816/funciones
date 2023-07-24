const BLUE_BOX = document.getElementById("blueBox")
const RED_BOX = document.getElementById("redBox")
const GREEN_BOX = document.getElementById("greenBox")
const YELLOW_BOX = document.getElementById("yellowBox")

const PINTAR = (elemento, color) => {
    elemento.style.backgroundColor = color
}

BLUE_BOX.addEventListener("click", () => {
    PINTAR(BLUE_BOX, "black")
})

RED_BOX.addEventListener("click", () => {
    PINTAR(RED_BOX, "black")
})

GREEN_BOX.addEventListener("click", () => {
    PINTAR(GREEN_BOX, "black")
})

YELLOW_BOX.addEventListener("click", () => {
    PINTAR(YELLOW_BOX, "black")
})


// EJERCICIO 2
const DEFAULT_COLOR = "white"
const DIV_KEY = document.getElementById("key")
const MENSAJE = document.getElementById("mesage")
const PINK = "pink"
const ORANGE = "orange"
const SKYBLUE = "skyblue"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        DIV_KEY.style.backgroundColor = PINK
        MENSAJE.textContent = 'Presionaste la letra ' + event.key + ' ahora el cuadro  "ROSA".'
    } else if (event.key === 's') {
        DIV_KEY.style.backgroundColor = ORANGE
        MENSAJE.textContent = 'Presionaste la letra ' + event.key + ' ahora el cuadro es "ORANGE".'
    } else if (event.key === 'd') {
        DIV_KEY.style.backgroundColor = SKYBLUE
        MENSAJE.textContent = 'Presionaste la letra ' + event.key + ' ahora el cuadro es "VERDE".'
    }else {
        DIV_KEY.style.backgroundColor = DEFAULT_COLOR
        MENSAJE.textContent = 'Presiona las TECLAS correspondientes.'
    }
})


// EJERCICIO 3
const SKYBLUE2 = "skyblue"
const ORANGE2 = "orange"
const BROWN = "brown"
const MENSAJE_2 = document.getElementById("mesage2")
const DIV_KEY1 = document.getElementById("key1")

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        DIV_KEY1.classList.add("style_key1")
        DIV_KEY1.style.backgroundColor = SKYBLUE2
        MENSAJE_2.textContent = 'Presionaste la letra ' + event.key + ' El cuadro ahora es de color "CELESTE".'
    } else if (event.key === 'w') {
        DIV_KEY1.style.backgroundColor = ORANGE2
        MENSAJE_2.textContent = 'Presionaste la letra ' + event.key + ' El cuadro ahora es de color "NARANJO".'
        DIV_KEY1.classList.add("style_key1");
    } else if (event.key === 'e') {
        DIV_KEY1.style.backgroundColor = BROWN
        MENSAJE_2.textContent = 'Presionaste la letra ' + event.key + ' El cuadro ahora es de color "CAFÉ".'
        DIV_KEY1.classList.add("style_key1");
    }else {
        MENSAJE_2.textContent = 'Preciona las TECLAS correspondientes'
        DIV_KEY1.classList.remove("style_key1")
    }
})