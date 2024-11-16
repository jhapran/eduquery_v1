import { ReactNode } from 'react';
import { ColorPalette } from './types';
import { defaultPalette } from './theme';

interface BaseIllustrationProps {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  className?: string;
  palette?: ColorPalette;
  children: ReactNode;
}

export function BaseIllustration({
  width = "100%",
  height = "100%",
  viewBox = "0 0 800 600",
  className = "",
  palette = defaultPalette,
  children
}: BaseIllustrationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette.primary[0]} />
          <stop offset="100%" stopColor={palette.primary[2]} />
        </linearGradient>
        <linearGradient id="secondary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette.secondary[0]} />
          <stop offset="100%" stopColor={palette.secondary[2]} />
        </linearGradient>
        <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette.accent[0]} />
          <stop offset="100%" stopColor={palette.accent[2]} />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}