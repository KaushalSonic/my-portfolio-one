// For Typing Effect in Hero Section

var typed = new Typed('#textline', {
    strings: ["Front-End Developer", "Web Developer", "GCP Enthusiast", "Graphic Designer", "CS Grad"],
    typeSpeed: 70,
    backSpeed: 70,
    bacDelay: 1500,
    loop: true
  });

// For Toggling Light Mode
function colorMode(){
  let mode = document.body;
  mode.classList.toggle("light-mode");
}

// For changing Mode Icon (Not Working)
function modeIcon(x){
  x.classList.toggle("bxs-moon");
}

// For expanding more details in about section (Always use ID instead of class for display block)
function details(){
  const details = document.getElementById("more-details");
  details.style.display = "block";
}

// For expanding menu in mobile view
function menuSidebar(){
  const menu = document.getElementById("sidebar");
  if(menu.style.display == "block"){
    menu.style.display = "none";
  }
  else{
    menu.style.display = "block";
  }
}

// For changing menu to cross icon on tap
function menuIcon(x){
  x.classList.toggle("bx-x");
}