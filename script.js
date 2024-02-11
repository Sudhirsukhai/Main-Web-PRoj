window.addEventListener("load",AddList)
var ans1;
var ans2;
var ans3;
var ans4;
var ans5;
var ans6;
var ans7;
var ans8;
var ans9;
var ans10;
var arrayAns;
var CurrIndex;
var Correct;
var G1Key = ["d","a","c","i","j","f","b","h","g","e"];

function AddList(){
  document.getElementById("Game2").style.display = "none"
  document.getElementById("Game1").style.display = "none"
  document.getElementById("Results").style.display = "none"
  document.getElementById("btnChem").addEventListener("click",Chem)
  document.getElementById("btnGame1Submit").addEventListener("click",Submit1)
}

function Chem(){
  document.getElementById("MainSelectors").style.display = "none"
  document.getElementById("H1").style.display = "none"
  document.getElementById("Game1").style.display = "block"
}

function Submit1(){
  document.getElementById("Game1").style.display = "none"
  ans1 = document.getElementById("Chem1").value
  ans2 = document.getElementById("Chem2").value
  ans3 = document.getElementById("Chem3").value
  ans4 = document.getElementById("Chem4").value
  ans5 = document.getElementById("Chem5").value
  ans6 = document.getElementById("Chem6").value
  ans7 = document.getElementById("Chem7").value
  ans8 = document.getElementById("Chem8").value
  ans9 = document.getElementById("Chem9").value
  ans10 = document.getElementById("Chem10").value
  arrayAns = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10]
  CurrIndex = 0
  Correct = 0
  while (CurrIndex != 10){
    if (arrayAns.at(CurrIndex) == G1Key.at(CurrIndex)){
      CurrIndex = CurrIndex + 1
      Correct = Correct+1
    }else{
      CurrIndex += 1
    }
  }
  
  document.getElementById("Results").style.display = "block"
  document.getElementById("lblscore1").innerText = Correct
  document.getElementById("lblscore2").innerText = "Correct"
}