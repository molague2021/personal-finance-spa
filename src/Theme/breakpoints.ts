const values = {
  xs: 0,
  sm: 768,
  md: 1366,
  lg: 1536,
  xl: 1920,
} as const;

const breakpoints = { values } as const;

export { values, breakpoints };
