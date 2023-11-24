import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      neutral: string;
      grey: string;
      error: string;
    };

    fontFamily: {
      regular: string;
      bold: string;
    };

    fontSize: {
      /**
       * 12px
       */
      xs: string;
      /**
       * 14px
       */
      sm: string;
      /**
       * 16px
       */
      base: string;
      /**
       * 18px
       */
      lg: string;
      /**
       * 20px
       */
      xl: string;
      /**
       * 24px
       */
      '2xl': string;
      /**
       * 30px
       */
      '3xl': string;
      /**
       * 36px
       */
      '4xl': string;
      /**
       * 48px
       */
      '5xl': string;
      /**
       * 64px
       */
      '6xl': string;
    };

    spacing: {
      /**
       * 0px
       */
      0: string;
      /**
       * 4px
       */
      1: string;
      /**
       * 8px
       */
      2: string;
      /**
       * 12px
       */
      3: string;
      /**
       * 16px
       */
      4: string;
      /**
       * 20px
       */
      5: string;
      /**
       * 24px
       */
      6: string;
      /**
       * 28px
       */
      7: string;
      /**
       * 32px
       */
      8: string;
      /**
       * 36px
       */
      9: string;
      /**
       * 40px
       */
      10: string;
      /**
       * 44p)
       */
      11: string;
      /**
       * 48px
       */
      12: string;
      /**
       * 56px
       */
      14: string;
      /**
       * 64px
       */
      16: string;
      /**
       * 80px
       */
      20: string;
      /**
       * 96px
       */
      24: string;
      /**
       * 112px
       */
      28: string;
      /**
       * 128px
       */
      32: string;
      /**
       * 144px
       */
      36: string;
      /**
       * 160px
       */
      40: string;
      /**
       * 176px
       */
      44: string;
      /**
       * 192px
       */
      48: string;
      /**
       * 208px
       */
      52: string;
      /**
       * 224px
       */
      56: string;
      /**
       * 240px
       */
      60: string;
      /**
       * 256px
       */
      64: string;
      /**
       * 288px
       */
      72: string;
      /**
       * 320px
       */
      80: string;
      /**
       * 384px
       */
      96: string;
    };

    radii: {
      /**
       * 0px
       */
      none: string;
      /**
       * 2px
       */
      sm: string;
      /**
       * 4px
       */
      base: string;
      /**
       * 6px
       */
      md: string;
      /**
       * 8px
       */
      lg: string;
      /**
       * 12px
       */
      xl: string;
      /**
       * 16px
       */
      '2xl': string;
      /**
       * 24px
       */
      '3xl': string;
      /**
       * 9999px
       */
      full: string;
    };
  }
}
