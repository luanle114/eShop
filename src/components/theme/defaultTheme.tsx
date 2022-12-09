const spaceMP = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 
  42, 44, 46, 48, 50, 52, 54, 56, 58, 60];

const borderRadius = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];

const fontSize = {
  desktop: {
    fz1: 10,
    fz2: 12,
    fz3: 13,
    fz4: 14,
    fz5: 16,
    fz6: 18,
    fz7: 20,
    fz8: 22,
    fz9: 24,
    fz10: 28,
    fz11: 32,
    fz12: 36
  },
  mobile: {
    fz1: 10,
    fz2: 12,
    fz3: 13,
    fz4: 14,
    fz5: 16,
    fz6: 18,
    fz7: 22,
    fz8: 24,
    fz9: 28,
    fz10: 32
  }
};

const lineHeights = {
  desktop: {
    lh1: 14,
    lh2: 16,
    lh3: 18,
    lh4: 20,
    lh5: 22,
    lh6: 24,
    lh7: 26,
    lh8: 28,
    lh9: 30,
    lh10: 32,
    lh11: 34,
  },
  mobile: {
    lh1: 14,
    lh2: 16,
    lh3: 18,
    lh4: 20,
    lh5: 22,
    lh6: 24,
    lh7: 26,
    lh8: 28,
    lh9: 30,
    lh10: 32,
    lh11: 34,
  }
};

const Fonts = {
  primary: 'Open Sans',
  secondary: `'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'`
};

const Colors = {
  primary: ['#5f249f', '#7229c0', '#977dff', '#e9e0f7', '#ff0000', '#f08000', '#0000ff', '#ffff00'],
  grayScale: [
    '#ffffff', /** 0 */
    '#f8f8f9', /** 1*/
    '#f6f3fc', /** 2*/
    '#f0f0f0', /** 3*/
    '#e6e6e6', /** 4*/
    '#cacaca', /** 5*/
    '#bcbec0', /** 6*/
    '#a7a9ac', /** 7*/
    '#737373', /** 8*/
    '#58595b', /** 9*/
    '#414042', /** 10*/
    '#1f2020', /** 11*/
    '#000000', /** 12 */
    '#0000001f', /** 13 */
  ],
}

const defaultTheme = {
  spaceMP,
  fontSize,
  lineHeights,
  Fonts,
  Colors,
  borderRadius
};

export default defaultTheme;