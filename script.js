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

// mover el cuadradito
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