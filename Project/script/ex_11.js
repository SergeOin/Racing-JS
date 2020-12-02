function setCookie(acceptsCookies, value, exdays) {
    let date = new Date()
    date.setTime(date.getTime() + (exdays *24*60*60*1000))
    let expire = "Cookie expire le = "+ date.toUTCString()
    document.cookie = acceptsCookies + "=" + value + ";" + expire 
}

function getCookie(acceptsCookies) {
    let name = acceptsCookies + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    let user=getCookie("username");
    if (user != "") {
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
        document.cookie = "acceptsCookies= ; expires = Thu, 01 Jan 1970 00:00:01 GMT"
        document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:01 GMT"
    })
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }