$(document).ready(function(){
    $('#button').click(function() {
        let name = prompt("What is your name ?")
        if(name != null){
          let validated = confirm("Are your sure "+ name +" is your name ?")
          if(validated != null){
            alert("Hello " + name + " !")
            $('#button').text("Hello " + name + " !");
            } else {
            alert("Vous avez cliqué sur Annuler")
            }
        } else {
            alert("Vous avez cliqué sur Annuler")
        }
    }); 
});