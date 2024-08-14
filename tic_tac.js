 const pattern = [[0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]] ; 

let boxes = document.querySelectorAll(".box");
let reset =document.querySelector("#rst");
let container = document.querySelector(".win-msg")
let msg = document.querySelector("#msg")
let newBttn =document.querySelector("#newGame")
let turnO =true;


boxes.forEach( (box) =>{
box.addEventListener("click", ()=>{
    if(turnO){
        turnO = false;
        box.innerText ="O"
        box.disabled = true;
        console.log("o");
    }
    else{
         turnO = true;
        box.innerText ="X"
        box.disabled = true;
    }

    winner();
    
    
});
});


const disableButtons = () =>{
for(let box of boxes){
  box.disabled = true;
}
}

const enableButtons = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
  }

  const resetGame = () =>{
    turnO = true;
    enableButtons();
    container.classList.add("hide");

  }



const showWinner = ((winner) =>{
// console.log(`Congratulations , winner is ${winner}`);
msg.innerText = `Congratulations , winner is ${winner}`;
container.classList.remove("hide");
disableButtons();

});



const winner = ()=>{
  for( let pat of pattern ){
    let pos1= boxes[pat[0]].innerText;
    let pos2= boxes[pat[1]].innerText;
    let pos3= boxes[pat[2]].innerText;

  

  if(pos1 != "" && pos2 != "" && pos3!= "" ){
    if(pos1 === pos2 && pos2 === pos3){
        // console.log("winner",pos1)
        showWinner(pos1);
       
    }
  }
}

}

reset.addEventListener("click" ,resetGame);
newBttn.addEventListener("click",resetGame);





