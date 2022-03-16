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

var btn2 = document.querySelector('#btn2');
var brother = document.querySelector(".brother")
var brother1 = document.querySelector(".brother1")
var brother2 = document.querySelector(".brother2")
var brother3 = document.querySelector(".brother3")
var brother4 = document.querySelector(".brother4")
var brother5 = document.querySelector(".brother5")
var brother6 = document.querySelector(".brother6");

btn2.addEventListener('click', function() {
  btn2.classList.toggle('text2-active')
  brother.classList.toggle('brother-active')
  brother1.classList.toggle('brother1-active')
  brother2.classList.toggle('brother2-active')
  brother3.classList.toggle('brother3-active')
  brother4.classList.toggle('brother4-active')
  brother5.classList.toggle('brother5-active')
  brother6.classList.toggle('brother6-active');

  if (btn2.getAttribute("text2") == btn2.style) {
    btn2.style = btn2.getAttribute("text2-active")
    brother.style = brother.getAttribute("brother-active")
    brother1.style = brother1.getAttribute("brother1-active")
    brother2.style = brother2.getAttribute("brother2-active")
    brother3.style = brother3.getAttribute("brother3-active")
    brother4.style = brother4.getAttribute("brother4-active")
    brother5.style = brother5.getAttribute("brother5-active")
    brother6.style = brother6.getAttribute("brother6-active");

  } else {
    btn2.setAttribute("text2-active", btn2.style);
    btn2.style = btn2.getAttribute("text2")
    brother.style = brother.getAttribute("brother")
    brother1.style = brother1.getAttribute("brother1")
    brother2.style = brother2.getAttribute("brother2")
    brother3.style = brother3.getAttribute("brother3")
    brother4.style = brother4.getAttribute("brother4")
    brother5.style = brother5.getAttribute("brother5")
    brother6.style = brother6.getAttribute("brother6");
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


var btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function() {
  btn3.classList.toggle('text3-active');

  if (btn3.getAttribute("text3") == btn3.style) {
    btn3.style = btn3.getAttribute("text3-active");

  } else {
    btn3.setAttribute("text3-active", btn3.style);
    btn3.style = btn3.getAttribute("text3");
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


var btn5 = document.querySelector('#btn5');

btn5.addEventListener('click', function() {
  btn5.classList.toggle('text5-active');

  if (btn5.getAttribute("text5") == btn5.style) {
    btn5.style = btn5.getAttribute("text5-active");

  } else {
    btn5.setAttribute("text5-active", btn5.style);
    btn5.style = btn5.getAttribute("text5");
  }
}, false);


