/*
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
 */
const bodyStyle = document.getElementById("body").style;



function loader() {
  bodyStyle.background = "black";
  bodyStyle.display = "flex";
  bodyStyle.justifyContent = "center";
  bodyStyle.alignItems = "center";
  bodyStyle.minHeight = "100vh";
}

function removeLoader() {
  document.getElementById("loader").classList.add("none");
  document.getElementById("body").classList.add("reset-this");
  document.getElementById("body").classList.add("background-color");
}
