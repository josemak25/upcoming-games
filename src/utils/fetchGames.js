import APP_CONFIG from "../config";

const QUERY_FIELDS = `fields name, platforms, rating, url, videos.*, release_dates, genres.*, summary, screenshots.*; 
                      where platforms = 48 & release_dates.date > 1559343600;
                      sort release_dates.date asc; limit 5; 
                      exclude platforms;`;

export default fetchGames = () => {
  return fetch(`${APP_CONFIG.DATABASE_URI}/games`, {
    method: "POST",
    headers: { Accept: "application/json", "user-key": APP_CONFIG.API_KEY },
    body: QUERY_FIELDS
  });
};
