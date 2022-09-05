

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

// TOGGLE ABH 3
const ABH_3 = document.getElementById('ABH_3');

ABH_3.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_3.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_3.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_3.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});

// TOGGLE ABH 4
const ABH_4 = document.getElementById('ABH_4');

ABH_4.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_4.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_4.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_4.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});


// TOGGLE ABH 5
const ABH_5 = document.getElementById('ABH_5');

ABH_5.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_5.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_5.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_5.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});

// TOGGLE ABH 6
const ABH_6 = document.getElementById('ABH_6');

ABH_6.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_6.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_6.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_6.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});

// TOGGLE ABH 7
const ABH_7 = document.getElementById('ABH_7');

ABH_7.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_7.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_7.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_7.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});

// TOGGLE ABH 8
const ABH_8 = document.getElementById('ABH_8');

ABH_8.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_8.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_8.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_8.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});

// TOGGLE ABH 9
const ABH_9 = document.getElementById('ABH_9');

ABH_9.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_9.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_9.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_9.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});

// TOGGLE ABH 10
const ABH_10 = document.getElementById('ABH_10');

ABH_10.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_10.style.backgroundColor;

  if (backgroundColor === 'white') {
    ABH_10.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_10.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});

// TOGGLE ABH 11
const ABH_11 = document.getElementById('ABH_11');

ABH_11.addEventListener('click', function onClick(event) {
  const backgroundColor = ABH_11.style.backgroundColor;
// Retrieve & Change picked argument
// Questions = document.getElementById("Questions").innerHTML = localStorage.getItem("Questionnaire");

  if (backgroundColor === 'white') {
    ABH_11.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    ABH_11.style.backgroundColor = 'white';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});


  // When next button is clicked, load cliecked buttons into array  salient_security
var salient_security = [];                // Create the array


const addSecurity = (ev) =>{
  // ev.preventDefault();  // stop the form-element from submitting
    
  for (let index = 1; index < 11; index++) {
    var current_ABH = document.getElementById(`ABH_${index}`)
    // if (document.getElementById(`compare`).style.backgroundColor == "#fa8072") {
    if (document.getElementById(`ABH_${index}`).style.backgroundColor == "#fa8072") {
      salient_security.push(`ABH_${index}`);
    } 
    console.log(current_ABH)
  }
}



localStorage.setItem('Security_Values', JSON.stringify(salient_security) );


document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('finish_salient').addEventListener('click', addSecurity);
});





