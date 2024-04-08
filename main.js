//script for Math Quiz
const ids = ["tnb1", "tnb2", "tnb3", "tnb4", "tnb5"];
let score = 0;
//each answer to each questions ids
let mathQ1 = document.getElementById(ids[0]);
let mathQ2 = document.getElementById(ids[1]);
let mathQ3 = document.getElementById(ids[2]);
let mathQ4 = document.getElementById(ids[3]);
let mathQ5 = document.getElementById(ids[4]);

let subBtn = document.getElementById('mathbtn');

let pupilName = document.getElementById('name');

subBtn.addEventListener('click', function(){
   if(mathQ1.value == "55"){
      score += 1;
   }
   if(mathQ2.value == "179"){
      score += 1;
   }

   if(mathQ3.value == "240"){
      score += 1;
   }

   if(mathQ4.value == "10"){
      score += 1;
   }

   if(mathQ5.value == "two-fifths"|| mathQ5.value == "two fifths" ){
      score += 1;
   }

   window.alert(`Ang score ni ${pupilName.value} ay ${score} puntos`); 

})




















//script for Eng Quiz


