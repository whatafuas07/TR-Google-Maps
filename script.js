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
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["O", ".", ".", ".", ".", ".", ".", ".", "."],
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

const matrixpath=[
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
];

const UP = [-1,0];
const DOWN = [1,0];
const LEFT = [0,-1];
const RIGHT = [0,1];

var monedaI; 
var monedaJ;

function bfs(i_ini, j_ini){
  var cola = [];
  var found = false;
  cola.push([i_ini,j_ini]);
  console.log(i_ini,j_ini,matrix[i_ini][j_ini])

  while (found == false) {
    var currentposition = cola.shift();
    var currenti = currentposition[0];
    var currentj = currentposition[1];
    if (matrix[currenti][currentj] == 'O') {
      found = true;
      console.log('Moneda trobada a:', currenti, currentj);
      monedaI = currenti;
      monedaJ = currentj;

    } else {
      if (currentj>=0 && currenti+1>=0 && currentj<matrix[0].length && currenti+1<matrix.length && visitats[currenti+1][currentj] == false) {
        cola.push([currenti+1,currentj]);
        visitats[currenti+1][currentj] = true;
        
        matrixpath[currenti+1][currentj].push(...matrixpath[currenti][currentj],DOWN);
      }
      if (currentj>=0 && currenti-1>=0 && currentj<matrix[0].length && currenti-1<matrix.length && visitats[currenti-1][currentj] == false) {
        cola.push([currenti-1,currentj]);
        visitats[currenti-1][currentj] = true;
        
        matrixpath[currenti-1][currentj].push(...matrixpath[currenti][currentj],UP);
      }
      if (currentj+1>=0 && currenti>=0 && currentj+1<matrix[0].length && currenti<matrix.length && visitats[currenti][currentj+1] == false) {
        cola.push([currenti,currentj+1]);
        visitats[currenti][currentj+1] = true;
        
        matrixpath[currenti][currentj+1].push(...matrixpath[currenti][currentj],RIGHT);
      }
      if (currentj-1>=0 && currenti>=0 && currentj-1<matrix[0].length && currenti<matrix.length && visitats[currenti][currentj-1] == false) {
        cola.push([currenti,currentj-1]);
        visitats[currenti][currentj-1] = true;

        matrixpath[currenti][currentj-1].push(...matrixpath[currenti][currentj],LEFT);
      }
    }
  }
} 

bfs(2,3);

for(let i=0; i < matrixpath[monedaI][monedaJ].length; i++){
  console.log(matrixpath[monedaI][monedaJ][i]);

  // ara s'ha de moure
  if (matrixpath[monedaI][monedaJ][i] == DOWN) if (squareY < canvas.height - squareSize) {
    squareY += moveSpeed;
  }
}
