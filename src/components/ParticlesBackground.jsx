// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "#0B0C10" },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#c42ec7" },        // neon pink dots
          links: {                            // lines joining dots
            enable: true,
            color: "#c42ec7",
            distance: 150,
            opacity: 0.5,
            width: 1
          },
          move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 3 } },
          shape: { type: "circle" }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
          }
        },
        detectRetina: true
      }}
    />
  );
}
