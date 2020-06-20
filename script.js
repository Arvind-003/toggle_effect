var toggle = false;
function shift() {
  var outerDiv = document.getElementsByClassName("outer")[0];
  var innerDiv = outerDiv.getElementsByClassName("inner")[0];
  var bodyT = document.getElementsByTagName("body")[0];
  if (toggle == false) {
    innerDiv.style.backgroundColor = "red";
    innerDiv.style.marginLeft = "70%";
    outerDiv.style.backgroundColor = "black";
    bodyT.style.backgroundImage =
      "linear-gradient(50deg,red 0%,rgb(248,161,0) 75%)";
    toggle = true;
  } else {
    innerDiv.style.backgroundColor = "black";
    innerDiv.style.marginLeft = "5%";
    outerDiv.style.backgroundColor = "red";
    bodyT.style.backgroundImage =
      "linear-gradient(50deg,#2857a4 0%,#403066 74%)";
    toggle = false;
  }
}
