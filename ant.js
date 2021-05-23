class Ant {
  constructor(grid, rows, cols) {
    this.row = rows / 2;
    this.col = cols / 2;
    this.direction = "north";
  }

  show() {
    let gap = width / rows;

    fill(255, 0, 0)
    rect(this.row * gap, this.col * gap, gap, gap);
  }

  move() {
    if (grid[this.row][this.col].state == 0) {

      if (this.direction == "north") {
        this.direction = "west"
        this.row += 1;

      } else if (this.direction == "east") {
        this.direction = "north"
        this.col -= 1;

      } else if (this.direction == "south") {
        this.direction = "east"
        this.row -= 1;

      } else {
        this.direction = "south"
        this.col += 1;

      }

      grid[this.row][this.col].change();


    } else {

      if (this.direction == "north") {
        this.direction = "east"
        this.row -= 1;

      } else if (this.direction == "east") {
        this.direction = "south"
        this.col += 1;

      } else if (this.direction == "south") {
        this.direction = "west"
        this.row += 1;

      } else {
        this.direction = "north"
        this.col -= 1;

      }

      grid[this.row][this.col].change();


    }
  }

  
  checkEdges(){
    
    if (this.col == cols - 1 || this.col == 0 || this.row == rows - 1 || this.row == 0){
      return true;
    }
  }
  
  
  resetAnt(){
    this.col = cols/2;
    this.row = rows/2;
    this.direction = "north";
  }

}