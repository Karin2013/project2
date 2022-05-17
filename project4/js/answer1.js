function myFunction() {
    idArray = new Array()
    idArray [1] = "DON'T OVERDO IT"
    idArray [2] = "STRONG COMMITMENT WILL ACHIEVE GOOD RESULTS"
    idArray [3] = "ENJOY THE EXPERIENCE"
    idArray [4] = "YES BUT DON'T FORCE IT"
    idArray [5] = "WATCH AND SEE WHAT HAPPENS"
    idArray [6] = "SEEK OUT MORE OPTIONS"
    idArray [7] = "YOU'LL NEED MORE INFORMATION"
    idArray [8] = "IT CANNOT FALL"
    idArray [9] = "EXPLORE IT WITH PLAYFUL CURIOSITY"
    idArray [10] = "DON'T BET ON IT"
    idArray [11] = "NOT IF YOU'RE ALONE"
    idArray [12] = "BET ON IT"
    idArray [13] = "YOU MUST ACT NOW"
    idArray [14] = "YOU ARE TOO CLOSE TO SEE"
    idArray [15] = "KEEP AN OPEN MIND"

  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*10);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1]; 
    document.getElementById('buttonbox').style.display = "none"  
    document.getElementById('questionbox1').style.display = "none"  
    document.getElementById('result1').style.visibility = "visible"    
    document.getElementById('button1').style.visibility = "visible"  
    document.getElementById('drawing1').style.visibility = "visible" 
}

