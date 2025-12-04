//Menu Hamburguer

let Menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu() {
    //Se o menu esta fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //Abrir o Menu
        menu.style.right = "0"

        // Mostrar o Icone X

        iconeX.style.display = "inline"

        //esconder o icone de barras

        iconeBarras.style.display = "none"

        sombra.style.right = "0"
    } else {
        //Fechar o Menu
        menu.style.right = "-210px"

        //Esconder o Icone X
        menu.style.display = "none"

        //Mostrar o icones barras
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"
    }
}