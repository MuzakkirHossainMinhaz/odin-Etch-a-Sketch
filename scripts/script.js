const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

function createGrid(size) {
  container.innerHTML = ""; // clear existing grid
  const squareSize = 960 / size; // calculate size of each square

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // add hover effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

function resetGrid() {
  let size = parseInt(
    prompt("Enter the number of squares per side (maximum 100):")
  );

  if (size > 100) {
    size = 100;
  }

  createGrid(size);
}

resetButton.addEventListener("click", resetGrid);

// initial grid
createGrid(16);
