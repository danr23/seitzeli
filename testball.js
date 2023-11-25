
var balls = [];
function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeColor = "black";
    this.fillColor = "red";
}
function addBall() {
speed = parseFloat(document.getElementById("speed").value);
var radius = parseFloat(document.getElementById("ballSize").value);
var ball = new Ball(50,50,speed,speed,radius);
balls.push(ball);
}
function clearBalls() {
balls = [];
}
img = new Image();
function drawFrame() {

img.src = document.getElementById("person").value;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Вызываем метод beginPath(), чтобы убедиться,
    // что мы не рисуем часть уже нарисованного содержимого холста
    context.beginPath();

    // Перебираем все мячики
    for(var i=0; i<balls.length; i++) {
        // Перемещаем каждый мячик в его новую позицию
        var ball = balls[i];
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Добавляем эффект "гравитации", который ускоряет падение мячика
        if ((ball.y) < canvas.height) ball.dy += 0.22;

        // Добавляем эффект "трения", который замедляет движение мячика
        ball.dx = ball.dx * 0.998;

        // Если мячик натолкнулся на край холста, отбиваем его
        if ((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)) {
            ball.dx = speed;
            ball.dy = speed;
            ball.y = 50;
            ball.x = 50;
        }

        // Если мячик упал вниз, отбиваем его, но слегка уменьшаем скорость
        if ((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)) { 
            ball.dy = -ball.dy*0.96; 
        }

        // Проверяем, хочет ли пользователь соединительные линии
        if (!document.getElementById("connectedBalls").checked) {
            context.beginPath();
            context.fillStyle = ball.fillColor;
        }
        else {
            context.fillStyle = "white";
        }

        // Рисуем мячик
        context.drawImage(img, ball.x, ball.y, ball.radius, ball.radius);
        context.lineWidth = 1;
        context.fill();
        context.stroke(); 
    }
	
    // Рисуем следующий кадр через 20 миллисекунд
    setTimeout("drawFrame()", 20);
}
window.onload = function() {
	   canvas = document.getElementById("drawingCanvas");
	   context = canvas.getContext("2d");
		 
	   setTimeout("drawFrame()", 20);
}
