export interface AnimationConfig {
  duration?: number;
  delay?: number;
  repeatCount?: number | 'indefinite';
  type?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface ColorPalette {
  primary: string[];
  secondary: string[];
  accent: string[];
  background: string[];
}

export interface AnimatedPath {
  d: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  animation?: {
    attribute: 'd' | 'opacity' | 'transform' | string;
    values: string;
    config?: AnimationConfig;
  };
}