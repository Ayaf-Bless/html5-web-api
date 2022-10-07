import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <h1>JavaScript HTML5 APIs</h1>
    <div class="uploader">
        <div id="item-0" class="dragme" draggable="true"></div>
        <div class="dropzone">
            drag here
        </div>

    </div>

    <style>   
    .uploader {
        box-sizing: border-box;
        max-width: 90%;
        border-radius: 10px;
        border-bottom: 3px solid #d2d5da;
        margin: 25px auto;
        padding: 25px;
        background-color: #fff;
    }
    .dropzone {
        border-radius: 5px;
        margin-top: 25px;
        padding: 25px;
        border: 1px dashed #d2d5de;
        background: #f1f2f5;
    }
    .dragme {
        background-color: brown;
        border-radius: 5px;
        width: 50px;
        height: 50px;
    }
    .active {
    background: #ebfff6;
    border-color: #24b373;
    }
    </style>

`;

const init = function () {
  const dragMe = document.querySelector(".dragme");
  const dropZone = document.querySelector(".dropzone");

  dragMe.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    // console.log(e.dataTransfer);
  });
  dropZone.addEventListener("dragenter", (e) => {
    e.target.classList.add("active");
  });

  dropZone.addEventListener("dragleave", (e) => {
    e.target.classList.remove("active");
  });
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
  });
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.classList.remove("active");
    e.stopPropagation();
    const element = document.getElementById(
      e.dataTransfer.getData("text/plain")
    );
    dropZone.append(element);
  });
};

if ("draggable" in document.createElement("div")) {
  init();
}
