const customGrey = {
  50: '#FAFAFA',
  100: '#F4F4F5',
  200: '#E4E4E7',
  300: '#D4D4D8',
  400: '#A1A1AA',
  500: '#71717A',
  600: '#52525B',
  700: '#3F3F46',
  750: '#313135',
  800: '#27272A',
  850: '#1F1F23',
  900: '#18181B',
  950: '#09090b',
}

const tailwindGray = {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  750: '#374151',
  800: '#1f2937',
  850: '#1f2937',
  900: '#111827',
}

const tailwindSlate = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  750: '#334155',
  800: '#1e293b',
  850: '#334155',
  900: '#0f172a',
  950: '#334155',
}

export const designTokens = {
  white: '#ffffff',
  black: '#000000',
  neutral: customGrey,
  primaryLight: {
    main: '#1D4ED8',
    light: '#3E7FFF',
  },
  primaryDark: {
    main: '#93c5fd',
    light: '#58a2ff',
  },
  error: {
    light: '#dc2626',
    dark: '#ef4444',
  },
  success: {
    dark: '#22C55E',
    light: '#15803d',
  },
  warning: {
    light: '#d97706',
    dark: '#f59e0b',
  },
  secondary: {
    dark: '#5122D4',
    main: '#7C4DFF',
    light: '#9A76FF',
  },
  pink: {
    dark: '#C9367E',
    main: '#EC4899',
    light: '#FB7ABA',
  },
  green: {
    dark: '#009887',
    main: '#14B8A6',
    light: '#57CFC2',
  },
} as const
