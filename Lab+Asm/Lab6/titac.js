let turn = true;
let ClickedCount = 0;

function play(btn){
    btn.innerText = turn ? "X" : "O";
    btn.classList.add(turn ? "xbtn" : "obtn"); 
    btn.setAttribute("disabled", "disabled");

    turn = !turn;
    ClickedCount++;

    if(ClickedCount >= 8){
        alert("End Game!");
    }
}
function reset(){{
    if(!confirm("Are you sure?"))
       return;
}
let btns = document.getElementsByClassName("btn");

for(const elemnet of btns){
    elemnet.innerText = "";
    elemnet.classList.remove("xbtn");
    elemnet.classList.remove("obtn");
    elemnet.removeAttribute("disabled");
}
turn = true;
ClickedCount = 0;
}