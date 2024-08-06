import '../App.css';
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
        color: {
            value: "#111827",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
        onClick: {
            enable: false,
            mode: "push",
        },
        onHover: {
            enable: true,
            mode: "grab",
        },
        resize: true,
        },
        modes: {
        grab: {
            distance: 150,
            line_linked: {
            opacity: 1,
            },
        },
        push: {
            particles_nb: 4,
        },
        remove: {
            particles_nd: 2,
        },
        repulse: {
            distance: 200,
            duration: 0.4,
        },
        },
    },
    fullScreen: { enable: false },
    particles: {
        color: {
        value: "#ffffff",
        },
        links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
        },
        move: {
        direction: "none",
        enable: true,
        outModes: {
            default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
        attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
        },
        },
        number: {
        density: {
            enable: true,
            area: 800,
        },
        value: 80,
        },
        opacity: {
        value: 0.3,
        random: false,
        anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
        },
        },
        shape: {
        type: "circle",
        stroke: {
            width: 0,
            color: "#000000",
        },
        polygon: {
            nb_sides: 5,
        },
        },
        size: {
        value: 2,
        random: true,
        anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
        },
        },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticlesComponent;
