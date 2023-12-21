const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((grid) => grid.addEventListener("click", (event) => paintGrid(event, color)))

function paintGrid(event, color) {
  event.target.style.backgroundColor = color
}

function paintBlack() {
  const color = "black";
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((grid) => grid.addEventListener("click", (event) => paintGrid(event, color)))
}

function adjustGridSize() {
  const gridContainer = document.querySelector("#grid-container");
  const gridSize = Number(document.querySelector("#grid-size").value);
  const gridHeightWidth = gridContainer.clientHeight / gridSize;

  gridContainer.innerHTML = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
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