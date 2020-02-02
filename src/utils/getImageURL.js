export default function getImageURL(screenshots) {
  const randomImage = Math.floor(Math.random() * screenshots.length);
  const { url } = screenshots[randomImage];
  const largeImageURL = `https:${url.replace("t_thumb", "t_screenshot_huge")}`;
  return largeImageURL;
}
