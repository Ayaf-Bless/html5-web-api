import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript HTML5 APIs</h1>";

const init = function () {
  console.log("Hello");
};

if ("draggable" in document.createElement("div")) {
  init();
}
