$(document).ready(function(){
    $('#plus').click(function() {
        let selectAll = document.getElementById('elem');
        let style = window.getComputedStyle(selectAll, null).getPropertyValue('font-size');
        let fontSize = parseFloat(style);
        selectAll.style.fontSize = (fontSize + 5) + 'px';
    }); 
    $('#moins').click(function() {
        let selectAll = document.getElementById('elem');
        let style = window.getComputedStyle(selectAll, null).getPropertyValue('font-size');
        let fontSize = parseFloat(style);
        selectAll.style.fontSize = (fontSize - 5) + 'px';
    }); 
});
function colors(){
    let SelectSelect = document.getElementById("colors");
    
    if(SelectSelect.selectedIndex == "1"){
        document.body.style.backgroundColor = "#bdc3c7";
    }
    if(SelectSelect.selectedIndex == "2"){
        document.body.style.backgroundColor = "#1abc9c";
    }
    if(SelectSelect.selectedIndex == "3"){
        document.body.style.backgroundColor = "#f1c40f";
    }
    if(SelectSelect.selectedIndex == "4"){
        document.body.style.backgroundColor = "#d35400";
    }
    if(SelectSelect.selectedIndex == "5"){
        document.body.style.backgroundColor = "#e74c3c";
    }
    if(SelectSelect.selectedIndex == "6"){
        document.body.style.backgroundColor = "#40d47e";
    }
    if(SelectSelect.selectedIndex == "7"){
        document.body.style.backgroundColor = "#3498db";
    }
};