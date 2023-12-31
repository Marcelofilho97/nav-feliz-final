const colors = [
  "#FFFF99",
  "#FAB7FB",
  "#99CC99",
  "#CC9900",
  "#FFCC00",
  "#99CCCC",
  "#996600",
  "#FFCC99",
  "#FF9933",
  "#FF6600",
  "#FF9900",
  "#006666",
  "#FFCC33",
  "#99CC00"
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
      }, 120000) 
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