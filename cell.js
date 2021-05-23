class Cell {

  constructor(state, row, col) {
    this.state = state;
    this.row = row;
    this.col = col;
  }

  show() {
    let gap = width / rows;

    if (this.state == 0) {
      fill(0);
      rect(gap * this.row, gap * this.col, gap, gap);

    } else {
      fill(255);
      rect(gap * this.row, gap * this.col, gap, gap);

    }
  }
  
  change(){
    if (this.state == 0){
      this.state = 1
    }else{
      this.state = 0;
    }
  }
  
  resetCell(){
    this.state = 1;
  }
  

}