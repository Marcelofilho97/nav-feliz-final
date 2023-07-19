const colors = [
  "#FFFFFF",
  "#CCCC99",
  "#999966",
  "#663300",
  "#CC6600",
  "#CC9900",
  "#996600",
  "#CCCCCC",
  "#FF3333",
  "#990000",
  "#FFCC00",
  "#CCCCFF",
  "#99CCFF",
  "#006699",
  "#0099FF",
  "#6699FF",
  "#0099CC",
  "#D6F589",
  "#FDC2B5"
];
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

  function printDiv(divID)  
  {
      var conteudo = document.getElementById(divID).innerHTML;  
      var win = window.open();  
      win.document.write(conteudo);  
      win.print();  
      
      setTimeout(() => {
        win.close();
      }, 400)
      //Fecha após a impressão.  
  
  } 

  printDiv("paint-area")

  /*
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

  document.getElementById('paint-area').printMe()
  */
  
  /*
  const item = document.querySelector(".paint-area");

  var opt = {
    margin: 1,
    filename: "myfile.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(item).save();
  */
}