import { BaseIllustration } from './base-illustration';
import { createFloatingAnimation, createPulseAnimation, createFadeAnimation } from './animation-utils';
import { defaultPalette } from './theme';

export function CustomIllustration() {
  return (
    <BaseIllustration>
      {/* Your custom SVG content */}
      <g>
        {/* Example floating element */}
        <circle
          cx="400"
          cy="300"
          r="50"
          fill={defaultPalette.primary[0]}
        >
          {createFloatingAnimation(300)}
        </circle>

        {/* Example pulsing element */}
        <rect
          x="200"
          y="200"
          width="100"
          height="100"
          fill={defaultPalette.secondary[0]}
        >
          {createPulseAnimation({ duration: 3 })}
        </rect>

        {/* Example fading element */}
        <path
          d="M500 200 L600 300 L500 400 Z"
          fill={defaultPalette.accent[0]}
        >
          {createFadeAnimation({ duration: 4 })}
        </path>
      </g>
    </BaseIllustration>
  );
}