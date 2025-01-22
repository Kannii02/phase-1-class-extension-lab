class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }

  class Triangle extends Polygon {
   
    get isValid() {
      if (this.countSides !== 3) return false;
      
      let [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }

  class Square extends Polygon {
  
  get isValid() {
    return this.countSides === 4 && this.sides.every(side => side === this.sides[0]);
  }

  get area() {
    return this.isValid ? this.sides[0] ** 2 : null;
  }
}

module.exports = { Polygon, Triangle, Square };

if (require.main === module) {
    const triangle = new Triangle([3, 4, 5]);
    console.log("Triangle is valid:", triangle.isValid); 
    console.log("Triangle perimeter:", triangle.perimeter); 
  
    const invalidTriangle = new Triangle([1, 2, 3]);
    console.log("Invalid Triangle is valid:", invalidTriangle.isValid); 
  
    const square = new Square([4, 4, 4, 4]);
    console.log("Square is valid:", square.isValid); 
    console.log("Square area:", square.area); 
    console.log("Square perimeter:", square.perimeter); 
  
    const invalidSquare = new Square([4, 4, 4, 2]);
    console.log("Invalid Square is valid:", invalidSquare.isValid); 
  }
  