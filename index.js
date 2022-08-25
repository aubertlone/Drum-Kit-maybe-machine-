var numberOfButtons = 
    document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
  .addEventListener("click", function() {
  
    var buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
  });
}
  
document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});
  
function sound(key) {
  switch (key) {
     case "1":
      var sound1 = new Audio("music/1.mp3");
      sound1.play();
      break;

      case "2":
      var sound2 = new Audio("music/2.mp3");
      sound2.play();
      break;

      case "3":
      var sound3 = new Audio("music/3.mp3");
      sound3.play();
      break;

      case "4":
      var sound4 = new Audio("music/4.mp3");
      sound4.play();
      break;



    case "q":
      var sound5 = new Audio("music/q.mp3");
      sound5.play();
      break;
  
    case "w":
      var sound6 = new Audio("music/w.mp3");
      sound6.play();
      break;
  
    case "e":
      var sound7 = new Audio('music/e.mp3');
      sound7.play();
      break;
  
    case "r":
      var sound8 = new Audio('music/r.mp3');
      sound8.play();
      break;
  
    case "a":
      var sound9 = new Audio('music/a.wav');
      sound9.play();
      break;
  
    case "s":
      var sound10 = new Audio('music/s.wav');
      sound10.play();
      break;
  
    case "d":
      var sound11 = new Audio('music/d.wav');
      sound11.play();
      break;

      case "f":
        var sound12 = new Audio('music/f.wav');
        sound12.play();
        break;

        case "z":
          var sound13 = new Audio('music/z.wav');
          sound13.play();
          break;


          case "x":
        var sound14 = new Audio('music/x.wav');
        sound14.play();
        break;

        case "c":
        var sound15 = new Audio('music/c.wav');
        sound15.play();
        break;

        case "v":
        var sound16 = new Audio('music/v.wav');
        sound16.play();
        break;

  
    default: console.log(key);
  }
}
  
function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");
  
  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 500);
}