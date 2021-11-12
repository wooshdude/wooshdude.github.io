function waitBeforeNavigate(ev) {
  ev.preventDefault();                    // prevent default anchor behavior
  const goTo = this.getAttribute("href"); // store anchor href

  // do something while timeOut ticks ... 
    transition();

  setTimeout(function(){
    window.location = goTo;
  }, 2000);                               // time in ms
}; 

document.querySelectorAll("a")
  .forEach(EL => EL.addEventListener("click", waitBeforeNavigate));

function transition() {
    document.getElementById('red').style.animation = "rightTransition 1s ease forwards";
    document.getElementById('blue').style.animation = "rightTransition 1.5s ease forwards";
    document.getElementById('yellow').style.animation = "rightTransition 2s ease forwards";
}
