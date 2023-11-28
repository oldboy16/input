var elInp = document.querySelector(".inp")
function fnForm(event){
    event.preventDefault
    var nm = elInp.value
   if (nm % 3 == 0 && nm % 7 == 0){
    console.log("uchgayam yettigayam bolinadi");
   }else if(nm % 3 == 0){
    console.log("uchga bolinadi");
   }else if (nm % 7 == 0){
    console.log("yettiga bolinadi");
   }else if (nm % 11 == 0){
    console.log("bolinmaydi");
   }
    elInp.value = ""
}