const colors = [
"#D6FEFD", 
"#FAB7FB",
"#99CC66",
"#669966",
"#6699FF",
"#FFFFFF",
"#999966",
"#006633",
"#FFCC99",
"#FFFF99",
"#99CCFF",
"#CCFFFF",
"#CC0099",
"#FF6699",
"#9966CC",
"#CC33CC",
"#FF99CC",
"#9966CC",
"#CC0000",
"#3399CC",
"#336699",
"#FFCC00",
"#FF9900",
"#FF0000"];
let selectedColor = " ";

window.addEventListener("load", GamePaint)

function GamePaint(){
  function setColor(color) {
    selectedColor = color; //e.currentTarget.style.backgroundColor
    document.getElementById("selected").style.backgroundColor = color;
  }

  for (let i = 0; i < colors.length; i++) {
    const newColor = document.createElement("div");
    newColor.style.backgroundColor = colors[i];
    document.getElementById("colors").appendChild(newColor);
    newColor.addEventListener("click", function () {
      setColor(colors[i]);
    });
  }

  const items = document.getElementsByTagName("path");
  for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    e.currentTarget.setAttribute("fill", selectedColor);
  });
}

document.getElementById("picker").addEventListener("change", function (e) {
  setColor(e.currentTarget.value)
  selectedColor = e.currentTarget.value
  document.getElementById('selected').style.backgroundColor = selectedColor
})

const reset = document.getElementById('resetColors');
reset.addEventListener('click', () => {
    const items = document.getElementsByTagName("path");
    for(let i = 0; i < items.length; i++){
        items[i].setAttribute('fill', 'white');
    }
})
}

// download to PDF
function downloadPDF() {

  HTMLElement.prototype.printMe = printMe;
  function printMe(query){
  var myframe = document.createElement('IFRAME');
  myframe.domain = document.domain;
  myframe.style.position = "absolute";
  myframe.style.top = "-10000px";
  document.body.appendChild(myframe);
  myframe.contentDocument.write(this.innerHTML) ;
  setTimeout(function(){
  myframe.focus();
  myframe.contentWindow.print();
  myframe.parentNode.removeChild(myframe) ;// remove frame
  },200); // wait for images to load inside iframe
  window.focus();
  }

  //document.getElementById('paint-area').printMe()
  document.getElementsByClassName('paint-area')[0].printMe();

  /*
  var opt = {
    margin: 1,
    filename: "Mypaint.pdf",
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(item).save();
  */
}