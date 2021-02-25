const breakpoints = {
  smallSmartphone: 320,
  smartphone: 480,

  smallTablet: 600,
  tablet: 801,
  bigTablet: 1025,

  laptops: 1281,

  smallDesktop: 1366,
  Desktop: 1735,
  bigDesktop: 1920,

  // smallSmartphone: 320,
  // smartphone: 480,
  // bigphone: 600,

  // smallTablet: 600,
  // tablet: 801,
  // bigTablet: 1025,

  // laptops: 1281,

  // smallDesktop: 1366,
  // Desktop: 1690,
  // bigDesktop: 1920,

  //
  // smallTablet: 576,
  // tablet: 768,
  // desktop: 1200,
  // smallDesktop: 996,
  // bigDesktop: 1600,
};

export const theme = {
  white: 'white',
  red: '#E71D36',
  black: '#19180A',
  orange: '#AF4319',
  footerColor: '#414347',

  bold: 'bold',
  italic: 'italic',

  font1: 'Playfair Display',
  font2: 'Titillium Web',

  bigButtonSize: '38px',
  bigButtonHeight: '81px',
  bigButtonWidth: '491px',

  smallButtonFontSize: '30px',
  smallButtonHeight: '74px',
  smallButtonWidth: '185px',

  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (max-width: ${breakpoints[breakpoint]}px)`;
    return acc;
  }, {}),

  mi: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
    return acc;
  }, {}),

  dq: Object.keys(breakpoints).reduce((acc, breakpointLower, breakpointHigher) => {
    acc[
      (breakpointLower, breakpointHigher)
    ] = `@media (max-width: ${breakpoints[breakpointHigher]}px) and (min-width: ${breakpoints[breakpointLower]}px)`;
    return acc;
  }, {}),

  // @media (max-width: 900px) and (min-width: 600px)
};
