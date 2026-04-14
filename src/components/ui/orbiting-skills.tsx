"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 
  | 'html' | 'css' | 'javascript' | 'typescript' 
  | 'react' | 'node' | 'tailwind' | 'nextjs' 
  | 'mongodb' | 'express' | 'socketio' | 'git'
  | 'python' | 'docker' | 'aws' | 'redis' | 'postgresql' | 'figma';

type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
      </svg>
    ),
    color: '#E34F26'
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6"/>
      </svg>
    ),
    color: '#1572B6'
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
      </svg>
    ),
    color: '#F7DF1E'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933"/>
      </svg>
    ),
    color: '#339933'
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
      </svg>
    ),
    color: '#06B6D4'
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111v2.111c-.352-.093-.76-.148-1.222-.148-.796 0-1.389.26-1.778.778-.389.519-.583 1.259-.583 2.222v5.305h-2.111V9.889h2.056v1.167c.259-.444.602-.787 1.028-1.028.426-.24.963-.37 1.611-.37zM7.111 6c.352 0 .648.111.889.333.241.222.361.519.361.889 0 .37-.12.671-.361.903-.241.231-.537.347-.889.347-.37 0-.671-.116-.903-.347-.231-.232-.347-.533-.347-.903 0-.37.116-.667.347-.889.232-.222.533-.333.903-.333zm-1.056 3.889h2.111v10.25H6.055V9.889z" fill="#3178C6"/>
      </svg>
    ),
    color: '#3178C6'
  },
  mongodb: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17.19 12.19c.47.63.7 1.34.7 2.13 0 1.95-1.39 3.51-3.11 3.51-1.72 0-3.11-1.56-3.11-3.51 0-.79.23-1.5.7-2.13L14.78 9l2.41 3.19zM14.78 0C11.13 0 8.07 1.99 6.42 4.96c-.35.63-.61 1.3-.78 2h-.01c-.04.18-.08.36-.1.54C5.2 6.08 4.3 5 4.3 5s-.2 1.4.6 3.3c-.6.9-1 1.9-1.2 3-.1.5-.1 1.1-.1 1.6 0 5.1 3.5 10 9.1 11.1 1.1.2 1.1.2 1.1.2s0 0 1.1-.2c5.6-1.1 9.1-6 9.1-11.1 0-.5 0-1.1-.1-1.6-.2-1.1-.6-2.1-1.2-3 .8-1.9.6-3.3.6-3.3s-.9 1.08-1.23 2.5c-.02-.18-.06-.36-.1-.54h-.01c-.17-.7-.43-1.37-.78-2C19.5 1.99 16.43 0 14.78 0zm0 2.4c1.17 0 2.22.46 2.97 1.19.49.48.88 1.07 1.13 1.73.23.6.35 1.25.35 1.93 0 .15-.01.29-.02.43-.01.07-.02.13-.03.2-1.28-.68-2.61-1.02-3.95-1.02-1.34 0-2.67.34-3.95 1.02-.01-.07-.02-.13-.03-.2-.01-.14-.02-.28-.02-.43 0-.68.12-1.33.35-1.93.25-.66.64-1.25 1.13-1.73.75-.73 1.8-1.19 2.97-1.19z" fill="#47A248"/>
      </svg>
    ),
    color: '#47A248'
  },
  express: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-4.75 3.5l-2.25-3.5L14.75 15.5h-1.5l2.25-3.5-2.25-3.5h1.5l1.5 2.25 1.5-2.25h1.5L17 12l2.25 3.5h-1.5zM11 15.5h-1.5V11l-1.5 1.5V11l1.5-1.5h1.5v6zm-4.5 0h-3v-6h3v1.5h-1.5v1h1.5V13h-1.5v1h1.5v1.5z" fill="#888888"/>
      </svg>
    ),
    color: '#888888'
  },
  nextjs: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.162 17.514l-4.75-6.142v6.142H11.08v-9.39h1.332l4.896 6.326V8.124h1.332v9.39h-1.478z" fill="#000000"/>
      </svg>
    ),
    color: '#000000'
  },
  socketio: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-3.5 0L12 3.5 3.5 12 12 20.5 20.5 12zm-4.5 0l-4 4-4-4 4-4 4 4z" fill="#010101"/>
      </svg>
    ),
    color: '#010101'
  },
  git: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M23.546 10.93L13.067.452c-.604-.604-1.582-.604-2.187 0L8.855 2.47c-.002.003-.005.007-.007.01l-3.033 3.033c-.001.001-.002.003-.003.004L.452 10.93c-.604.605-.604 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.428-10.428c.604-.603.604-1.582 0-2.187zM12.122 17.332c-.546.546-1.432.546-1.979 0l-3.618-3.617c-.546-.547-.546-1.432 0-1.979.547-.546 1.432-.546 1.979 0l3.618 3.618c.546.547.546 1.432 0 1.978zm4.445-4.444c-.546.547-1.432.547-1.979 0l-3.618-3.618c-.546-.546-.546-1.432 0-1.978.547-.547 1.432-.547 1.979 0l3.618 3.618c.546.546.546 1.432 0 1.978z" />
      </svg>
    ),
    color: '#F05032'
  },
  python: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.97.062c-1.028.016-2 .168-2.687.406-1.438.5-1.5 1.563-1.5 1.563v1.594h4.594v.625h-6.188s-2.03.219-2.5 1.719c-.469 1.5-.031 3.5.031 3.5l1.625.031V7.125s.031-1.312 1.375-1.312h4.5c1.344 0 1.312-1.375 1.312-1.375V1.78s-.03-1.062-1.47-1.594c-.656-.25-1.531-.14-2.562-.125zm-2.063 1.03c.313 0 .563.25.563.563 0 .313-.25.563-.563.563a.561.561 0 0 1-.563-.563c0-.313.25-.563.563-.563zm-.125 7.156c-1.438-.5-1.5-1.563-1.5-1.563V5.094h-4.594v-.625h6.188s2.03-.219 2.5-1.719c.469-1.5.031-3.5-.031-3.5l-1.625-.031v2.375s-.031 1.312-1.375 1.312h-4.5c-1.344 0-1.312 1.375-1.312 1.375V9.47s.03 1.062 1.47 1.594c.656.25 1.531.14 2.562.125h.125a2.12 2.12 0 0 0-.125-3.156z" fill="#3776AB"/>
      </svg>
    ),
    color: '#3776AB'
  },
  docker: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V9.034a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.858c0 .102.083.185.185.185m-2.954-5.43h2.118c.103 0 .187-.083.187-.186V3.601a.187.187 0 00-.187-.186h-2.118a.186.186 0 00-.185.186v1.858c0 .102.082.185.185.185m2.954 2.714h2.119c.102 0 .186-.083.186-.186V6.32a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.859c0 .102.083.185.185.185m-2.954 2.714h2.118c.103 0 .187-.083.187-.185V9.034a.187.187 0 00-.187-.186h-2.118a.186.186 0 00-.185.186v1.858c0 .102.082.185.185.185m-2.955-2.714h2.119c.102 0 .185-.083.185-.186V6.32a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.859c0 .102.084.185.186.185m-2.954 2.714h2.119c.102 0 .185-.083.185-.185V9.034a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.858c0 .102.084.185.186.185m0-2.714h2.119c.102 0 .185-.083.185-.186V6.32a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.859c0 .102.084.185.186.185m0-2.715h2.119c.102 0 .185-.083.185-.186V3.601a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.858c0 .102.084.185.186.185M.663 8.006c.102 0 .185-.083.185-.186V5.961a.186.186 0 00-.185-.186H.186A.186.186 0 000 5.961v1.859c0 .102.083.185.186.185h.477z" fill="#2496ED" />
      </svg>
    ),
    color: '#2496ED'
  },
  aws: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.125 15.5h-1.5V11l-1.5 1.5V11l1.5-1.5h1.5v6zm5.25-2.25c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z" fill="#FF9900"/>
      </svg>
    ),
    color: '#FF9900'
  },
  redis: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 4.5L18 8l-6 3.5L6 8l6-3.5zm0 15L6 16v-4.5l6 3.5 6-3.5V16l-6 3.5z" fill="#DC382D"/>
      </svg>
    ),
    color: '#DC382D'
  },
  postgresql: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.162 17.514l-4.75-6.142v6.142H11.08v-9.39h1.332l4.896 6.326V8.124h1.332v9.39h-1.478z" fill="#336791"/>
      </svg>
    ),
    color: '#336791'
  },
  figma: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.5 14.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm0-5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" fill="#F24E1E"/>
      </svg>
    ),
    color: '#F24E1E'
  },
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit: 4 skills
  { id: 'html', orbitRadius: 80, size: 38, speed: 1.2, iconType: 'html', phaseShift: 0, glowColor: 'cyan', label: 'HTML5' },
  { id: 'css', orbitRadius: 80, size: 40, speed: 1.2, iconType: 'css', phaseShift: Math.PI / 2, glowColor: 'cyan', label: 'CSS3' },
  { id: 'javascript', orbitRadius: 80, size: 38, speed: 1.2, iconType: 'javascript', phaseShift: Math.PI, glowColor: 'cyan', label: 'JavaScript' },
  { id: 'typescript', orbitRadius: 80, size: 40, speed: 1.2, iconType: 'typescript', phaseShift: (3 * Math.PI) / 2, glowColor: 'cyan', label: 'TypeScript' },
  
  // Middle Orbit: 6 skills
  { id: 'react', orbitRadius: 160, size: 48, speed: -0.8, iconType: 'react', phaseShift: 0, glowColor: 'purple', label: 'React' },
  { id: 'node', orbitRadius: 160, size: 42, speed: -0.8, iconType: 'node', phaseShift: (Math.PI / 3), glowColor: 'purple', label: 'Node.js' },
  { id: 'tailwind', orbitRadius: 160, size: 38, speed: -0.8, iconType: 'tailwind', phaseShift: (2 * Math.PI / 3), glowColor: 'purple', label: 'Tailwind' },
  { id: 'mongodb', orbitRadius: 160, size: 40, speed: -0.8, iconType: 'mongodb', phaseShift: Math.PI, glowColor: 'purple', label: 'MongoDB' },
  { id: 'express', orbitRadius: 160, size: 36, speed: -0.8, iconType: 'express', phaseShift: (4 * Math.PI / 3), glowColor: 'purple', label: 'Express' },
  { id: 'nextjs', orbitRadius: 160, size: 42, speed: -0.8, iconType: 'nextjs', phaseShift: (5 * Math.PI / 3), glowColor: 'purple', label: 'Next.js' },

  // Outer Orbit: 8 skills
  { id: 'socketio', orbitRadius: 240, size: 38, speed: 0.5, iconType: 'socketio', phaseShift: 0, glowColor: 'cyan', label: 'Socket.io' },
  { id: 'git', orbitRadius: 240, size: 36, speed: 0.5, iconType: 'git', phaseShift: (Math.PI / 4), glowColor: 'cyan', label: 'Git' },
  { id: 'python', orbitRadius: 240, size: 40, speed: 0.5, iconType: 'python', phaseShift: (2 * Math.PI / 4), glowColor: 'cyan', label: 'Python' },
  { id: 'docker', orbitRadius: 240, size: 38, speed: 0.5, iconType: 'docker', phaseShift: (3 * Math.PI / 4), glowColor: 'cyan', label: 'Docker' },
  { id: 'aws', orbitRadius: 240, size: 40, speed: 0.5, iconType: 'aws', phaseShift: Math.PI, glowColor: 'cyan', label: 'AWS' },
  { id: 'redis', orbitRadius: 240, size: 38, speed: 0.5, iconType: 'redis', phaseShift: (5 * Math.PI / 4), glowColor: 'cyan', label: 'Redis' },
  { id: 'postgresql', orbitRadius: 240, size: 40, speed: 0.5, iconType: 'postgresql', phaseShift: (6 * Math.PI / 4), glowColor: 'cyan', label: 'PostgreSQL' },
  { id: 'figma', orbitRadius: 240, size: 38, speed: 0.5, iconType: 'figma', phaseShift: (7 * Math.PI / 4), glowColor: 'cyan', label: 'Figma' },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';
// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isPaused || !mounted) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 80, glowColor: 'cyan', delay: 0 },
    { radius: 160, glowColor: 'purple', delay: 0.8 },
    { radius: 240, glowColor: 'cyan', delay: 1.6 }
  ];

  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          
        />
      </div>

      <div 
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[600px] md:h-[600px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>
 
        {mounted && (
          <>
            {/* Render glowing orbit paths */}
            {orbitConfigs.map((config) => (
              <GlowingOrbitPath
                key={`path-${config.radius}`}
                radius={config.radius}
                glowColor={config.glowColor}
                animationDelay={config.delay}
              />
            ))}
 
            {/* Render orbiting skill icons */}
            {skillsConfig.map((config) => {
              const angle = time * config.speed + (config.phaseShift || 0);
              return (
                <OrbitingSkill
                  key={config.id}
                  config={config}
                  angle={angle}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
