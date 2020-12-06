$('#button').click(function() {
    let allchar="0123456789ABCDEF";
    let  randcol= "";
    for(var i=0; i<6; i++){
         randcol += allchar[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor= "#"+randcol;
    document.getElementById("button").style.backgroundColor= "#"+randcol
}); 
