$(document).ready(function(){

})
let saisie = $('#saisie').html(function(){
    return $(this)
    .html()
    .replace(/\[b\]/g,'<b>')
    .replace(/\[\/b\]/g,'</b>')
    .replace(/\[u\]/g,'<u>')
    .replace(/\[\/u\]/g,'</u>')
    .replace(/\[s\]/g,'<s>')
    .replace(/\[\/s\]/g,'</s>')
    .replace(/\[color\]/g,'[color=')
    .replace(/\[\/color\]/g,'/color')
    .replace(/\[url\]/g,'<a href="')
    .replace(/\[\/url\]/g,'"></a>')
})
document.getElementById("#button").innerHTML +=   