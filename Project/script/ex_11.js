$(document).ready(function () {
  checkCookie()
})
$("#okcookie").click(function() {
 document.cookie = "acceptsCookie=true ; expires=24"  
})
function checkCookie() {
  let pos = document.cookie.indexOf( "acceptsCookie=true" );
  if(pos >= 0){
    $("#cookietext").empty()
    //création 
    let newDiv = document.createElement("div")
    newDiv.id = "cookiediv"
    document.getElementById("footer").appendChild(newDiv)
    let newButton = document.createElement("button")
    newButton.id = "buttonInDiv"
    newButton.textContent = "Delete Cookie"
    newDiv.appendChild(newButton)
    $('#buttonInDiv').click(function() {
      document.cookie = "acceptsCookie=true ; expires = Thu, 01 Jan 1970 00:00:01 GMT"
    })
  } else {
    //nothing
  }
}