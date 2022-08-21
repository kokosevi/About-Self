
// TOGGLE ABH 1
const ABH_1 = document.getElementById('ABH_1');

ABH_1.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_1.style.backgroundColor;
  

  if (backgroundColor === 'white') {
    ABH_1.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_1.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});


// TOGGLE ABH 2
const ABH_2 = document.getElementById('ABH_2');

ABH_2.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_2.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_2.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_2.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});











  // When next button is clicked, load cliecked buttons into array  salient_security
  let salient_security = [];                // Create the array


  const addSecurity = (ev) =>{
    // ev.preventDefault();  // stop the form-element from submitting
      
    for (let index = 1; index < 12; index++) {
        
    //   var current_ABH = document.getElementById(`ABH_${index}`);
    //   var salmon_fix = salmon;
    //   var salmon_dynamic = current_ABH.style.backgroundColor;
    //   document.write(current_ABH.style.backgroundColor);
    //   if (salmon_dynamic == salmon_fix) {
        if (document.getElementById(`ABH_${index}`) == "salmon") {
        
        document.write("finally");  
        
        // salient_security.push(`ABH_${index}`);
      } 
    }
    
  }
  
  
  localStorage.setItem('Security_Values', JSON.stringify(salient_security) );
  
  
  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('test_print').addEventListener('click', addSecurity);
  });


//   START CLASS QUESTION
  class Question {
    constructor(){
        this.picked = 0;
        this.relevance = 0;
        this.posneg = 1;

    }
    setpicked(){
        if (this.picked == 0) {
            this.picked = 1;
        } else {
            this.picked = 0;
        }
    }
    setrelevance(){

    }
    setposneg(){

    }
    initiate_poll(){
        const question_array = new Array(12);

    }

}

