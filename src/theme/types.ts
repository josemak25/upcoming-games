import 'styled-components';

// All app colors
enum COLORS {
  DARK_BG_COLOR = '#E6ECF0',
  WHITE_BG_COLOR = '#FFFFFF',
  BLACK_FONT_COLOR = '#000000',
  WHITE_FONT_COLOR = '#FFFFFF',
  ACTION_BG_COLOR = '#1da1f2',
  INACTIVE_BG_COLOR = '#14171A',
  NOTIFICATION_HIGHLIGHT_COLOR = '#52de97'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 10,
  MEDIUM_SIZE = 14,
  LARGE_SIZE = 18,
  NOTOSANS_REGULAR = 'notosans-regular',
  NOTOSANS_BOLD = 'notosans-bold',
  BEAUTY_MOUNTAINS = 'beauty-mountains',
  FONT_WEIGHT_LIGHT = 200,
  FONT_WEIGHT_MEDIUM = 600,
  FONT_WEIGHT_HEAVY = 800
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      DARK_BG_COLOR: string;
      WHITE_BG_COLOR: string;
      BLACK_FONT_COLOR: string;
      WHITE_FONT_COLOR: string;
      ACTION_BG_COLOR: string;
      INACTIVE_BG_COLOR: string;
      NOTIFICATION_HIGHLIGHT_COLOR: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      LARGE_SIZE: number;
      NOTOSANS_REGULAR: string;
      NOTOSANS_BOLD: string;
      BEAUTY_MOUNTAINS: string;
      FONT_WEIGHT_LIGHT: number;
      FONT_WEIGHT_MEDIUM: number;
      FONT_WEIGHT_HEAVY: number;
    };
  }
}

// App theme
export const theme = { colors: COLORS, fonts: FONTS };
