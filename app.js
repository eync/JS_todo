let checkboxy = document.querySelectorAll('.checkboxing');
let checkboxy2 = document.querySelectorAll('.checkerbox');
let toggleboxy = document.querySelector('input .checkerbox');
//!!!! Hyödynnetään myöhemmin
//let texti = value1;


//tätä käytetään checklistaukseen
//pitää korjata tähtäys checkerboxiin koskevaks
//https://stackoverflow.com/a/32086074

//tarkistetaan onko checkattu ja lisätään tarpeellinen classi tilalle
function checkifchecked() {
  var checkBox = document.getElementById("myCheck");
  Array.from(checkboxy).forEach((toggleboxy) => { 
    toggleboxy.addEventListener('click', () => {
      // if (checkBox.checked == true){
      let theclass = ("marked");
      let ifitcontains = toggleboxy.classList.contains(theclass);
      if (ifitcontains == false && checkBox.checked == true) {
      toggleboxy.classList.toggle(theclass, true); 
      console.log(ifitcontains);
      return;
      } else if (ifitcontains == true && checkBox.checked == false) {
      toggleboxy.classList.toggle(theclass, false);
      console.log(ifitcontains);
      return;
        } return;
  // } 
  // else if (checkBox.checked == false) { }
});
  }); 

}; 
//vaihda pois ja päälle tietty clässi yksinkertaisesti selitetty
