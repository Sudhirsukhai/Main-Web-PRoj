window.addEventListener("load",AddList)
document.getElementById("MainSelectors").style.display = "none"
document.getElementById("H1").style.display = "none"
function AddList(){
  document.getElementById("btnChem").addEventListener("click",Chem)
}

function Chem(){
  document.getElementById("MainSelectors").style.display = "none"
  document.getElementById("H1").style.display = "none"
}