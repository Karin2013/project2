document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});


function myFunction() {

  var reveal = document.querySelector(".reveal");

  btn2.classList.toggle('text2-active')
  btn1.classList.toggle('text1-active')
  btn3.classList.toggle('text3-active')
  btn5.classList.toggle('text5-active')
  btn4.classList.toggle('text4-active')
  myself.classList.toggle('myself-active'),
  myself1.classList.toggle('myself1-active')
  myself2.classList.toggle('myself2-active')
  myself3.classList.toggle('myself3-active')
  myself4.classList.toggle('myself4-active')
  myself5.classList.toggle('myself5-active')
  myself7.classList.toggle('myself7-active')
  myself7.classList.toggle('myself7-active')
  myself8.classList.toggle('myself8-active')
  myself9.classList.toggle('myself9-active')
  myself10.classList.toggle('myself10-active')
  myself11.classList.toggle('myself11-active')
  myself12.classList.toggle('myself12-active')
  myself13.classList.toggle('myself13-active')
  brother.classList.toggle('brother-active')
  brother1.classList.toggle('brother1-active')
  brother2.classList.toggle('brother2-active')
  brother3.classList.toggle('brother3-active')
  brother4.classList.toggle('brother4-active')
  brother5.classList.toggle('brother5-active')
  brother6.classList.toggle('brother6-active')
  uncle.classList.toggle('uncle-active')
  uncle1.classList.toggle('uncle1-active')
  uncle2.classList.toggle('uncle2-active')
  uncle3.classList.toggle('uncle3-active')
  uncle4.classList.toggle('uncle4-active')
  uncle5.classList.toggle('uncle5-active')
  uncle6.classList.toggle('uncle6-active')
  mother.classList.toggle('mother-active')
  mother1.classList.toggle('mother1-active')
  mother2.classList.toggle('mother2-active')
  mother3.classList.toggle('mother3-active')
  mother4.classList.toggle('mother4-active')
  mother5.classList.toggle('mother5-active')
  mother6.classList.toggle('mother6-active')
  mother7.classList.toggle('mother7-active')
  mark.classList.toggle('mark-active')
  mark1.classList.toggle('mark1-active')
  mark2.classList.toggle('mark2-active')
  mark3.classList.toggle('mark3-active')
  mark4.classList.toggle('mark4-active');


  if (reveal.value == "Hide all") {
      reveal.value = "Show all";
      reveal.innerHTML = "Show all";
      btn1.style = btn1.getAttribute("text1-active");
      btn2.style = btn2.getAttribute("text2-active");
      btn3.style = btn3.getAttribute("text3-active");
      btn4.style = btn4.getAttribute("text4-active");
      btn5.style = btn5.getAttribute("text5-active");
    
  }
  else {
      reveal.value = "Hide all";
      reveal.innerHTML = "Hide all";
      btn1.style = btn1.getAttribute("text1");
      btn2.style = btn2.getAttribute("text2");
      btn3.style = btn3.getAttribute("text3");
      btn4.style = btn4.getAttribute("text4");
      btn5.style = btn5.getAttribute("text5");
  }

}

var btn2 = document.querySelector('#btn2');
var brother = document.querySelector(".brother")
var brother1 = document.querySelector(".brother1")
var brother2 = document.querySelector(".brother2")
var brother3 = document.querySelector(".brother3")
var brother4 = document.querySelector(".brother4")
var brother5 = document.querySelector(".brother5")
var brother6 = document.querySelector(".brother6")
var brother7 = document.querySelector(".brother7")
var brother8 = document.querySelector(".brother8");

