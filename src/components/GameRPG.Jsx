import { useEffect, useRef } from 'react';

function GameRPG() {
  const canvasRef = useRef(null);

  useEffect(() => {
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
