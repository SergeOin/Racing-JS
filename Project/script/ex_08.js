let styles = `
    #canvas {
        pointer-events: none;
    }
`
let styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

$(document).ready(function(){
    $("canvas:nth-of-type(1n+1)").css("background-color","orange")
    $("canvas:nth-of-type(1n+5)").css("background-color","purple")
    $("canvas:nth-of-type(1n+8)").css("background-color","black")
    $("canvas:nth-of-type(1n+9)").css("background-color","green")
})