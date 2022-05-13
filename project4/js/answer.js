function myFunction() {
    idArray = new Array()
    idArray [1] = "RELATED ISSUES MAY SURFACE"
    idArray [2] = "DO IT EARLY"
    idArray [3] = "WAIT"
    idArray [4] = "YOU'LL HAVE TO MAKE IT UP AS YOU GO"
    idArray [5] = "NO MATTER WHAT"
  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*5);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
}



var text = [
    "First paragraph text",
    "Second paragraph text",
    "Third paragraph text",
    "Fourth paragraph text",
    "Fifth paragraph text"
];
  
document.getElementById("select").onclick = function() {
document.getElementById("result").innerHTML = text[Math.floor(Math.random() * text.length)];
}