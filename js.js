let cape = document.getElementById("cape");
let pos = 0;
let id = setInterval(frame, 10);

function frame() {
  if (pos == 350) {
    clearInterval(id);
  } else {
    pos++;
    cape.style.bottom = pos + "px";
    cape.style.left = 25 - pos/14 + "%";
  }
}
