function myFunction() {
    idArray = new Array()
    idArray [1] = "RELATED ISSUES MAY SURFACE"
    idArray [2] = "DO IT EARLY"
    idArray [3] = "WAIT"
    idArray [4] = "YOU'LL HAVE TO MAKE IT UP AS YOU GO"
    idArray [5] = "NO MATTER WHAT"
    idArray [6] = "TAKE MORE TIME TO DECIDE"
    idArray [7] = "MOVE ON"

  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*7);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1]; 
    document.getElementById('buttonbox').style.display = "none"  
    document.getElementById('questionbox1').style.display = "none"  
    document.getElementById('result1').style.visibility = "visible"    
    document.getElementById('button1').style.visibility = "visible"  
}



