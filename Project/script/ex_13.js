let img = document.createElement("img")
img.src = localStorage.getItem('ex_12.img')
img.width = '500'
img.height = '250'
document.getElementById('button').appendChild(img)

$("#button").click(function() {
    localStorage.removeItem('ex_12.img')
    $("img").remove()
})

let count = 0
let width = 500;
let height = 250
let divbutton = document.getElementById('button')

divbutton.addEventListener("mouseenter", event => {
    let interval = window.setInterval(function () {
        count = (count-1) % 5
        width = width + count
        height = height + count  
        img.style.width = width + 'px'
        img.style.height = height + 'px'
    }, 1000)
    divbutton.addEventListener('mouseleave', event => {
        window.clearInterval(interval)
        img.style.width = '500px'
        img.style.height = '250px'
    })    
})


