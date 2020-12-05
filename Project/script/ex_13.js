localStorage.setItem('ex_12.img', 'https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png');
let img = document.createElement("img")
img.src = localStorage.getItem('ex_12.img')
img.width = '500'
img.height = '250'
let divbutton = document.getElementById('button')
divbutton.appendChild(img)

let count = 0
let hoverimg = window.setInterval.divbutton.addEventListener('mouseenter', function () {  
    count++
    

})
divbutton.addEventListener('mouseover', function () {  
    img.width = '500'
    img.height = '500'
})


$("#button").click(function() {
    localStorage.removeItem('ex_12.img');
})

