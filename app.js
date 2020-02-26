let checkboxy = document.querySelectorAll('.checkboxing');
//!!!! Hyödynnetään myöhemmin
//let texti = value1;


//tätä käytetään checklistaukseen
  Array.from(checkboxy).forEach((toggleboxy) => { 
    toggleboxy.addEventListener('click', (e) => {
      e.preventDefault();
      if (toggleboxy.classList.contains("test") == false) {
      toggleboxy.classList.toggle("test", true); 
      console.log("Jos ei ole testiä niin lisätään se")
      } else if (toggleboxy.classList.contains("test") == true) {
      toggleboxy.classList.toggle("test", false);
      console.log("Jos totta ottaa test classin pois")
        } return ;
      });
  });  
//vaihda pois ja päälle tietty clässi yksinkertaisesti selitetty
