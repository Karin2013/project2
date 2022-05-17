function myFunction() {
    idArray = new Array()
    idArray [1] = "TRY A MORE UNLIKELY SOLUTION"
    idArray [2] = "THIS IS A GOOD TIME TO MAKE A NEW PLAN"
    idArray [3] = "DON'T BE CONCERNED"
    idArray [4] = "IT MAY ALREADY BE A DONE DEAL"
    idArray [5] = "GET A CLEARER VIEW"
    idArray [6] = "SETTLE IT SOON"
    idArray [7] = "ABSOLUTELY NOT"
    idArray [8] = "BE PRACTICAL"
    idArray [9] = "IT IS NOT SIGNIFICANT"
    idArray [10] = "KEEP IT TO YOURSELFS"
    idArray [11] = "IF YOU DON'T RESIST"
    idArray [12] = "IT IS SURE TO MAKE THINGS INTERESTING"
    idArray [13] = "THE SITUATION IS UNCLEAR"
    idArray [14] = "YOU WILL NEED TO ACCOMMODATE"
    idArray [15] = "IT WILL BE A PLEASURE"

  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*10);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1]; 
    document.getElementById('buttonbox').style.display = "none"  
    document.getElementById('questionbox1').style.display = "none"  
    document.getElementById('result1').style.visibility = "visible"    
    document.getElementById('button1').style.visibility = "visible"  
    document.getElementById('drawing1').style.visibility = "visible" 
}

