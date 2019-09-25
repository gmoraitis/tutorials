function printDate() {
    const element = document.getElementById("left");
    element.innerHTML = Date();
}

function resizeImage() {
    const img = document.getElementById("logo");

    img.classList.toggle("imgSize");
}
  
