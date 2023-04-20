// FONT FAMILY
export const fontFamily = 'Roboto';

// FONT SIZE
export const fontSizes = {
  xs: '12px' as const,
  sm: '14px' as const,
  md: '16px' as const,
  lg: '20px' as const,
  xl: '24px' as const,
  xxl: '32px' as const,
  xxm: '40px' as const,
  xxxl: '48px' as const,
};

// FONT WEIGHT
export const fontWeight = {
  regular: 300 as const,
  medium: 400 as const,
  semiBold: 500 as const,
  bold: 700 as const,
  largeBold: 900 as const,
};

// LINE HEIGHTS
export const lineHeights = {
  xs: '14px' as const,
  sm: '16px' as const,
  md: '24px' as const,
  lg: '32px' as const,
  xl: '40px' as const,
  xxl: '48px' as const,
  xxxl: '56px' as const,
};

const StyleGuide = {
  typography: {
    headingsH1Regular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xxxl,
      lineHeight: lineHeights.xxxl,
    },
    headingsH1SemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.xxxl,
      lineHeight: lineHeights.xxxl,
    },
    headingsH1Bold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xxxl,
      lineHeight: lineHeights.xxxl,
    },
    headingsH1LargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.xxxl,
      lineHeight: lineHeights.xxxl,
    },
    headingsH2Regular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xxm,
      lineHeight: lineHeights.xxl,
    },
    headingsH2SemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.xxm,
      lineHeight: lineHeights.xxl,
    },
    headingsH2Bold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xxm,
      lineHeight: lineHeights.xxl,
    },
    headingsH2LargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.xxm,
      lineHeight: lineHeights.xxl,
    },
    headingsH3Regular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xxl,
      lineHeight: lineHeights.xl,
    },
    headingsH3SemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.xxl,
      lineHeight: lineHeights.xl,
    },
    headingsH3Bold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xxl,
      lineHeight: lineHeights.xl,
    },
    headingsH3LargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.xxl,
      lineHeight: lineHeights.xl,
    },
    headingsH4Regular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.lg,
    },
    headingsH4SemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.lg,
    },
    headingsH4Bold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.lg,
    },
    headingsH4LargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.lg,
    },
    headingsH5Regular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.md,
    },
    headingsH5SemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.md,
    },
    headingsH5Bold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.md,
    },
    headingsH5LargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.md,
    },
    bodyTextRegular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    bodyTextSemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    bodyTextBold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    bodyTextLargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    labelTextRegular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
    labelTextSemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
    labelTextBold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
    labelTextLargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
    smallLabelTextRegular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    smallLabelTextSemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    smallLabelTextBold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    smallLabelTextLargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    paragraphTextRegular: {
      fontFamily,
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.md,
    },
    paragraphTextSemiBold: {
      fontFamily,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.md,
    },
    paragraphTextBold: {
      fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.md,
    },
    paragraphTextLargeBold: {
      fontFamily,
      fontWeight: fontWeight.largeBold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.md,
    },
  },
};

export const tags: { [key: string]: keyof JSX.IntrinsicElements } = {
  headingsH1Regular: 'h1',
  headingsH1SemiBold: 'h1',
  headingsH1Bold: 'h1',
  headingsH1LargeBold: 'h1',

  headingsH2Regular: 'h2',
  headingsH2SemiBold: 'h2',
  headingsH2Bold: 'h2',
  headingsH2LargeBold: 'h2',

  headingsH3Regular: 'h3',
  headingsH3SemiBold: 'h3',
  headingsH3Bold: 'h3',
  headingsH3LargeBold: 'h3',

  headingsH4Regular: 'h4',
  headingsH4SemiBold: 'h4',
  headingsH4Bold: 'h4',
  headingsH4LargeBold: 'h4',

  headingsH5Regular: 'h5',
  headingsH5SemiBold: 'h5',
  headingsH5Bold: 'h5',
  headingsH5LargeBold: 'h5',

  bodyTextRegular: 'p',
  bodyTextSemiBold: 'p',
  bodyTextBold: 'p',
  bodyTextLargeBold: 'p',

  labelTextRegular: 'label',
  labelTextSemiBold: 'label',
  labelTextBold: 'label',
  labelTextLargeBold: 'label',

  smallLabelTextRegular: 'label',
  smallLabelTextSemiBold: 'label',
  smallLabelTextBold: 'label',
  smallLabelTextLargeBold: 'label',

  paragraphTextRegular: 'p',
  paragraphTextSemiBold: 'p',
  paragraphTextBold: 'p',
  paragraphTextLargeBold: 'p',
};

export default StyleGuide;