btn2.addEventListener('click', function() {
  btn2.classList.toggle('text2-active')
  brother.classList.toggle('brother-active')
  brother1.classList.toggle('brother1-active')
  brother2.classList.toggle('brother2-active')
  brother3.classList.toggle('brother3-active')
  brother4.classList.toggle('brother4-active')
  brother5.classList.toggle('brother5-active')
  brother6.classList.toggle('brother6-active')
  brother7.classList.toggle('brother7-active')
  brother8.classList.toggle('brother8-active');

  if (btn2.getAttribute("text2") == btn2.style) {
    btn2.style = btn2.getAttribute("text2-active")
    brother.style = brother.getAttribute("brother-active")
    brother1.style = brother1.getAttribute("brother1-active")
    brother2.style = brother2.getAttribute("brother2-active")
    brother3.style = brother3.getAttribute("brother3-active")
    brother4.style = brother4.getAttribute("brother4-active")
    brother5.style = brother5.getAttribute("brother5-active")
    brother6.style = brother6.getAttribute("brother6-active")
    brother7.style = brother7.getAttribute("brother7-active")
    brother8.style = brother7.getAttribute("brother8-active");

  } else {
    btn2.setAttribute("text2-active", btn2.style);
    btn2.style = btn2.getAttribute("text2")
    brother.style = brother.getAttribute("brother")
    brother1.style = brother1.getAttribute("brother1")
    brother2.style = brother2.getAttribute("brother2")
    brother3.style = brother3.getAttribute("brother3")
    brother4.style = brother4.getAttribute("brother4")
    brother5.style = brother5.getAttribute("brother5")
    brother6.style = brother6.getAttribute("brother6")
    brother7.style = brother7.getAttribute("brother7")
    brother8.style = brother8.getAttribute("brother8");
  }
}, false);

var btn1 = document.querySelector("#btn1");
var myself = document.querySelector(".myself");
var myself1 = document.querySelector(".myself1")
var myself2 = document.querySelector(".myself2")
var myself3 = document.querySelector(".myself3")
var myself4 = document.querySelector(".myself4")
var myself5 = document.querySelector(".myself5")
var myself6 = document.querySelector(".myself6")
var myself7 = document.querySelector(".myself7")
var myself8 = document.querySelector(".myself8")
var myself9 = document.querySelector(".myself9")
var myself10 = document.querySelector(".myself10")
var myself11 = document.querySelector(".myself11")
var myself12 = document.querySelector(".myself12")
var myself13 = document.querySelector(".myself13");

btn1.addEventListener('click', function() {
  btn1.classList.toggle('text1-active'),
  myself.classList.toggle('myself-active'),
  myself1.classList.toggle('myself1-active')
  myself2.classList.toggle('myself2-active')
  myself3.classList.toggle('myself3-active')
  myself4.classList.toggle('myself4-active')
  myself5.classList.toggle('myself5-active')
  myself7.classList.toggle('myself7-active')
  myself7.classList.toggle('myself7-active')
  myself8.classList.toggle('myself8-active')
  myself9.classList.toggle('myself9-active')
  myself10.classList.toggle('myself10-active')
  myself11.classList.toggle('myself11-active')
  myself12.classList.toggle('myself12-active')
  myself13.classList.toggle('myself13-active');

  if (btn1.getAttribute("text1") == btn1.style) {
    btn1.style = btn1.getAttribute("text1-active"),
    myself.style = myself.getAttribute("myself-active")
    myself1.style = myself1.getAttribute("myself1-active")
    myself2.style = myself2.getAttribute("myself2-active")
    myself3.style = myself3.getAttribute("myself3-active")
    myself4.style = myself4.getAttribute("myself4-active")
    myself5.style = myself5.getAttribute("myself5-active")
    myself6.style = myself6.getAttribute("myself6-active")
    myself7.style = myself7.getAttribute("myself7-active")
    myself8.style = myself8.getAttribute("myself8-active")
    myself9.style = myself9.getAttribute("myself9-active")
    myself10.style = myself10.getAttribute("myself10-active")
    myself11.style = myself11.getAttribute("myself11-active")
    myself12.style = myself12.getAttribute("myself12-active")
    myself13.style = myself13.getAttribute("myself13-active");
  } else {
    btn1.getAttribute("text1-active", btn1.style);
    btn1.style = btn1.getAttribute("text1"),
    myself.style = myself.getAttribute("myself")
    myself1.style = myself1.getAttribute("myself1")
    myself2.style = myself2.getAttribute("myself2")
    myself3.style = myself3.getAttribute("myself3")
    myself4.style = myself4.getAttribute("myself4")
    myself5.style = myself5.getAttribute("myself5")
    myself6.style = myself6.getAttribute("myself6")
    myself7.style = myself7.getAttribute("myself7")
    myself8.style = myself8.getAttribute("myself8")
    myself9.style = myself9.getAttribute("myself9")
    myself10.style = myself10.getAttribute("myself10")
    myself11.style = myself11.getAttribute("myself11")
    myself12.style = myself12.getAttribute("myself12")
    myself13.style = myself13.getAttribute("myself13");
  }
}, false);


