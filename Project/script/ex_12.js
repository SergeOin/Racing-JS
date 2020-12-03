localStorage.setItem('ex_12.img', 'https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png');
let img = document.createElement("img")
img.src = localStorage.getItem('ex_12.img')
img.width = '500'
img.height = '250'
document.getElementById('button').appendChild(img)