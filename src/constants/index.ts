import { theme } from '../theme/types';

export const gradientAppIconLink = `https://drive.google.com/uc?view=&id=1azuN6Kl4TIdPNoigVW96VCHZR37Cc-1F`;

// App header custom style
export const customHeaderStyle = {
  borderBottomWidth: 0,
  elevation: 0,
  shadowOpacity: 0,
  backgroundColor: theme.colors.WHITE_BG_COLOR
};

export interface GameReleaseDateInterface {
  id: number;
  category: number;
  created_at: Date;
  date: Date;
  game: number;
  human: string;
  m: number;
  platform: number;
  region: number;
  updated_at: Date;
  y: Date;
}

export interface GameGenreInterface {
  id: number;
  name: string;
  slug: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}

export interface GameScreenshotInterface {
  id: number;
  image_id: string;
  game: number;
  height: number;
  width: number;
  url: string;
}

export interface GameVideoInterface {
  id: number;
  name: string;
  game: number;
  video_id: string;
}

export interface GameBookmarkInterface {
  id: number;
  game_id: string;
  created_at: string;
  updated_at: string;
}
