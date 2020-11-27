$(document).ready(function(){
    let str = '';
    let total = 0;
    document.addEventListener("keypress", function(e) {
        str += e.key
        total++
        let limit = str.substring(str.length -42, str.length);
        if(total <= 42){
            $('#button').text(str)
        }
        if(total > 42){
            $('#button').text(limit)
        }
    }); 
});