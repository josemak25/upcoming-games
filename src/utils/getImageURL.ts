import { GameScreenshotInterface } from '../constants';

export default function getImageURL(screenshots: GameScreenshotInterface[]) {
  const randomImage = Math.floor(Math.random() * screenshots.length);
  const { url } = screenshots[randomImage];
  const largeImageURL = `https:${url.replace('t_thumb', 't_screenshot_huge')}`;
  return largeImageURL;
}
