function calculateArea() {
  let height = document.getElementById("height").value;
  let width = document.getElementById("width").value;
  let area = Number(height * width);
  document.getElementById("area").innerHTML = `Area: ${area}`;
}

calculateArea();

function calculatePerimeter() {
  let height = document.getElementById("height").value;
  let width = document.getElementById("width").value;
  let perimeter = Number(height * 2 + width * 2);
  // let perimeter = Number(2 * (height + width));

  document.getElementById("perimeter").innerHTML = `Perimeter: ${perimeter}`;
}

calculatePerimeter();
