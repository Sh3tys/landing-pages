
const audio = document.getElementById("myAudio");
const button = document.getElementById("audioControl");
const buttonImage = document.getElementById("buttonImage");


button.addEventListener("click", () => {
 
  if (audio.paused) {
    audio.play();
    buttonImage.src = "./Image/song on.png"; 
  } 

  else {
    audio.pause();
    buttonImage.src = "./Image/song off.png";
  }
});
