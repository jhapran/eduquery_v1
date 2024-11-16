import { ColorPalette } from './types';

export const defaultPalette: ColorPalette = {
  primary: ['#6366F1', '#818CF8', '#4F46E5'],
  secondary: ['#FF6B6B', '#FF9999', '#FF5252'],
  accent: ['#4ECDC4', '#45B7D1', '#38B2AC'],
  background: ['#F3E8FF', '#E9D5FF', '#F5F3FF']
};

export const darkPalette: ColorPalette = {
  primary: ['#818CF8', '#6366F1', '#4F46E5'],
  secondary: ['#FF9999', '#FF6B6B', '#FF5252'],
  accent: ['#45B7D1', '#4ECDC4', '#38B2AC'],
  background: ['#1F2937', '#111827', '#374151']
};

export const gradients = {
  primary: 'url(#primary-gradient)',
  secondary: 'url(#secondary-gradient)',
  accent: 'url(#accent-gradient)'
};