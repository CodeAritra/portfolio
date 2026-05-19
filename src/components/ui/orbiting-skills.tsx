"use client"
import React, { useEffect, useState, memo } from 'react';
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiTailwindcss, SiNextdotjs,
  SiMongodb, SiExpress, SiSocketdotio, SiGit,
  SiPython, SiDocker, SiRedis,
  SiPostgresql, SiFigma
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
 
// --- Type Definitions ---
type IconType =
  | 'html' | 'css' | 'javascript' | 'typescript'
  | 'react' | 'node' | 'tailwind' | 'nextjs'
  | 'mongodb' | 'express' | 'socketio' | 'git'
  | 'python' | 'docker' | 'aws' | 'redis' | 'postgresql' | 'figma' | 'reactNative';
 
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
}
 
interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}
 
// --- Verified Brand Icons ---
const iconComponents: Record<IconType, { component: React.ComponentType<any>; color: string }> = {
  html: { component: SiHtml5, color: '#E34F26' },
  css: { component: SiCss, color: '#1572B6' },
  javascript: { component: SiJavascript, color: '#F7DF1E' },
  typescript: { component: SiTypescript, color: '#3178C6' },
  react: { component: SiReact, color: '#61DAFB' },
  reactNative: {
    component: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
        <ellipse cx="12" cy="10" rx="4" ry="1.5" transform="rotate(30 12 10)" />
        <ellipse cx="12" cy="10" rx="4" ry="1.5" transform="rotate(90 12 10)" />
        <ellipse cx="12" cy="10" rx="4" ry="1.5" transform="rotate(150 12 10)" />
      </svg>
    ),
    color: '#61DAFB'
  },
  node: { component: SiNodedotjs, color: '#339933' },
  tailwind: { component: SiTailwindcss, color: '#06B6D4' },
  nextjs: { component: SiNextdotjs, color: '#000000' },
  mongodb: { component: SiMongodb, color: '#47A248' },
  express: { component: SiExpress, color: '#000000' },
  socketio: { component: SiSocketdotio, color: '#000000' },
  git: { component: SiGit, color: '#F05032' },
  python: { component: SiPython, color: '#3776AB' },
  docker: { component: SiDocker, color: '#2496ED' },
  aws: { component: FaAws, color: '#FF9900' },
  redis: { component: SiRedis, color: '#DC382D' },
  postgresql: { component: SiPostgresql, color: '#336791' },
  figma: { component: SiFigma, color: '#F24E1E' },
};
 
// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
 
  return IconComponent ? (
    <IconComponent
      className="w-full h-full"
      style={{ color: iconComponents[type]?.color }}
    />
  ) : null;
});
SkillIcon.displayName = 'SkillIcon';
 
// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit: 4 skills
  { id: 'html', orbitRadius: 80, size: 38, speed: 1.2, iconType: 'html', phaseShift: 0, glowColor: 'cyan', label: 'HTML5' },
  { id: 'css', orbitRadius: 80, size: 40, speed: 1.2, iconType: 'css', phaseShift: Math.PI / 2, glowColor: 'cyan', label: 'CSS3' },
  { id: 'javascript', orbitRadius: 80, size: 38, speed: 1.2, iconType: 'javascript', phaseShift: Math.PI, glowColor: 'cyan', label: 'JavaScript' },
  { id: 'typescript', orbitRadius: 80, size: 40, speed: 1.2, iconType: 'typescript', phaseShift: (3 * Math.PI) / 2, glowColor: 'cyan', label: 'TypeScript' },
 
  // Middle Orbit: 7 skills
  { id: 'react', orbitRadius: 160, size: 48, speed: -0.8, iconType: 'react', phaseShift: 0, glowColor: 'purple', label: 'React' },
  { id: 'reactNative', orbitRadius: 160, size: 42, speed: -0.8, iconType: 'reactNative', phaseShift: (2 * Math.PI / 7), glowColor: 'purple', label: 'React Native' },
  { id: 'node', orbitRadius: 160, size: 42, speed: -0.8, iconType: 'node', phaseShift: (4 * Math.PI / 7), glowColor: 'purple', label: 'Node.js' },
  { id: 'tailwind', orbitRadius: 160, size: 38, speed: -0.8, iconType: 'tailwind', phaseShift: (6 * Math.PI / 7), glowColor: 'purple', label: 'Tailwind' },
  { id: 'mongodb', orbitRadius: 160, size: 40, speed: -0.8, iconType: 'mongodb', phaseShift: (8 * Math.PI / 7), glowColor: 'purple', label: 'MongoDB' },
  { id: 'express', orbitRadius: 160, size: 36, speed: -0.8, iconType: 'express', phaseShift: (10 * Math.PI / 7), glowColor: 'purple', label: 'Express' },
  { id: 'nextjs', orbitRadius: 160, size: 42, speed: -0.8, iconType: 'nextjs', phaseShift: (12 * Math.PI / 7), glowColor: 'purple', label: 'Next.js' },
 
  // Outer Orbit: 7 skills
  { id: 'socketio', orbitRadius: 240, size: 38, speed: 0.5, iconType: 'socketio', phaseShift: 0, glowColor: 'cyan', label: 'Socket.io' },
  { id: 'git', orbitRadius: 240, size: 36, speed: 0.5, iconType: 'git', phaseShift: (2 * Math.PI / 7), glowColor: 'cyan', label: 'Git' },
  { id: 'python', orbitRadius: 240, size: 40, speed: 0.5, iconType: 'python', phaseShift: (4 * Math.PI / 7), glowColor: 'cyan', label: 'Python' },
  { id: 'docker', orbitRadius: 240, size: 38, speed: 0.5, iconType: 'docker', phaseShift: (6 * Math.PI / 7), glowColor: 'cyan', label: 'Docker' },
  { id: 'aws', orbitRadius: 240, size: 40, speed: 0.5, iconType: 'aws', phaseShift: (8 * Math.PI / 7), glowColor: 'cyan', label: 'AWS' },
  { id: 'redis', orbitRadius: 240, size: 38, speed: 0.5, iconType: 'redis', phaseShift: (10 * Math.PI / 7), glowColor: 'cyan', label: 'Redis' },
  { id: 'postgresql', orbitRadius: 240, size: 40, speed: 0.5, iconType: 'postgresql', phaseShift: (12 * Math.PI / 7), glowColor: 'cyan', label: 'PostgreSQL' },
];
 
// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, size, iconType, label } = config;
 
  // Compute animation speed values
  const speedScale = 0.4;
  const duration = (2 * Math.PI) / (Math.abs(config.speed) * speedScale);
  const initialAngle = (config.phaseShift || 0) * (180 / Math.PI);
 
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate3d(-50%, -50%, 0) rotate(${initialAngle}deg) translateX(${config.orbitRadius}px) rotate(${-initialAngle}deg)`,
        animation: `orbit-${id} ${duration}s linear infinite`,
        willChange: 'transform',
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-white
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700
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
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 dark:bg-gray-100/95 backdrop-blur-sm rounded text-xs text-white dark:text-gray-900 whitespace-nowrap pointer-events-none">
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
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);
 
  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 80, glowColor: 'cyan', delay: 0 },
    { radius: 160, glowColor: 'purple', delay: 0.8 },
    { radius: 240, glowColor: 'cyan', delay: 1.6 }
  ];
 
  // Generate high-performance hardware-accelerated dynamic keyframes for orbits
  const dynamicStyles = skillsConfig.map((config) => {
    const direction = config.speed < 0 ? -1 : 1;
    const initialAngle = (config.phaseShift || 0) * (180 / Math.PI);
    const endAngle = initialAngle + (360 * direction);
 
    return `
      @keyframes orbit-${config.id} {
        0% {
          transform: translate3d(-50%, -50%, 0) rotate(${initialAngle}deg) translateX(${config.orbitRadius}px) rotate(${-initialAngle}deg);
        }
        100% {
          transform: translate3d(-50%, -50%, 0) rotate(${endAngle}deg) translateX(${config.orbitRadius}px) rotate(${-endAngle}deg);
        }
      }
    `;
  }).join('\n');
 
  return (
    <div className="w-full flex items-center justify-center overflow-hidden h-[340px] sm:h-[460px] md:h-[600px]">
      <style dangerouslySetInnerHTML={{ __html: dynamicStyles }} />
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" />
      </div>
 
      <div
        className="relative w-[600px] h-[600px] flex items-center justify-center scale-[0.55] sm:scale-[0.75] md:scale-100"
      >
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-linear-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
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
        {skillsConfig.map((config) => (
          <OrbitingSkill
            key={config.id}
            config={config}
          />
        ))}
      </div>
    </div>
  );
}
