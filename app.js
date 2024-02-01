let user = 0;
let comp = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uScr = document.querySelector("#user-scr");
let cSCr = document.querySelector("#comp-scr");

function compChoice() {
    let x = Math.floor(Math.random()*3);
    return choices[x].getAttribute("id");
}

function setScore(ch, opp) {
    if(ch===opp) {
        msg.innerText = "It's a Draw. Try again!!"
        msg.style.backgroundColor = "#611C35";
    }
    else {
        if(ch==="rock") {
            if(opp==="paper") {
                msg.innerText = `You lost. ${opp} beats your ${ch}`;
                msg.style.backgroundColor = "red";
                comp++;
                cSCr.innerText = comp;
            }
            else {
                msg.innerText = `You won. Your ${ch} beats ${opp}`;
                msg.style.backgroundColor = "green";
                user++;
                uScr.innerText = user;
            }
        }
        else if(ch==="paper") {
            if(opp==="scissors") {
                msg.innerText = `You lost. ${opp} beats your ${ch}`;
                msg.style.backgroundColor = "red";
                comp++;
                cSCr.innerText = comp;
            }
            else {
                msg.innerText = `You won. Your ${ch} beats ${opp}`;
                msg.style.backgroundColor = "green";
                user++;
                uScr.innerText = user;
            }
        }
        else {
            if(opp==="rock") {
                msg.innerText = `You lost. ${opp} beats your ${ch}`;
                msg.style.backgroundColor = "red";
                comp++;
                cSCr.innerText = comp;
            }
            else {
                msg.innerText = `You won. Your ${ch} beats ${opp}`;
                msg.style.backgroundColor = "green";
                user++;
                uScr.innerText = user;
            }
        }
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let ch = choice.getAttribute("id");
        let opp = compChoice();
        setScore(ch, opp);
    })
});