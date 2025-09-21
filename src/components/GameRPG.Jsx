import { useEffect, useRef } from 'react';

function GameRPG() {
  const canvasRef = useRef(null);

  useEffect(() => {// ...di dalam useEffect
const enemies = [{ x: 150, y: 100 }];
let score = 0;

const drawEnemies = () => {
  ctx.fillStyle = 'red';
  enemies.forEach(enemy => {
    ctx.fillRect(enemy.x, enemy.y, 15, 15);
  });
};

const checkCollision = () => {
  enemies.forEach((enemy, index) => {
    if (Math.abs(player.x - enemy.x) < 20 && Math.abs(player.y - enemy.y) < 20) {
      score++;
      enemies.splice(index, 1);
    }
  });
};

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawEnemies();
  checkCollision();
  ctx.fillText(`Skor: ${score}`, 10, 20);
  requestAnimationFrame(gameLoop);
};
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Contoh karakter sederhana
    const player = { x: 50, y: 50, size: 20 };
    
    const drawPlayer = () => {
      ctx.fillStyle = 'blue';
      ctx.fillRect(player.x, player.y, player.size, player.size);
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayer();
      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Event listener keyboard
    const handleKeyDown = (e) => {
      switch(e.key) {
        case 'ArrowUp': player.y -= 5; break;
        case 'ArrowDown': player.y += 5; break;
        // Tambahkan arah lain
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return <canvas ref={canvasRef} width="400" height="300"></canvas>;
}
