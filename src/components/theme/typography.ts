const sizes = {
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.25: '0.8125rem', // 13px
  3.5: '0.875rem', // 14px
  3.75: '0.9375rem', // 15px
  4: '1rem', // 16px
  4.5: '1.125rem', // 18px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  7.5: '1.875rem', // 30px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  18: '4.5rem', // 72px
  20: '5rem', // 80px
};

const weights = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

const fontFamily = {
  poppins: '"Poppins", sans-serif',
  ibm: '"IBM Plex Sans", sans-serif',
};

const elements = {
  h1: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[12],
    fontWeight: weights.extraBold,
    letterSpacing: 'inherit',
    lineHeight: '115%',
    textTransform: 'uppercase',
  },
  h2: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[9],
    fontWeight: weights.extraBold,
    letterSpacing: 'inherit',
    lineHeight: '120%',
    textTransform: 'none',
  },
  h3: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[7.5],
    fontWeight: weights.bold,
    letterSpacing: 'inherit',
    lineHeight: '115%',
    textTransform: 'none',
  },
  h4: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[6],
    fontWeight: weights.semiBold,
    letterSpacing: '1%',
    lineHeight: '120%',
    textTransform: 'none',
  },
  h5: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[5],
    fontWeight: weights.semiBold,
    letterSpacing: 'inherit',
    lineHeight: '115%',
    textTransform: 'none',
  },
  h6: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[4.5],
    fontWeight: weights.semiBold,
    letterSpacing: 'inherit',
    lineHeight: '115%',
    textTransform: 'none',
  },
  p: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[3.75],
    fontWeight: weights.regular,
    letterSpacing: '2%',
    lineHeight: '150%',
    textTransform: 'none',
  },
  compact: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[3.25],
    fontWeight: weights.regular,
    letterSpacing: 'inherit',
    lineHeight: '125%',
    textTransform: 'none',
  },
  subheading: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: sizes[4],
    fontWeight: weights.bold,
    letterSpacing: 'inherit',
    lineHeight: sizes[5],
    textTransform: 'none',
  },
  label: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    fontSize: sizes[3],
    fontWeight: weights.regular,
    letterSpacing: '0.32px',
    lineHeight: sizes[5],
    textTransform: 'none',
  },
};

const typography = {
  sizes,
  weights,
  elements,
  fontFamily,
};

export default typography;
