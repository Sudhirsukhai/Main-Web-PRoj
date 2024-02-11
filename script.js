window.addEventListener("load",AddList)

function AddList(){
  document.getElementById("btnChem").addEventListner("click",Chem)
}

function Chem(){
  document.getElementById("MainSelectors").style.display = "none"
}