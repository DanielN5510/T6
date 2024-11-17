// Obtén el elemento canvas y el contexto de dibujo
const canvas = document.getElementById('semaforo');
const ctx = canvas.getContext('2d');

// Dibuja el fondo gris oscuro del semáforo
ctx.fillStyle = '#333';
ctx.fillRect(0, 0, 100, 300);

// Dibuja el círculo rojo (parte superior)
ctx.beginPath();
ctx.arc(50, 60, 30, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// Dibuja el círculo amarillo (centro)
ctx.beginPath();
ctx.arc(50, 150, 30, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();

// Dibuja el círculo verde (parte inferior)
ctx.beginPath();
ctx.arc(50, 240, 30, 0, Math.PI * 2);
ctx.fillStyle = 'green';
ctx.fill();