window.onload = function(){
  var clickNumber = 0
  var deg = 0
  var button = document.getElementById('click');
  var main = document.getElementById('main');
  var showHidden = document.getElementById('webPreview');
  var skillsHidden = document.getElementById('skillsDiv');
  var mainHidden = document.getElementById('main-hidden');
  var foot = document.getElementById('footer');
  $('#main-hidden').height($(document).height());
  button.addEventListener('click', e => {

    if(clickNumber == 0){
      deg = 10;
      clickNumber = 1;
      button.innerHTML = "come on show some heart click again"
    }
    else if(clickNumber == 1){
      deg +=30;
      clickNumber = 2;
      button.innerHTML = "quite keep clicking"
    }
    else if(clickNumber == 2){
      deg +=50;
      clickNumber = 3;
      button.innerHTML = "wow you're good just one more time";
    }
    else if(clickNumber == 3){
      deg +=270;
      clickNumber = 4;
      button.style.opacity = 0;
      button.style.height = 0;
      button.style.width = 0;
      mainHidden.style.opacity = 1;
      mainHidden.style.display = "block"
      showHidden.style.display = "block"
      skillsHidden.style.display = "block"
      foot.style.display = "flex"

    }
    button.style.webkitTransform = 'rotate('+deg+'deg)';
    button.style.mozTransform    = 'rotate('+deg+'deg)';
    button.style.msTransform     = 'rotate('+deg+'deg)';
    button.style.oTransform      = 'rotate('+deg+'deg)';
    button.style.transform       = 'rotate('+deg+'deg)';
  });
$('a[href*="#"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
        });
      }
    }
  });
}


function ruinCSS() {
  var button = document.getElementById("fixed");
  var bAndW = document.getElementById("black");
  var normal = document.getElementById("ruined");
  if(button){
    var oldlink = document.getElementsByTagName("link").item(4);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "ruin");
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    button.innerText = "Crap fix the page please";
    button.setAttribute('id', "black");
  }
  else if(bAndW){
    var oldlink = document.getElementsByTagName("link").item(4);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "black.css");
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    bAndW.innerText = "No NO NO this is not what we want. Click again";
    bAndW.setAttribute('id', "ruined");
  }
  else if(normal){
    var oldlink = document.getElementsByTagName("link").item(4);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "profile.css");
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    normal.innerText = "Ahhh that's better";
    bAndW.setAttribute('id', "fixed");
  }
}
