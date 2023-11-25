var img = document.getElementById("Img");
img.onmousedown = function(e) {
img.style.position = 'absolute';
moveAt(e);
document.body.appendChild(img);
img.style.zIndex = 10;
function moveAt(e) {
img.style.left = e.pageX - img.offsetWidth / 2 + 'px';
img.style.top = e.pageY - img.offsetHeight / 2 + 'px';
}
document.onmousemove = function(e) {
moveAt(e);
}

img.onmouseup = function() {
document.onmousemove = null;
img.onmouseup = null;
}
img.ondragstart = function() {
return false;
}
}
