let inputEl=document.getElementById("input-el")
let para=document.getElementById("numOfLet")
let deletedBtn=document.getElementById("deleted-btn")
let number= 0

inputEl.addEventListener("keydown",function(){
     
     number= inputEl.value.length 
     para.textContent=number+1

})

deletedBtn.addEventListener("click",function(){
     para.textContent= ""
    inputEl.value = " "
    // console.log("click")

})