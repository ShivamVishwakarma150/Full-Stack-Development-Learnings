
let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let textAreaCont = document.querySelector(".textarea-cont");

let allPriorityColor = document.querySelectorAll(".priority-color");

let mainCont = document.querySelector(".main-cont");
let colors = ["lightpink","lightblue","lightgreen","black"];
let modalPriorityColor = colors[colors.length-1];

let addFlag = false;

// Listener For Modal Priority Coloring
allPriorityColor.forEach((colorElem,idx)=>{
    colorElem.addEventListener("click",(e)=>{
        allPriorityColor.forEach((priorityColorElem,idx)=>{
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");
        modalPriorityColor = colorElem.classList[0];

    })
})

addBtn.addEventListener("click",(e)=>{
    // Display Modal


    //Generate Ticket


    // AddFlag, true -> Modal Display
    // AddFlag, False -> Modal none
    addFlag = !addFlag;
    // console.log(addFlag);
    if(addFlag){
        modalCont.style.display="flex";
    }else{
        modalCont.style.display="none";
    }

})

modalCont.addEventListener("keydown",(e)=>{
    let key=e.key;
    if(key === "Shift"){
        createTicket(modalPriorityColor,textAreaCont.value,shortid());
        modalCont.style.display="none";
        addFlag = false;
        textAreaCont.value="";
    }
})

function createTicket(ticketColor,ticketTask,ticketID){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id ">${ticketID}</div>
    <div class="task-area ">${ticketTask}</div>

</div>`;
    mainCont.appendChild(ticketCont);

}