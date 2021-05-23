let dims = 30;
let rows = dims;
let cols = dims;
let grid = new Array();
let ant;
let frames = 15;
let slider;
let button;
let input;
let value;

function setup() {
  createCanvas(600, 600);
  // Make array of cells
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Cell(1, i, j);
    }
  }
  
  ant = new Ant(grid, rows, cols);
  
  slider = createSlider(1, 50, 10);
  button = createButton("Reset Ant");
  button.mousePressed(reset);
  input = createInput("30");
}

function draw() {
  background(225);
  value = input.value();
  frameRate(slider.value());
  
  drawGrid(grid, rows, cols);
  drawCells(grid);
  ant.move();
  console.log(value);
  
  if (ant.checkEdges() == true){
    reset();
  }


  if (value == "" || value == 0 || value < 4){

    value = 30;
  }
  if (int(value) != rows && value != "" && value != 0){
    rows = int(value);
    cols = int(value);
    reset();
  }

  ant.show();
  
}

function drawGrid(grid, rows, cols) {
  let gap = width / rows;
  for (let i = 0; i < grid.length; i++) {
    strokeWeight(2);
    stroke(70);
    line(0, i * gap, height, i * gap);
  }
  
  for (let i = 0; i < grid.length; i++) {
    strokeWeight(2);
    line(i * gap, 0, i * gap, i * width);
  }

}

function drawCells(grid){
  for (let arr of grid){
    for (let cell of arr){
      cell.show();
    }
  }
}

function resetSim(rows, cols, grid, ant){
  
  if (ant.checkEdges){
    resetCells(grid);
    ant.resetAnt();
  }
  
}

function resetCells(){
  
  for (let arr of grid){
    for (let cell of arr){
      cell.resetCell();
    }
  }
  
}


function reset(){

  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Cell(1, i, j);
    }
  }
  
  ant = new Ant(grid, rows, cols);
  resetCells();
  ant.resetAnt();
}

