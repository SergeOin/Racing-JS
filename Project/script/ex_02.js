$(document).ready(function(){
    let count = 0;
    $('#button').text(count);
    $('#button').click(function() {
        count+=1
        $('#button').text(count);
    }); 
});