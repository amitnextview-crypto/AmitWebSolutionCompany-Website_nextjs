'use client';
import { useEffect, useState, useMemo } from 'react';

export default function StarBackground() {
  const [isClient, setIsClient] = useState(false);

  // Wait until client to render stars
  useEffect(() => {
    setIsClient(true);
  }, []);

  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => {
      const size = Math.random() * 2 + 1;
      const left = Math.random() * 100;
      const topStart = Math.random() * 100 - 20;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;

      return { size, left, topStart, duration, delay, key: i };
    });
  }, []);

  if (!isClient) return null; // don't render anything on server

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        {stars.map((star) => (
          <span
            key={star.key}
            className="absolute"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.topStart}vh`,
              left: `${star.left}%`,
              background: 'yellow',
              borderRadius: '50%',
              boxShadow: `0 0 2px yellow, 0 0 6px yellow, 0 0 12px yellow`,
              animation: `fall ${star.duration}s linear ${star.delay}s infinite`,
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${star.size * 0.6}px`,
                height: `${star.size / 5}px`,
                background: 'yellow',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                boxShadow: `0 0 2px yellow, 0 0 6px yellow`,
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${star.size / 5}px`,
                height: `${star.size * 0.6}px`,
                background: 'yellow',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                boxShadow: `0 0 2px yellow, 0 0 6px yellow`,
              }}
            />
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(120vh); }
        }
      `}</style>
    </>
  );
}
