import "./Background.css";
import { useRef, useEffect } from "react";

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // just to make  sure the canvas exists due to virtual DOM

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const ctx = canvas.getContext("2d");

    // the number od stable start is currently 100, I think it looks more realistic  with less starts.
    const stableStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
    }));

    const twinklingStars = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.003 + 0.001, //increasing the number would increase the speed
      offset: Math.random() * Math.PI * 2,
    }));

    // shooting star state
    let shootingStar = null;

    function newShootingStar() {
      shootingStar = {
        x: Math.random() * canvas.width * 0.7, // start in upper portion
        y: Math.random() * canvas.height * 0.3, // start near top
        length: Math.random() * 80 + 60, // trail length
        speed: 4,
        angle: Math.PI / 4, //  math.PI is 180,  180/4 = 45 degrees making it diagonal
        opacity: 1,
        active: true,
      };
    }

    function drawStable() {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#000000");
      gradient.addColorStop(1, "#152331");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stableStars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    }

    function drawShootingStar() {
      if (!shootingStar || !shootingStar.active) return;

      const { x, y, length, angle, opacity } = shootingStar;

      // tail end of the trail
      const tailX = x - Math.cos(angle) * length;
      const tailY = y - Math.sin(angle) * length;

      const gradient = ctx.createLinearGradient(tailX, tailY, x, y);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.stroke();

      // move it forward
      shootingStar.x += Math.cos(angle) * shootingStar.speed;
      shootingStar.y += Math.sin(angle) * shootingStar.speed;

      // fade out as it travels
      shootingStar.opacity -= 0.012;

      // deactivate when faded or off screen
      if (
        shootingStar.opacity <= 0 ||
        shootingStar.x > canvas.width ||
        shootingStar.y > canvas.height
      ) {
        shootingStar.active = false;
      }
    }

    newShootingStar(); // fire once immediately
    // then fire every 30 seconds
    const interval = setInterval(newShootingStar, 5000);

    let frame;

    function animate(time) {
      drawStable();

      twinklingStars.forEach((star) => {
        const opacity =
          0.2 + 0.8 * (0.5 + 0.5 * Math.sin(time * star.speed + star.offset));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      drawShootingStar();

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="background" ref={canvasRef}></canvas>;
}

export default Background;
