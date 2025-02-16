export const colors = {
  white: '#fff',
  black: '#000',
  primary: '#2b3674',
  secondary: '#5b6173',
  warning: '#8d5f19',
  success: '#00856a',
  error: '#e31a1a',
  danger: '#d00e56',
  gray: '#f4f7fe',
  grey: '#eff4fb',
  grayest: '#fafcfe',
  'indigo-dark': '#0b1437',
  'indigo-light': '#1b254b',
  foreground: '#3a4f8f',
  'army-green': '#273156',
  indigo: '#111C44',
  amber: {
    450: '#E0E5F2',
  },
  blue: {
    450: '#4318ff',
  },
  purple: {
    50: '#8f9bba',
    150: '#e3daff',
    650: '#868cff',
    750: '#7551ff',
  },
  green: {
    700: '#00856a',
  },
  red: { 50: '#feefee', 750: '#ee5d50' },
};

export const backgroundColor = {
  light: colors.gray,
  dark: colors['indigo-dark'],
  primary: '#3965ff',
  content1: colors['indigo-light'],
};

export const backgroundImages = {
  'gradient-primary': `linear-gradient(135deg, ${colors.purple[650]}, ${colors.blue[450]})`,
  'gradient-gray':
    'linear-gradient(113deg, rgba(255, 255, 255, 0.47) 0%, rgba(255, 255, 255, 0) 110%)',
  'gradient-blue': 'linear-gradient(90deg, #4481eb 0%, #04befe 100%)',
};
