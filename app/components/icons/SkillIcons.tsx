import { ReactNode } from 'react';
import { FaJs, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

interface IconProps {
  className?: string;
}

export const JavaScriptIcon: React.FC<IconProps> = ({ className }) => (
  <FaJs className={`${className} text-yellow-500 dark:text-yellow-300`} />
);

export const ReactIcon: React.FC<IconProps> = ({ className }) => (
  <FaReact className={`${className} text-blue-600 dark:text-blue-400`} />
);

export const NextjsIcon: React.FC<IconProps> = ({ className }) => (
  <FaReact className={`${className} text-red-600 dark:text-red-400`} />
);

export const NodejsIcon: React.FC<IconProps> = ({ className }) => (
  <FaNodeJs className={`${className} text-green-600 dark:text-green-400`} />
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className }) => (
  <SiTypescript className={`${className} text-blue-600 dark:text-blue-400`} />
);

export const TailwindIcon: React.FC<IconProps> = ({ className }) => (
  <SiTailwindcss className={`${className} text-purple-600 dark:text-purple-400`} />
);

export const GitIcon: React.FC<IconProps> = ({ className }) => (
  <FaGit className={`${className} text-red-600 dark:text-red-400`} />
);

export const MongoDBIcon: React.FC<IconProps> = ({ className }) => (
  <SiMongodb className={`${className} text-green-600 dark:text-green-400`} />
);




