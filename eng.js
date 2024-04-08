//script for English Quiz

const engIds = ['ans1', 'ans2', 'ans3', 'ans4', 'ans5'];
let engScore = 0;

let engQ1 = document.getElementById(engIds[0]);
let engQ2 = document.getElementById(engIds[1]);
let engQ3 = document.getElementById(engIds[2]);
let engQ4 = document.getElementById(engIds[3]);
let engQ5 = document.getElementById(engIds[4]);

let pupName = document.getElementById('name');

let engbtn = document.getElementById('engbtn');

engbtn.addEventListener('click', function(){

    if(engQ1.value == "Karen"){
        engScore += 1;
     }
     if(engQ2.value == "Who"){
        engScore += 1;
     }
  
     if(engQ3.value == "Not happy"){
        engScore += 1;
     }
  
     if(engQ4.value == "Shove"){
        engScore += 1;
     }
  
     if(engQ5.value == "Shine"){
        engScore += 1;
     }


    window.alert(`Your score ${pupName.value} is ${engScore} points`);

})