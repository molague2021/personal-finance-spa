const values = {
  xs: 376,
  sm: 769,
  md: 769,
  lg: 1440,
  xl: 1920,
} as const;

const breakpoints = { values } as const;

export { values, breakpoints };
