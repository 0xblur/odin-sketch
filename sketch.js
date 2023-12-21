// Paint grids only if you're passing through them with the cursor button pressed or held down.
const gridContainer = document.querySelector("#grid-container");
let isMouseDown = false;
gridContainer.addEventListener("mousedown", (e) => { e.preventDefault(); isMouseDown = true })
gridContainer.addEventListener("mouseup", () => isMouseDown = false)

function paintGrid(event, color) {
  if (isMouseDown) { // Verify if cursor is being held down.
    event.target.style.backgroundColor = color
    // Only white grids have border.
    if (color != "white") {
      event.target.style.border = "none";
    } else {
      event.target.style.border = "1px solid black"
    }
  }

function paintSpecificColor() {
  const colorPicker = document.querySelector("#color-picker");
  const color = colorPicker.value;
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((grid) => grid.addEventListener("mouseenter", (event) => paintGrid(event, color)))
}

function paintBlack() {
  const color = "black";
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((grid) => grid.addEventListener("mouseenter", (event) => paintGrid(event, color)))
}

function paintWhite() {
  const color = "white";
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((grid) => grid.addEventListener("mousemove", (event) => paintGrid(event, color)))
}

function getRGBColor() {
  const red = Math.floor(Math.random() * 256); // 0-255
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`

}

function paintRGB() {
  const color = getRGBColor;
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((grid) => grid.addEventListener("mouseenter", (event) => paintGrid(event, color())))
}

//Buttons
const rgbBtn = document.querySelector("#rgb");
rgbBtn.addEventListener("click", () => paintRGB())

const eraserBtn = document.querySelector("#eraser");
eraserBtn.addEventListener("click", () => paintWhite())

const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("change", (event) => paintSpecificColor());

const classicBtn = document.querySelector("#classic");
classicBtn.addEventListener("click", () => paintBlack())

function adjustGridSize() {
  const gridContainer = document.querySelector("#grid-container");
  const gridSize = Number(document.querySelector("#grid-size").value);
  const gridHeightWidth = gridContainer.clientHeight / gridSize;

  gridContainer.innerHTML = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item", "no-drag");
    gridContainer.appendChild(gridItem);
  }

  const gridItems = document.querySelectorAll(".grid-item");

  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.height = `${gridHeightWidth}px`;
    gridItems[i].style.width = `${gridHeightWidth}px`;
  }

  // Adjust container height to maintain square items
  // gridContainer.style.height = getComputedStyle(gridContainer.width);
}

let gridSizeSelector = document.querySelector("#grid-size");
gridSizeSelector.addEventListener("change", adjustGridSize);
