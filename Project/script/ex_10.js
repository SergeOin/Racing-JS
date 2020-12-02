let screen = document.querySelector(".result")
let buttons = [...document.querySelectorAll(".buttons div")]
let listeKeycode = buttons.map(button => button.dataset.key)

document.addEventListener('keydown', (e) => {
    let value = e.keyCode.toString()
    Calculer(value)
})

document.addEventListener('click', (e) => {
    let value = e.target.dataset.key
    Calculer(value)
})
function parse(value) {
    return Function(`'use strict'; return (${value})`)()
  }
function Calculer(value){
    if(listeKeycode.includes(value)){
        switch(value){
            case '8':
                screen.textContent = "";
                break;
            case '46':
                screen.textContent
                screen.textContent = screen.textContent.substr(0,screen.textContent.length-1) 
                break;
            case '13':
                screen.textContent
                let calcul = parse(screen.textContent)
                screen.textContent = calcul
                break;
            default: 
                let indexKeycode = listeKeycode.indexOf(value)
                let button =buttons[indexKeycode]
                screen.textContent += button.innerHTML
        }
    } 
}
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue: ' + e.message)
})