'use client';

export default function StarBackground() {
  const stars = [...Array(150)].map((_, i) => {
    const size = Math.random() * 2 + 1;         // star size
    const left = Math.random() * 100;           // horizontal %
    const topStart = Math.random() * 100 - 20;  // start above screen
    const duration = Math.random() * 15 + 10;   // speed
    const delay = Math.random() * 10;           // stagger start

    return (
      <span
        key={i}
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${topStart}vh`,
          left: `${left}%`,
          background: 'yellow',
          borderRadius: '50%',
          boxShadow: `0 0 2px yellow, 0 0 6px yellow, 0 0 12px yellow`,
          animation: `fall ${duration}s linear ${delay}s infinite`,
          position: 'absolute',
        }}
      >
        <span
          style={{
            content: "''",
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: `${size * 0.6}px`,
            height: `${size / 5}px`,
            background: 'yellow',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            boxShadow: `0 0 2px yellow, 0 0 6px yellow`,
          }}
        />
        <span
          style={{
            content: "''",
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: `${size / 5}px`,
            height: `${size * 0.6}px`,
            background: 'yellow',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            boxShadow: `0 0 2px yellow, 0 0 6px yellow`,
          }}
        />
      </span>
    );
  });

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">{stars}</div>
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(120vh); }
        }
      `}</style>
    </>
  );
}
