var HOST = 'http://127.0.0.1:8080/';

function httpGet()
{
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log("aa: " + this.responseText);
        draw(parseInt(this.responseText));
      }
    });
    xmlHttp.open("GET", "http://127.0.0.1:3000/data");
    xmlHttp.send( null );
}

function draw(newActive)
{
  var parentdiv = document.getElementById('parentdiv');
  var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
  var offsetToChildCenter = 20;
  var totalOffset = offsetToParentCenter - offsetToChildCenter;
  var active = 0;
  for (var i = 1; i <= 5; ++i) {
    var childdiv = document.createElement('div');
    childdiv.className = 'div2';
    childdiv.style.position = 'absolute';
    var y = Math.cos((div * i) * (Math.PI / 180)) * radius;
    var x = Math.sin((div * i) * (Math.PI / 180)) * radius;
    childdiv.style.top = (y + totalOffset).toString() + "px";
    childdiv.style.left = (x + totalOffset).toString() + "px";
    if(i==newActive) childdiv.style.backgroundColor = "red"
    parentdiv.appendChild(childdiv);
  }
}

var div = 360 / 6;
var radius = 150;
var parentdiv = document.getElementById('parentdiv');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
var offsetToChildCenter = 20;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
var active = 5;
for (var i = 1; i <= 5; ++i) {
  var childdiv = document.createElement('div');
  childdiv.className = 'div2';
  childdiv.style.position = 'absolute';
  var y = Math.cos((div * i) * (Math.PI / 180)) * radius;
  var x = Math.sin((div * i) * (Math.PI / 180)) * radius;
  childdiv.style.top = (y + totalOffset).toString() + "px";
  childdiv.style.left = (x + totalOffset).toString() + "px";
  parentdiv.appendChild(childdiv);
}

setInterval(httpGet, 500);
