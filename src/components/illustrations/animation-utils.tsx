import { AnimationConfig } from './types';

export const defaultAnimationConfig: AnimationConfig = {
  duration: 2,
  delay: 0,
  repeatCount: 'indefinite',
  type: 'ease-in-out'
};

export function createAnimation(
  attributeName: string,
  values: string,
  config: Partial<AnimationConfig> = {}
) {
  const finalConfig = { ...defaultAnimationConfig, ...config };
  
  return (
    <animate
      attributeName={attributeName}
      values={values}
      dur={`${finalConfig.duration}s`}
      begin={finalConfig.delay ? `${finalConfig.delay}s` : undefined}
      repeatCount={finalConfig.repeatCount}
      calcMode="spline"
      keySplines="0.4 0 0.2 1"
    />
  );
}

export function createTransform(
  type: 'translate' | 'scale' | 'rotate',
  from: string,
  to: string,
  config: Partial<AnimationConfig> = {}
) {
  return createAnimation(
    'transform',
    `${type}(${from});${type}(${to})`,
    config
  );
}

export function createMorphAnimation(
  paths: string[],
  config: Partial<AnimationConfig> = {}
) {
  return createAnimation(
    'd',
    paths.join(';'),
    config
  );
}

export function createFadeAnimation(
  config: Partial<AnimationConfig> = {}
) {
  return createAnimation(
    'opacity',
    '0;1;0',
    config
  );
}

export function createFloatingAnimation(
  baseY: number,
  amplitude: number = 20,
  config: Partial<AnimationConfig> = {}
) {
  return createAnimation(
    'transform',
    `translate(0,${baseY});translate(0,${baseY - amplitude});translate(0,${baseY})`,
    config
  );
}

export function createPulseAnimation(
  config: Partial<AnimationConfig> = {}
) {
  return createAnimation(
    'transform',
    'scale(1);scale(1.1);scale(1)',
    config
  );
}