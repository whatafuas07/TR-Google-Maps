// hola marc que tal que te parece mi código?? a que está chulo?
// Conseguir el canva
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Darle propiedades al cuadrado
const squareSize = 50;
let squareX = canvas.width / 2 - squareSize / 2;
let squareY = canvas.height / 2 - squareSize / 2;

// Velocidad de movimiento
const moveSpeed = 5;

// Dibuja el cuadrado
function drawSquare() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(squareX, squareY, squareSize, squareSize);
}

// Aclarar el canva
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Mover el cuadradito
function moveSquare(event) {
  switch (event.keyCode) {
    case 37: // Izquierda
      if (squareX > 0) {
        squareX -= moveSpeed;
      }
      break;
    case 38: // Arriba
      if (squareY > 0) {
        squareY -= moveSpeed;
      }
      break;
    case 39: // Derecha
      if (squareX < canvas.width - squareSize) {
        squareX += moveSpeed;
      }
      break;
    case 40: // Abajo
      if (squareY < canvas.height - squareSize) {
        squareY += moveSpeed;
      }
      break;
  }
}

// Le das a una tecla, sale en la consola
function logKey(event) {
  console.log('Pressed key:', event.key);
}

// Escuchador de eventos cuando le das a una tecla
document.addEventListener('keydown', function(event) {
  moveSquare(event);
  logKey(event);
  clearCanvas();
  drawSquare();
});

// Dibujo inicial
drawSquare();

const i = 4;
const j = 5;

const matrix=[
	[".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "O", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

const visitats=[
	[false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
];

matrix[i][j] = 'X';

function bfs(i_ini, j_ini){
  console.log(matrix[5].length);
  /*for(let i=0; i < matrix[5].length; ++i) {
    console.log(matrix[5][i] + "-" + i);
}*/
var cola = [];
var found = false;
cola.push([i_ini,j_ini]);

while (found == false) {
  var currentposition = cola.shift();
  console.log(currentposition);
  var currenti = currentposition[0];
  var currentj = currentposition[1];
  if (matrix[currenti][currentj] == 'O') {
    found = true;
    console.log('End.');
  } else {
    if (visitats[currenti+1][currentj] == false) {
      cola.push([currenti+1,currentj]);
      visitats[currenti+1][currentj] = true;
    }
    console.log("*****", visitats);
    console.log(visitats[currenti-1][currentj]);

    if (visitats[currenti-1][currentj] == false) {
      cola.push([currenti-1,currentj]);
      visitats[currenti-1][currentj] = true;
    }
    if (visitats[currenti][currentj+1] == false) {
      cola.push([currenti,currentj+1]);
      visitats[currenti][currentj+1] = true;
    }
    if (visitats[currenti][currentj-1] == false) {
      cola.push([currenti,currentj-1]);
      visitats[currenti][currentj-1] = true;
    }
    
    //console.log(cola)
  }
}

console.log(matrix[i_ini][j_ini]);
console.log(matrix[i_ini+1][j_ini]);
console.log(matrix[i_ini-1][j_ini]);
console.log(matrix[i_ini][j_ini+1]);
console.log(matrix[i_ini][j_ini-1]);
}

bfs(2,3);