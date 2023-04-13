function play(){    
  var audio = new Audio('./../phaudio.mp3');
  audio.play();
}

function move() {
    var i = 0;
    var x = document.getElementById("Loading");
    var y = document.getElementById("Home");
    var z = document.getElementById("Start");
    //document.body.style.backgroundImage = "url('https://i.gifer.com/T21s.gif')"; 
    document.body.style.backgroundImage = "url('./../images/black.jpg')";  
    if (i == 0) {
      z.style.display = "none";
      x.style.display = "block";
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 20;
      var id = setInterval(frame, 30);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          x.style.display = "none";
          y.style.display = "block";
          document.body.style.backgroundImage = "url('./../images/black .jpg')";
          //document.body.style.backgroundImage="url(https://thumbs.gfycat.com/BeneficialNastyGermanspaniel-max-1mb.gif)";
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }

  function corp(){    
    var x = document.getElementById("CorpHome");
    var y = document.getElementById("Start");
    $("#CorpHome").fadeIn()
    y.style.display = "none";
    x.style.display = "block";
  }
  