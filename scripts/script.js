const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  container.innerHTML = ""; // clear existing grid
  const squareSize = 960 / size; // calculate size of each square

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // set initial opacity to 1 (fully opaque)
    square.style.opacity = 1;

    // add hover effect with random color
    square.addEventListener("mouseover", () => {
      const currentOpacity = parseFloat(square.style.opacity);
      square.style.backgroundColor = getRandomRGB();
      square.style.opacity = currentOpacity - 0.1; // reduce opacity by 0.1
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
