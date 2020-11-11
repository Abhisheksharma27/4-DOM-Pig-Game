/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;



function init(){
scores = [0,0] //scores of both the players from the beginning of the game

roundScore = 0; //score of the round from beginning

activePlayer = 0; // active player

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

//adding the names back to norms because we have winner class replacing the texts.

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

//adding the remove class to remove both the winners and active classes.
document.querySelector('.player-0-panel').classList.remove('winner');

document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');

document.querySelector('.player-1-panel').classList.remove('active');

//adding active class again in the end.
document.querySelector('.player-0-panel').classList.toggle('active');


}

   //new game button function

   document.querySelector('.btn-new').addEventListener('click', init);

// dice = Math.floor(Math.random()*7);
// console.log(dice);

// changing the score of player 1
// document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// function btn(){
//     //do something
// }

/**
* Setting up the scores to zero when the game starts by using element by ID fucntion..
*/

//using css to hide the dice when the game loads initially.

document.querySelector('.dice').style.display = 'none';


/**
* Using the callback function first
* then also the utility of an anonymous function in the event listener 
*/
document.querySelector('.btn-roll').addEventListener('click', function(){
//select the random number using dice

var dice = Math.floor(Math.random()*6)+1;

// display the result

var diceDom = document.querySelector('.dice')

diceDom.style.display = 'block';
console.log(dice);

diceDom.src = 'dice-' + dice + '.png';

//update the round score if rolled number was not 1

if(dice !== 1){
    //add score

    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}
else{
   
 nextPlayer();

}


});//end of the button roll use here.

//hold button


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    //roundScore to total Score
    scores[activePlayer]+= roundScore;
    
    //update Ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if the player has won the game

    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'
        document.querySelector('.dice').style.display = 'none'

        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }else{
    
    nextPlayer();
    }
});//end of the button hold use here.


function nextPlayer(){

    //next player
   
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     
   
    roundScore = 0;
   
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
   
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   
   // document.querySelector('.dice').style.display = 'none';
   
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
   
   };//next player function ends here.