var btn3 = document.querySelector('#btn3')
var uncle = document.querySelector(".uncle")
var uncle1 = document.querySelector(".uncle1")
var uncle2 = document.querySelector(".uncle2")
var uncle3 = document.querySelector(".uncle3")
var uncle4 = document.querySelector(".uncle4")
var uncle5 = document.querySelector(".uncle5")
var uncle6 = document.querySelector(".uncle6");

btn3.addEventListener('click', function() {
  btn3.classList.toggle('text3-active');
  uncle.classList.toggle('uncle-active')
  uncle1.classList.toggle('uncle1-active')
  uncle2.classList.toggle('uncle2-active')
  uncle3.classList.toggle('uncle3-active')
  uncle4.classList.toggle('uncle4-active')
  uncle5.classList.toggle('uncle5-active')
  uncle6.classList.toggle('uncle6-active');

  if (btn3.getAttribute("text3") == btn3.style) {
    btn3.style = btn3.getAttribute("text3-active")
    uncle.style = uncle.getAttribute("uncle-active")
    uncle1.style = uncle1.getAttribute("uncle1-active")
    uncle2.style = uncle2.getAttribute("uncle2-active")
    uncle3.style = uncle3.getAttribute("uncle3-active")
    uncle4.style = uncle4.getAttribute("uncle4-active")
    uncle5.style = uncle5.getAttribute("uncle5-active")
    uncle6.style = uncle6.getAttribute("uncle6-active");


  } else {
    btn3.getAttribute("text3-active", btn3.style);
    btn3.style = btn3.getAttribute("text3");
    uncle.style = uncle.getAttribute("uncle")
    uncle1.style = uncle1.getAttribute("uncle1")
    uncle2.style = uncle2.getAttribute("uncle2")
    uncle3.style = uncle3.getAttribute("uncle3")
    uncle4.style = uncle4.getAttribute("uncle4")
    uncle5.style = uncle5.getAttribute("uncle5")
    uncle6.style = uncle6.getAttribute("uncle6");
  }
}, false);

var btn4 = document.querySelector('#btn4');
var mother = document.querySelector(".mother")
var mother1 = document.querySelector(".mother1")
var mother2 = document.querySelector(".mother2")
var mother3 = document.querySelector(".mother3")
var mother4 = document.querySelector(".mother4")
var mother5 = document.querySelector(".mother5")
var mother6 = document.querySelector(".mother6")
var mother7 = document.querySelector(".mother7");

btn4.addEventListener('click', function() {
  btn4.classList.toggle('text4-active')
  mother.classList.toggle('mother-active')
  mother1.classList.toggle('mother1-active')
  mother2.classList.toggle('mother2-active')
  mother3.classList.toggle('mother3-active')
  mother4.classList.toggle('mother4-active')
  mother5.classList.toggle('mother5-active')
  mother6.classList.toggle('mother6-active')
  mother7.classList.toggle('mother7-active');

  if (btn4.getAttribute("text4") == btn4.style) {
    btn4.style = btn4.getAttribute("text4-active")
    mother.style = mother.getAttribute("mother-active")
    mother1.style = mother1.getAttribute("mother1-active")
    mother2.style = mother2.getAttribute("mother2-active")
    mother3.style = mother3.getAttribute("mother3-active")
    mother4.style = mother4.getAttribute("mother4-active")
    mother5.style = mother5.getAttribute("mother5-active")
    mother6.style = mother.getAttribute("mother6-active")
    mother7.style = mother.getAttribute("mother7-active");

  } else {
    btn4.setAttribute("text4-active", btn4.style);
    btn4.style = btn4.getAttribute("text4")
    mother.style = mother.getAttribute("mother")
    mother1.style = mother1.getAttribute("mother1")
    mother2.style = mother2.getAttribute("mother2")
    mother3.style = mother3.getAttribute("mother3")
    mother4.style = mother4.getAttribute("mother4")
    mother5.style = mother5.getAttribute("mother5")
    mother6.style = mother6.getAttribute("mother6")
    mother7.style = mother7.getAttribute("mother7");
  }
}, false);


