
 
let homeScore = document.getElementById("boardHome")
let guestScore = document.getElementById("boardGuest")
let score = 0
let score2 = 0

function add1Home(){
   score += 1
    
    homeScore.textContent = score
    
        }

    



function add1Guest(){
    score2 += 1
     
     guestScore.textContent = score2
 
 }
 function add2Home(){
    score += 2
     
     homeScore.textContent = score
 
 }
 
 function add2Guest(){
     score2 += 2
      
      guestScore.textContent = score2
  
  }
  function add3Home(){
    score += 3
     
     homeScore.textContent = score
 
 }
 
 function add3Guest(){
     score2 += 3
      
      guestScore.textContent = score2
  
  }


function clearBoard(){
    score = 0
    score2 = 0
   homeScore.textContent =  score
   guestScore.textContent =  score2
}
