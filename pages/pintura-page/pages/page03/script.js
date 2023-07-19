const colors = [
  "#FFFFCC",
  "#FAB7FB",
  "#FFCC00",
  "#006666",
  "#99CC99",
  "#CC9966",
  "#FF0000",
  "#99CCCC",
  "#99CC00",
  "#FFFF00",
  "#99FF33",
  "#CCCCCC",
  "#FF99CC",
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
  const item = document.querySelector(".paint-area");

  var opt = {
    margin: 1,
    filename: "myfile.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(item).save();
}