var btn5 = document.querySelector('#btn5')
var mark = document.querySelector(".mark")
var mark1 = document.querySelector(".mark1")
var mark2 = document.querySelector(".mark2")
var mark3 = document.querySelector(".mark3")
var mark4 = document.querySelector(".mark4");

btn5.addEventListener('click', function() {
  btn5.classList.toggle('text5-active');
  mark.classList.toggle('mark-active')
  mark1.classList.toggle('mark1-active')
  mark2.classList.toggle('mark2-active')
  mark3.classList.toggle('mark3-active')
  mark4.classList.toggle('mark4-active');


  if (btn5.getAttribute("text5") == btn5.style) {
    btn5.style = btn5.getAttribute("text5-active")
    mark.style = mark.getAttribute("mark-active")
    mark1.style = mark1.getAttribute("mark1-active")
    mark2.style = mark2.getAttribute("mark2-active")
    mark3.style = mark3.getAttribute("mark3-active")
    mark4.style = mark4.getAttribute("mark4-active");

  } else {
    btn5.getAttribute("text5-active", btn5.style);
    btn5.style = btn5.getAttribute("text5")
    mark.style = mark.getAttribute("mark")
    mark1.style = mark1.getAttribute("mark1")
    mark2.style = mark2.getAttribute("mark2")
    mark3.style = mark3.getAttribute("mark3")
    mark4.style = mark4.getAttribute("mark4");
  }
}, false);

function myFunction1() {
  var btn1 = document.querySelector('#btn1');
  var myself = document.querySelector(".myself");
  var myself1 = document.querySelector(".myself1")
  var myself2 = document.querySelector(".myself2")
  var myself3 = document.querySelector(".myself3")
  var myself4 = document.querySelector(".myself4")
  var myself5 = document.querySelector(".myself5")
  var myself6 = document.querySelector(".myself6")
  var myself7 = document.querySelector(".myself7")
  var myself8 = document.querySelector(".myself8")
  var myself9 = document.querySelector(".myself9")
  var myself10 = document.querySelector(".myself10")
  var myself11 = document.querySelector(".myself11")
  var myself12 = document.querySelector(".myself12")
  var myself13 = document.querySelector(".myself13");

    btn1.style.color = "#FFE49F";
    btn1.style.textShadow = "0 0 5px #fff, 0 0 20px #fff, 0 0 30px #ab88ec, 0 0 40px #ab88ec, 0 0 50px #ab88ec, 0 0 60px #ab88ec, 0 0 70px #ab88ec";
    myself.style.color = "#FFE49F";
    myself1.style.color = "#FFE49F";
    myself2.style.color = "#FFE49F";
    myself3.style.color = "#FFE49F";
    myself4.style.color = "#FFE49F";
    myself5.style.color = "#FFE49F";
    myself6.style.color = "#FFE49F";
    myself7.style.color = "#FFE49F";
    myself8.style.color = "#FFE49F"; 
    myself9.style.color = "#FFE49F";
    myself10.style.color = "#FFE49F"; 
    myself11.style.color = "#FFE49F"; 
    myself12.style.color = "#FFE49F"; 
    myself13.style.color = "#FFE49F";
}

function myFunction2() {
  var btn2 = document.querySelector('#btn2');
  var brother = document.querySelector(".brother")
  var brother1 = document.querySelector(".brother1")
  var brother2 = document.querySelector(".brother2")
  var brother3 = document.querySelector(".brother3")
  var brother4 = document.querySelector(".brother4")
  var brother5 = document.querySelector(".brother5")
  var brother6 = document.querySelector(".brother6")
  var brother7 = document.querySelector(".brother7")
  var brother8 = document.querySelector(".brother8");

    btn2.style.color = "#B0D5FF";
    btn2.style.textShadow = "0 0 5px #fff, 0 0 20px #fff, 0 0 30px #ab88ec, 0 0 40px #ab88ec, 0 0 50px #ab88ec, 0 0 60px #ab88ec, 0 0 70px #ab88ec";
    brother.style.color = "#B0D5FF";
    brother1.style.color = "#B0D5FF";
    brother2.style.color = "#B0D5FF";
    brother3.style.color = "#B0D5FF";
    brother4.style.color = "#B0D5FF";
    brother5.style.color = "#B0D5FF";
    brother6.style.color = "#B0D5FF"; 
    brother7.style.color = "#B0D5FF"; 
    brother8.style.color = "#B0D5FF";
}

