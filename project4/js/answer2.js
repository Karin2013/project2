function myFunction() {
    idArray = new Array()
    idArray [1] = "MOVE ON"
    idArray [2] = "FOLLOW SOMEONE ELSE'S LEAD"
    idArray [3] = "LAUGH ABOUT IT"
    idArray [4] = "MAYBE"
    idArray [5] = "BETTER TO WAIT"
    idArray [6] = "SPEAK UP ABOUT IT"
    idArray [7] = "IT SEEMS ASSURED"
    idArray [8] = "TRUST YOUR INTUITION"
    idArray [9] = "GIVE IT ALL YOU'RE GOT"
    idArray [10] = "DEAL WITH IT LATER"

  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*10);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1]; 
    document.getElementById('buttonbox').style.display = "none"  
    document.getElementById('questionbox1').style.display = "none"  
    document.getElementById('result1').style.visibility = "visible"    
    document.getElementById('button1').style.visibility = "visible"  
}
