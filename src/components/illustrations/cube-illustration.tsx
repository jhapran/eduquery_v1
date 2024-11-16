import { BaseIllustration } from './base-illustration';
import { createFloatingAnimation, createPulseAnimation } from './animation-utils';
import { defaultPalette } from './theme';

export function CubeIllustration() {
  return (
    <BaseIllustration viewBox="0 0 1024 1024">
      <defs>
        <clipPath id="cube-clip">
          <rect width="1024" height="1024" x="0" y="0"/>
        </clipPath>
      </defs>
      
      {/* Top Layer - Teal Cubes */}
      <g transform="matrix(6,0,0,6,288.002,275.81)" opacity="1">
        {/* Left Cube Face */}
        <g transform="matrix(1,0,0,1,21.166,38.496)">
          <path
            fill="rgb(15,204,206)"
            d="M-16.167,-15.585L-16.167,-3.094L16.167,15.585L16.167,3.094L-16.167,-15.585z"
          >
            {createFloatingAnimation(0, 5, { duration: 3 })}
          </path>
          <path
            stroke="rgb(18,19,48)"
            strokeWidth="2"
            fill="none"
            d="M-16.167,-15.585L-16.167,-3.094L16.167,15.585L16.167,3.094L-16.167,-15.585z"
          />
        </g>

        {/* Right Cube Face */}
        <g transform="matrix(1,0,0,1,53.5,38.496)">
          <path
            fill="rgb(15,204,206)"
            d="M16.167,-15.585L16.167,-3.094L-16.167,15.585L-16.167,3.094L16.167,-15.585z"
          >
            {createFloatingAnimation(0, 5, { duration: 3, delay: 0.2 })}
          </path>
          <path
            stroke="rgb(18,19,48)"
            strokeWidth="2"
            fill="none"
            d="M16.167,-15.585L16.167,-3.094L-16.167,15.585L-16.167,3.094L16.167,-15.585z"
          />
        </g>

        {/* Top Cube Face */}
        <g transform="matrix(1,0,0,1,37.333,23.295)">
          <path
            fill="rgb(15,204,206)"
            d="M-32.333,-0.383L-0.001,18.294L32.333,-0.383L-0.001,-18.294L-32.333,-0.383z"
          >
            {createPulseAnimation({ duration: 4 })}
          </path>
          <path
            stroke="rgb(18,19,48)"
            strokeWidth="2"
            fill="none"
            d="M-32.333,-0.383L-0.001,18.294L32.333,-0.383L-0.001,-18.294L-32.333,-0.383z"
          />
        </g>
      </g>

      {/* Middle Layer - Yellow Cubes */}
      <g transform="matrix(6,0,0,6,288.002,350.758)" opacity="1">
        {/* Cube structure repeated with yellow fill */}
        <g transform="matrix(1,0,0,1,21.166,38.496)">
          <path
            fill="rgb(255,204,51)"
            d="M-16.167,-15.585L-16.167,-3.092L16.167,15.585L16.167,3.094L-16.167,-15.585z"
          >
            {createFloatingAnimation(0, 5, { duration: 3, delay: 0.4 })}
          </path>
          <path
            stroke="rgb(18,19,48)"
            strokeWidth="2"
            fill="none"
            d="M-16.167,-15.585L-16.167,-3.092L16.167,15.585L16.167,3.094L-16.167,-15.585z"
          />
        </g>
      </g>

      {/* Bottom Layer - Red Cubes */}
      <g transform="matrix(6,0,0,6,288.002,425.708)" opacity="1">
        {/* Cube structure repeated with red fill */}
        <g transform="matrix(1,0,0,1,21.166,38.496)">
          <path
            fill="rgb(229,94,72)"
            d="M-16.167,-15.585L-16.167,-3.094L16.167,15.585L16.167,3.094L-16.167,-15.585z"
          >
            {createFloatingAnimation(0, 5, { duration: 3, delay: 0.6 })}
          </path>
          <path
            stroke="rgb(18,19,48)"
            strokeWidth="2"
            fill="none"
            d="M-16.167,-15.585L-16.167,-3.094L16.167,15.585L16.167,3.094L-16.167,-15.585z"
          />
        </g>
      </g>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1024}
          cy={Math.random() * 1024}
          r="4"
          fill={[
            defaultPalette.primary[0],
            defaultPalette.secondary[0],
            defaultPalette.accent[0]
          ][i % 3]}
          opacity="0.3"
        >
          {createFloatingAnimation(
            Math.random() * 1024,
            30,
            { duration: 2 + Math.random() * 2, delay: Math.random() }
          )}
        </circle>
      ))}
    </BaseIllustration>
  );
}