import React, { useEffect, useRef } from 'react';

// Simple 2D FBM noise (fractal brownian motion) using perlin noise
function perlin(x: number, y: number) {
  // Hash
  function fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a: number, b: number, t: number) { return a + t * (b - a); }
  function grad(hash: number, x: number, y: number) {
    switch (hash & 3) {
      case 0: return  x + y;
      case 1: return -x + y;
      case 2: return  x - y;
      case 3: return -x - y;
      default: return 0;
    }
  }
  function hash(x: number, y: number) {
    return ((x * 374761393 + y * 668265263) ^ (x * 1274126177)) & 255;
  }
  const X = Math.floor(x), Y = Math.floor(y);
  const xf = x - X, yf = y - Y;
  const tl = grad(hash(X, Y), xf, yf);
  const tr = grad(hash(X + 1, Y), xf - 1, yf);
  const bl = grad(hash(X, Y + 1), xf, yf - 1);
  const br = grad(hash(X + 1, Y + 1), xf - 1, yf - 1);
  const u = fade(xf), v = fade(yf);
  return lerp(lerp(tl, tr, u), lerp(bl, br, u), v);
}
function fbm(x: number, y: number, octaves = 4, gain = 0.5, lacunarity = 2) {
  let amp = 1, freq = 1, sum = 0, norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += perlin(x * freq, y * freq) * amp;
    norm += amp;
    amp *= gain;
    freq *= lacunarity;
  }
  return sum / norm;
}

interface GlitchTextProps {
  text: string;
  fontSize?: number;
  className?: string;
  color?: string;
}

// You can use a Google Fonts import in your index.html or CSS for a cyber font like Orbitron or Share Tech Mono
// Example: <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">

const GlitchText: React.FC<GlitchTextProps> = ({ text, fontSize = 80, className = '', color = '#E21A2C' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    const width = canvas.width = 1200;
    const height = canvas.height = 200;
    ctx.font = `bold ${fontSize}px 'Orbitron', 'Share Tech Mono', 'VT323', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Animation state
    let startTime: number | null = null;
    let fade = 0; // 0 to 1
    let glitchIntensity = 1; // 1 to 0.15

    function drawCRTGlitch(frame: number, now: number) {
      if (!startTime) startTime = now;
      const elapsed = (now - startTime) / 1000;
      // Fade in: 0-1s, Glitch reduce: 1-3s
      fade = Math.min(1, elapsed / 1.0);
      if (elapsed < 1) {
        glitchIntensity = 1;
      } else if (elapsed < 3) {
        glitchIntensity = 1 - 0.85 * ((elapsed - 1) / 2);
      } else {
        glitchIntensity = 0.15;
      }

      ctx.clearRect(0, 0, width, height);
      // --- Draw base text to offscreen canvas for channel separation ---
      const off = document.createElement('canvas');
      off.width = width;
      off.height = height;
      const offCtx = off.getContext('2d')!;
      offCtx.clearRect(0, 0, width, height);
      offCtx.font = ctx.font;
      offCtx.textAlign = ctx.textAlign as CanvasTextAlign;
      offCtx.textBaseline = ctx.textBaseline as CanvasTextBaseline;
      offCtx.fillStyle = '#fff';
      offCtx.fillText(text, width / 2, height / 2);

      // --- RGB Channel Split (Blue/Red, angle 40deg, steps 16, spread 25%) ---
      const imageData = offCtx.getImageData(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      const steps = 16;
      const spread = 25 * glitchIntensity; // px
      const angle = 40 * Math.PI / 180;
      const dx = Math.cos(angle) * spread;
      const dy = Math.sin(angle) * spread;
      for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1);
        // Red
        ctx.save();
        ctx.globalAlpha = 0.07 * fade;
        ctx.drawImage(
          channelImage(imageData, 'r'),
          dx * t, dy * t
        );
        ctx.restore();
        // Blue
        ctx.save();
        ctx.globalAlpha = 0.07 * fade;
        ctx.drawImage(
          channelImage(imageData, 'b'),
          -dx * t, -dy * t
        );
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';

      // --- FBM Wavy distortion (vertical slice shift) ---
      const sliceCount = 32;
      const sliceHeight = height / sliceCount;
      for (let i = 0; i < sliceCount; i++) {
        const sy = i * sliceHeight;
        // FBM noise for wave
        const wave = fbm(i / 8, frame / 60, 8, 0.5, 2) * 18 * glitchIntensity;
        ctx.drawImage(
          off,
          0, sy, width, sliceHeight,
          wave, sy, width, sliceHeight
        );
      }

      // --- Vertical colored scanlines ---
      for (let x = 0; x < width; x += 4) {
        ctx.save();
        ctx.globalAlpha = 0.13 * fade + 0.07 * Math.sin(frame / 3 + x / 12) * fade;
        ctx.fillStyle = x % 12 === 0 ? '#0ff' : x % 12 === 4 ? '#f0f' : x % 12 === 8 ? '#ff0' : '#fff';
        ctx.fillRect(x, 0, 2, height);
        ctx.restore();
      }

      // --- Flicker ---
      if (Math.random() > 0.93 * (1 - glitchIntensity)) {
        ctx.save();
        ctx.globalAlpha = 0.18 * fade;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      // --- Vignette overlay ---
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.2,
        width / 2, height / 2, height * 0.7
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.45)');
      ctx.save();
      ctx.globalAlpha = 0.7 * fade;
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // --- Fade in ---
      ctx.save();
      ctx.globalAlpha = fade;
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();

      animationFrame = requestAnimationFrame((t) => drawCRTGlitch(frame + 1, t));
    }

    // Helper: extract a single channel from imageData
    function channelImage(imageData: ImageData, channel: 'r' | 'g' | 'b') {
      const c = document.createElement('canvas');
      c.width = imageData.width;
      c.height = imageData.height;
      const cctx = c.getContext('2d')!;
      const d = cctx.createImageData(imageData.width, imageData.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        d.data[i + 0] = channel === 'r' ? imageData.data[i + 0] : 0;
        d.data[i + 1] = channel === 'g' ? imageData.data[i + 1] : 0;
        d.data[i + 2] = channel === 'b' ? imageData.data[i + 2] : 0;
        d.data[i + 3] = imageData.data[i + 3];
      }
      cctx.putImageData(d, 0, 0);
      return c;
    }

    animationFrame = requestAnimationFrame((t) => drawCRTGlitch(0, t));
    return () => cancelAnimationFrame(animationFrame);
  }, [text, fontSize, color]);

  return (
    <div className={className} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: fontSize * 1.8, maxWidth: '100%' }} />
    </div>
  );
};

export default GlitchText; 