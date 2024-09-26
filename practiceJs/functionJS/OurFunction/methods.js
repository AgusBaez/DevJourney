const square1 = {
  area: function (side) {
    console.log(side * side);
    return side * side;
  },
  perimeter: function (side) {
    console.log(side * 4);
    return side * 4;
  },
};
console.log("--- Area y Perimetro ---")
square1.area(2);
square1.perimeter(2);
