window.addEventListener("load",AddList)
document.getElementById("MainSelectors").style.display = "none"
document.getElementById("H1").style.display = "none"
function AddList(){
  document.getElementById("btnChem").addEventListener("click",Chem)
  document.getElementById("btnGame1Submit").addEventListener("click",Submit1)
}

function Chem(){
  document.getElementById("MainSelectors").style.display = "none"
  document.getElementById("H1").style.display = "none"
}

function Submit1(){
  ans1 = document.getElementById("MainSelectors").value
}