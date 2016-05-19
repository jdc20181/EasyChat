var name = prompt('What is your name?');

function chat(){
   var time = new Date();
   var hours = time.getHours();
   var min = time.getMinutes();
   var sec = time.getSeconds;
   var write = document.getElementById("area2").value;
   var read = document.getElementById("area1").value;
   var newRead = name +" ("+hours+"h:"+min+"m)"+" : " + write + "\n" + read;
   document.getElementById("area1").value = newRead;
}
