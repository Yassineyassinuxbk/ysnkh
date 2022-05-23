name = document.querySelector("input").value
cont2=document.querySelector(".container2")
cont2.style.display="none"
cont=document.querySelector(".container1")
btn=document.querySelector("#btn")
btn.onclick=function(){
  cont.style.display="none"
  cont2.style.display="block"
  document.querySelector("#title").innerHTML+=name
  
  
}