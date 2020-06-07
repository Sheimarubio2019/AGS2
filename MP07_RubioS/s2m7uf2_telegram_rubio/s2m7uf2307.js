document.getElementById('default').addEventListener('click',def);
document.getElementById('mono').addEventListener('click',mono);
document.getElementById('dark').addEventListener('click',dark);
document.getElementById('artic').addEventListener('click',artic);
var slider=document.getElementsByClassName('slider');


function def(){
  document.getElementById('gran').style.backgroundColor="SlateGray";
  document.getElementById('bocadillo').style.backgroundColor="ivory";
  document.getElementById('colors').style.display="none";
}
function mono(){
  document.getElementById('gran').style.backgroundColor="#6A5ACD";
  document.getElementById('bocadillo').style.backgroundColor="ivory";
  document.getElementById('colors').style.display="block";
  slider[0].style.display="block";
}
function dark(){
  document.getElementById('gran').style.backgroundColor="#333";
  document.getElementById('bocadillo').style.backgroundColor="ivory";
  document.getElementById('colors').style.display="none";
}
function artic(){
  document.getElementById('gran').style.backgroundColor="ivory";
  document.getElementById('bocadillo').style.backgroundColor="#5d5e79";
  document.getElementById('colors').style.display="none";
}

var color=["tomato","#6A5ACD","aquamarine","salmon","khaki","purple","orange","lightgreen","navy","yellowgreen"];
var bolacolor=document.getElementsByClassName('bola');
for (var k = 0; k < bolacolor.length; k++) {
  bolacolor[k].style.backgroundColor=color[k];
}




document.getElementById('u').addEventListener('click',tomato);
function tomato(){
  document.getElementById('mono').style.backgroundColor="tomato";
  document.getElementById('gran').style.backgroundColor="tomato";
  document.getElementById('derecha').style.backgroundColor="#ffbeb3";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffbeb3";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffbeb3";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffbeb3";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffbeb3";
}
document.getElementById('dos').addEventListener('click',lila);
function lila(){
  document.getElementById('mono').style.backgroundColor="#6A5ACD";
  document.getElementById('gran').style.backgroundColor="#6A5ACD";
  document.getElementById('derecha').style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cac4ed";
}
document.getElementById('tres').addEventListener('click',aquamarine);
function aquamarine(){
  document.getElementById('mono').style.backgroundColor="aquamarine";
  document.getElementById('gran').style.backgroundColor="aquamarine";
  document.getElementById('derecha').style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ccffee";
}
document.getElementById('cuatre').addEventListener('click',salmon);
function salmon(){
  document.getElementById('mono').style.backgroundColor="salmon";
  document.getElementById('gran').style.backgroundColor="salmon";
  document.getElementById('derecha').style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#fcbcb5";
}
document.getElementById('cinc').addEventListener('click',khaki);
function khaki(){
  document.getElementById('mono').style.backgroundColor="khaki";
  document.getElementById('gran').style.backgroundColor="khaki";
  document.getElementById('derecha').style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#f6f0bb";
}
document.getElementById('sis').addEventListener('click',purple);
function purple(){
  document.getElementById('mono').style.backgroundColor="purple";
  document.getElementById('gran').style.backgroundColor="purple";
  document.getElementById('derecha').style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffb3ff";
}
document.getElementById('set').addEventListener('click',orange);
function orange(){
  document.getElementById('mono').style.backgroundColor="orange";
  document.getElementById('gran').style.backgroundColor="orange";
  document.getElementById('derecha').style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffdb99";
}
document.getElementById('vuit').addEventListener('click',lightgreen);
function lightgreen(){
  document.getElementById('mono').style.backgroundColor="lightgreen";
  document.getElementById('gran').style.backgroundColor="lightgreen";
  document.getElementById('derecha').style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#d3f8d3";
}
document.getElementById('nou').addEventListener('click',navy);
function navy(){
  document.getElementById('mono').style.backgroundColor="navy";
  document.getElementById('gran').style.backgroundColor="navy";
  document.getElementById('derecha').style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#9999ff";
}
document.getElementById('deu').addEventListener('click',yellowgreen);
function yellowgreen(){
  document.getElementById('mono').style.backgroundColor="yellowgreen";
  document.getElementById('gran').style.backgroundColor="yellowgreen";
  document.getElementById('derecha').style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cce698";
}
