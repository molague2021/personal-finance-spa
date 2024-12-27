const baseFontSize = 16;

const typography = {
  fontFamily: 'Public Sans, serif',
  fontSize: baseFontSize,
  fontWeightBold: 800,
  htmlFontSize: baseFontSize,
  pxToRem: (size: number) => `${size / baseFontSize}rem`,
  h1: {
    fontSize: '6rem',
    fontWeight: 800,
    letterSpacing: '-1.5px',
    lineHeight: '1.084',
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    lineHeight: '1.2',
  },
  h3: {
    fontSize: '1rem',
    fontWeight: 800,
    letterSpacing: '0',
    lineHeight: '150%',
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 800,
    letterSpacing: '0.25px',
    lineHeight: '1.177',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 800,
    letterSpacing: '0.25px',
    lineHeight: '1.334',
  },
  h6: {
    fontSize: '1.125rem',
    fontWeight: 800,
    letterSpacing: '0.25px',
    lineHeight: '1.334',
  },
  subtitle1: {
    fontSize: '1.125rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: '1.334',
  },
  subtitle2: {
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: '1.5',
  },
  subtitle3: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: '1.429',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.5px',
    lineHeight: '1.5',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.25px',
    lineHeight: '1.429',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 800,
    letterSpacing: '0.25px',
    lineHeight: '1.143',
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: '1.334',
  },
  caption2: {
    fontSize: '0.625rem',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: '1.2',
  },
  overline: {
    fontSize: '0.625rem',
    fontWeight: 800,
    letterSpacing: '0.3px',
    lineHeight: '1.4',
    textTransform: 'uppercase',
  },
} as const;

export type Typography = typeof typography;
export { typography };
