function myFunction() {
    idArray = new Array()
    idArray [1] = "RELATED ISSUES MAY SURFACE"
    idArray [2] = "DO IT EARLY"
    idArray [3] = "WAIT"
    idArray [4] = "YOU'LL HAVE TO MAKE IT UP AS YOU GO"
    idArray [5] = "NO MATTER WHAT"
    idArray [6] = "TAKE MORE TIME TO DECIDE"
    idArray [7] = "A YEAR FROM NOW IT WON'T MATTER"
    idArray [8] = "TAKE A CHANCE"
    idArray [9] = "UNQUESTIONABLY"
    idArray [10] = "DON'T GET CAUGHT UP IN YOUR EMOTIONS"
    idArray [11] = "THAT WOULD BE A WASTE OF MONEY"
    idArray [12] = "NOW YOU CAN"
    idArray [13] = "YOU WILL NOT BE DISAPPOINTED"
    idArray [14] = "FOLLOW THE ADVICE OF EXPERTS"
    idArray [15] = "UNFAVORABLE AT THIS TIME"

  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*10);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1]; 
    document.getElementById('buttonbox').style.display = "none"  
    document.getElementById('questionbox1').style.display = "none"  
    document.getElementById('result1').style.visibility = "visible"    
    document.getElementById('button1').style.visibility = "visible"  
    document.getElementById('drawing1').style.visibility = "visible" 
}
