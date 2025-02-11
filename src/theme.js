export const theme = {
  colors: {
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    secondary: '#4b5563',
    background: '#f9fafb',
    white: '#ffffff',
    text: {
      primary: '#111827',
      secondary: '#4b5563',
      light: '#9ca3af'
    },
    hover: {
      primary: '#1d4ed8',
      light: '#f3f4f6'
    }
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.1)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1)'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.2s ease',
    slow: 'all 0.4s ease'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px'
  },
  typography: {
    fontSizes: {
      xs: 'clamp(0.75rem, 1vw, 0.875rem)',
      sm: 'clamp(0.875rem, 1.5vw, 1rem)',
      md: 'clamp(1rem, 1.5vw, 1.125rem)',
      lg: 'clamp(1.5rem, 3vw, 1.875rem)',
      xl: 'clamp(2rem, 4vw, 2.5rem)'
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  }
}; 