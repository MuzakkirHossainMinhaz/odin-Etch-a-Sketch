# odin-Etch-a-Sketch

This project is part of **The Odin Project's** _Foundations_ course. The goal was to apply the knowledge gained from the _JavaScript Basics_ chapter by implementing an Etch-a-Sketch grid sketchpad.

## Table of Contents

- [General Information](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Steps](#project-steps)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## General Information

The "Odin Etch-a-Sketch" project is a simple web-based drawing tool where the user can sketch by hovering over grid squares. This project focuses on applying basic JavaScript concepts such as functions, variables, DOM manipulation, and event handling.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Features

- Dynamic grid creation using JavaScript
- Grid size adjustment via user input
- Hover effect to change square colors
- Randomized colors with each hover interaction
- Progressive darkening effect with each hover

## Project Steps

### Step 1: Setup the project structure

1. Create a new Git repository for your project.
2. Create an HTML document with a script tag.
3. Check if JavaScript is linked correctly:
   - Write `console.log("Hello World")` in JavaScript.
   - Check if “Hello World” is logged in the browser console once you open your webpage.
4. Link to an external JavaScript file inside the script tag. Using an external JavaScript file keeps your HTML file clean and organized.

### Step 2: Create the grid dynamically

1. Write a function to create a grid of squares inside a container.
2. Use Flexbox to arrange the squares in a grid layout.
3. Add hover effects to change square colors when the mouse passes over them.

### Step 3: Implement the grid size adjustment

1. Add a button to prompt the user for a new grid size.
2. Clear the existing grid and create a new grid based on the user input.

### Step 4: Add color and darkening effects

1. Randomize the color of each square on hover.
2. Implement a progressive darkening effect where each interaction darkens the square by 10%.

## Setup

To set up this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/MuzakkirHossainMinhaz/odin-Etch-a-Sketch.git
   ```
2. Navigate to the project directory:
   ```sh
   cd odin-Etch-a-Sketch
   ```

## Usage

Open the `index.html` file in your preferred web browser to use the Etch-a-Sketch. Use the button to set the grid size, and hover over the grid squares to sketch.

## Acknowledgements

This project was created as part of **The Odin Project's** _Foundations_ course. Special thanks to the community and the maintainers of The Odin Project for providing such a comprehensive and free curriculum.