function myFunction3() {  
  var btn3 = document.querySelector('#btn3');
  var uncle = document.querySelector(".uncle")
  var uncle1 = document.querySelector(".uncle1")
  var uncle2 = document.querySelector(".uncle2")
  var uncle3 = document.querySelector(".uncle3")
  var uncle4 = document.querySelector(".uncle4")
  var uncle5 = document.querySelector(".uncle5")
  var uncle6 = document.querySelector(".uncle6"); 

    btn3.style.color = "#95FFE6";
    btn3.style.textShadow = "0 0 5px #fff, 0 0 20px #fff, 0 0 30px #ab88ec, 0 0 40px #ab88ec, 0 0 50px #ab88ec, 0 0 60px #ab88ec, 0 0 70px #ab88ec";
    uncle.style.color = "#95FFE6";
    uncle1.style.color = "#95FFE6"; 
    uncle2.style.color = "#95FFE6";
    uncle3.style.color = "#95FFE6";
    uncle4.style.color = "#95FFE6";
    uncle5.style.color = "#95FFE6";
    uncle6.style.color = "#95FFE6";
}

function myFunction4() {
  var btn4 = document.querySelector('#btn4');
  var mother = document.querySelector(".mother")
  var mother1 = document.querySelector(".mother1")
  var mother2 = document.querySelector(".mother2")
  var mother3 = document.querySelector(".mother3")
  var mother4 = document.querySelector(".mother4")
  var mother5 = document.querySelector(".mother5")
  var mother6 = document.querySelector(".mother6")
  var mother7 = document.querySelector(".mother7");

    btn4.style.color = "#B69DFD";
    btn4.style.textShadow = "0 0 5px #fff, 0 0 20px #fff, 0 0 30px #ab88ec, 0 0 40px #ab88ec, 0 0 50px #ab88ec, 0 0 60px #ab88ec, 0 0 70px #ab88ec";
    mother.style.color = "#B69DFD";
    mother1.style.color = "#B69DFD";
    mother2.style.color = "#B69DFD";
    mother3.style.color = "#B69DFD";
    mother4.style.color = "#B69DFD";
    mother5.style.color = "#B69DFD";
    mother6.style.color = "#B69DFD";
    mother7.style.color = "#B69DFD";
}


function myFunction5() {
  var btn5 = document.querySelector('#btn5');
  var mark = document.querySelector(".mark")
  var mark1 = document.querySelector(".mark1")
  var mark2 = document.querySelector(".mark2")
  var mark3 = document.querySelector(".mark3")
  var mark4 = document.querySelector(".mark4");
  var bar1 = document.querySelector(".bar1");
  var bar2 = document.querySelector(".bar2");
  var bar3 = document.querySelector(".bar3");
  var hidemenu = document.querySelector('.hidemenu');


    btn5.style.color = "#DC3535";
    btn5.style.textShadow = "0 0 5px #fff, 0 0 20px #fff, 0 0 30px #ab88ec, 0 0 40px #ab88ec, 0 0 50px #ab88ec, 0 0 60px #ab88ec, 0 0 70px #ab88ec";
    mark.style.color = "#DC3535";
    mark1.style.color = "#DC3535";
    mark2.style.color = "#DC3535";
    mark3.style.color = "#DC3535";
    mark4.style.color = "#DC3535";
    bar1.style.display = "block";
    bar2.style.display = "block";
    bar3.style.display = "block";
    hidemenu.style.display ="none";
}

function myFunction(x) {
     x.classList.toggle("change");
}

var button = document.querySelector("#button");
var hidemenu = document.querySelector('.hidemenu');
var bodytext = document.querySelector('.bodytext');

  button.addEventListener('click', function() {
     hidemenu.classList.toggle ("hidemenu-active")
     bodytext.classList.toggle ("bodytext-active");

     if (hidemenu.getAttribute("hidemenu-active") == hidemenu.style) {
       bodytext.style = bodytext.getAttribute("bodytext");

    } else {
       hidemenu.setAttribute("hidemenu", hidemenu.style);
       bodytext.style = bodytext.getAttribute("bodytext-active");
       button.style.display = "block"
    }
  }, false);
