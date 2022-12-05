
let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let textAreaCont = document.querySelector(".textarea-cont");
let addFlag = false;
let mainCont = document.querySelector(".main-cont");

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
        createTicket();
        modalCont.style.display="none";
        addFlag = false;
        textAreaCont.value="";
    }
})

function createTicket(){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-cont">
    <div class="ticket-color"></div>
    <div class="ticket-id">Sample id</div>
    <div class="task-area">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem velit eaque minima eum fugit voluptatibus.</div>

</div>`;
    mainCont.appendChild(ticketCont);

}