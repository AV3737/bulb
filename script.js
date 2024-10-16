var bulb= document.querySelector("#bulb")
var on= document.querySelector("#on")
var off = 0

on.addEventListener("click",function(){
   
if (off==0){
  on.innerHTML="ON"
  bulb.style.backgroundColor="yellow"
  off=1
}
else{
   on.innerHTML="OFF"
  bulb.style.backgroundColor="white"
  on.style.backgroundColor="white"
  off=0
}


})
