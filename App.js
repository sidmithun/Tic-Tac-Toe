let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let newBtn=document.querySelector("#newBtn");
let reBtn=document.querySelector("#reBtn");
let msg =document.querySelector("#msg");


let turnO=true;
const winPattern=[

                [0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8],
             ];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="green";

            
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });

});
const disableBoxes=()=>{
    for(let box of  boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of  boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = ()=>{
    for(let i of winPattern)
    {
      console.log(i[0],i[1],i[2])  ;
        console.log(boxes[i[0]].innerText,boxes[i[1]].innerText,boxes[i[2]].innerText);
        
       let vvalue1 = boxes[i[0]].innerText;
       let vvalue2 = boxes[i[1]].innerText;
        let vvalue3 =boxes[i[2]].innerText;

        if(vvalue1 != "" && vvalue2 !="" && vvalue3 !="")
        {
            if(vvalue1 === vvalue2 && vvalue2 === vvalue3)
            {
                showWinner(vvalue1);
            }
        }
    }
    

};

newBtn.addEventListener("click",resetGame);
reBtn.addEventListener("click",resetGame);
