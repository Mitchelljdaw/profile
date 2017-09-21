window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
var win = new Audio('rain.mp3');
var rainVar = "nothing";
var raining = false;
var x = 0;
var j = 3550;
function topFunction() {
  if(raining === true){
    clearInterval(rainVar);
    document.getElementById("raincover").style.display = "none";
    raining = false;
    var rainstop = document.getElementById("rainMaker");
    rainstop.innerText = "make it rain";
    document.getElementById('myBtn').innerText = "TOP";
    win.pause();
    document.body.scrollTop = 1050;
    document.documentElement.scrollTop = 1050;
  }
  else{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

function makingrain(){
    raining = true;
    document.body.scrollTop = j;
    document.documentElement.scrollTop = j;
    document.getElementById('myBtn').innerText = "STOP THE RAIN";
    x ++;
    if(x%3 === 0){
      j+=1;
    }
    document.getElementById("raincover").style.display = "flex";
    document.getElementById("rainpicture").style.marginTop = x + 'px';

}

function rain(){
 if(raining === false){
   rainVar = setInterval(function(){makingrain()},.5);
   win.play();
   win.loop = true;
 }
}
