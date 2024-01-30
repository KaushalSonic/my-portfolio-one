// For Typing Effect in Hero Section

var typed = new Typed('#textline', {
    strings: ["Front-End Developer", "GCP Enthusiast", "Graphic Designer", "CS Grad"],
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

// For expanding more details in about section (Always use ID instead of class for display block)

function details(){
  const details = document.getElementById("more-details");
  details.style.display = "block";
}
