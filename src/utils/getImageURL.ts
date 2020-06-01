import { GameScreenshotInterface } from '../constants';

export default function getImageURL(screenshots: GameScreenshotInterface[]) {
  const { url } = screenshots[0];
  const largeImageURL = `https:${url.replace(
    't_thumb',
    't_screenshot_med_2x'
  )}`;
  return largeImageURL;
}
