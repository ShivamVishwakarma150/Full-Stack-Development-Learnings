
let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let addFlag = false;

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