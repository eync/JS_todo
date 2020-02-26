let checkboxy = document.querySelectorAll('.checkboxing');
let toggleboxy = document.querySelector('input .checkerbox');
//!!!! Hyödynnetään myöhemmin
//let texti = value1;


//tätä käytetään checklistaukseen
//pitää korjata tähtäys checkerboxiin koskevaks
function checkifchecked() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
  Array.from(checkboxy).forEach((toggleboxy) => { 
    toggleboxy.addEventListener('click', () => {
      
      let theclass = ("marked");
      let ifitcontains = toggleboxy.classList.contains(theclass);
      if (ifitcontains == false) {
      toggleboxy.classList.toggle(theclass, true); 
      console.log("Jos ei ole testiä niin lisätään se")
      } else if (ifitcontains == true) {
      toggleboxy.classList.toggle(theclass, false);
      console.log("Jos totta ottaa test classin pois")
        } return ;
      }) ; return;
  }); 
} else { console.log("mitä tapahtuu"); return;

 };
}; 
//vaihda pois ja päälle tietty clässi yksinkertaisesti selitetty
