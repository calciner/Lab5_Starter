// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const canvas = document.getElementById('expose')
  const jsConfetti = new JSConfetti(canvas);
  var select_horn = document.getElementById("horn-select");
  var img = document.querySelector("img");
  var au = document.querySelector("#expose .hidden");
  console.log(au)
  select_horn.addEventListener("change",function(){
    var optionHorn = select_horn.value;
    switch(optionHorn){
      case "air-horn" :
        img.setAttribute("src","assets/images/air-horn.svg");
        au.src="assets/audio/air-horn.mp3";
        break;
      case "car-horn" :
        img.setAttribute("src","assets/images/car-horn.svg");
        au.setAttribute("src","assets/audio/car-horn.mp3");
        break;
      case "party-horn" :
        img.setAttribute("src","assets/images/party-horn.svg");
        au.setAttribute("src","assets/audio/party-horn.mp3");
        
        break;
      default:
    }
  });
  var button_p = document.querySelector("#expose button");
  button_p.addEventListener("click",function(){
    if(au.getAttribute("src")){
      au.play();
      if(select_horn.value == "party-horn"){
        jsConfetti.addConfetti();
      }
    }
  })
  var imgv = document.querySelector("#volume-controls img")
  var vcontrol = document.getElementById("volume");
  vcontrol.addEventListener("change",function(){
    if(vcontrol.value == 0){
      au.volume = vcontrol.value/100;
      imgv.src = "assets/icons/volume-level-0.svg"
    }else if(vcontrol.value >0 && vcontrol.value < 33 ){
      au.volume = vcontrol.value/100;
      imgv.src = "assets/icons/volume-level-1.svg"
    }else if(vcontrol.value >= 33 && vcontrol.value < 67 ){
      au.volume = vcontrol.value/100;
      imgv.src = "assets/icons/volume-level-2.svg"
    }else if(vcontrol.value >67 && vcontrol.value <= 100 ){
      au.volume = vcontrol.value/100;
      imgv.src = "assets/icons/volume-level-3.svg"
    }
  })
}