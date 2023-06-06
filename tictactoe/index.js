

const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");





let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]




];
// function happeening when app starts everytime
// lets create a function to initialise the game

function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];

    
     // ui par bhi empty karna padega
   boxes.forEach((box,index)=>{

    boxes[index].innerText="";
    boxes[index].style.pointerEvents="all"
    // one more thing is missing -initialise box with css properties again

    box.classList=`box box${index+1}`
  });
  newGameBtn.classList.remove("active");
  gameInfo.innerText=`Current Player -${currentPlayer}`;
    // console.log('initgame');
}



initGame();


function checkGameOver(){
  let answer=""


  winningPositions.forEach((positions)=>{
    // all three boxes should be non empty and  having the same value 
    if((gameGrid[positions[0]]!==""&&gameGrid[positions[1]]!==""&&gameGrid[positions[2]]!=="")&&(gameGrid[positions[0]]===gameGrid[positions[1]])&&gameGrid[positions[1]]===gameGrid[positions[2]])
    {
      if(gameGrid[positions[0]]==="X")
      {
        answer="X";
      }
      else{
        answer="0";
      }
    
      // disable pointer events

      boxes.forEach((box)=>{
        box.style.pointerEvents="none"

      })

    // now we know x/0 is a winner 

    boxes[positions[0]].classList.add("win")
    boxes[positions[1]].classList.add("win")
    boxes[positions[2]].classList.add("win")

    }

  })

  // it means we have a winner

  if(answer!=="")
  {
    gameInfo.innerText=`player-${answer} has win`
    newGameBtn.classList.add("active")
    return;
  }

  // let's check whether there is tie

  let fillCount=0;

  gameGrid.forEach((box)=>{
    if(box!=="")
    {
      fillCount++;
    }
  })

  // board is fille ,game is tied

  if(fillCount===9)
  {
    gameInfo.innerText=`game tied !`
    newGameBtn.classList.add("active")
  }

  


  
}


function swapTurn(){
  if(currentPlayer==="X")
  {
    currentPlayer="0"
  }
  else{
    currentPlayer="X"
  }
  
  // ui update
  gameInfo.innerText=`Current Player -${currentPlayer}`;

}

function handleClick(index)
{
  if(gameGrid[index]==="")
  {
    // ui pe change
    boxes[index].innerText=currentPlayer
    // inner logic mein update
    gameGrid[index]=currentPlayer
    console.log('handleclick');

    boxes[index].style.pointerEvents="none";

    // swap karo turn ko
    swapTurn();

    // check karo koi jeeta to nahi gaya


     checkGameOver();

  }
  
}


boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
        console.log('box');
    })

});

newGameBtn.addEventListener("click",initGame)
    
