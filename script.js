let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newMsg = document.querySelector("#msg");
let msg = document.querySelector(".msg-container");
let turno = true;
let Count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    enabledBoxes();
    Count = 0;
    msg.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turno){
            box.innerText = "O";  
            turno = false;      
        }else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true ;
        Count++;
        let isWinner = checkWinner();
        if(Count == 9 && !isWinner){
            draw();
        }
    });
}); 
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const draw = () => {
    
        newMsg.innerText =  'Match has been Draw';
        msg.classList.remove("hide");
        disabledBoxes();
    
}
const showWinner = (Winner) => {
        newMsg.innerText = `Congratulaions, Winner is ${Winner}`;
        msg.classList.remove("hide");
        disabledBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner", pos1Val);
            showWinner(pos1Val);
            
        }

       }
    }
};

resetBtn.addEventListener("click", resetGame);

