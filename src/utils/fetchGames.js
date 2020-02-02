import APP_CONFIG from "../config";

export default fetchGames = ({ year = 2019, platform = 48 }) => {
  const QUERY_FIELDS = `fields name, platforms, rating, url, videos.*, release_dates.*, genres.*, summary, screenshots.*;
                          where platforms = ${platform} & release_dates.y > ${year} & screenshots >= 1; sort release_dates.date asc;
                          limit 15;
                          exclude platforms ;`;

  return fetch(`${APP_CONFIG.DATABASE_URI}/games`, {
    method: "POST",
    headers: { Accept: "application/json", "user-key": APP_CONFIG.API_KEY },
    body: QUERY_FIELDS
  });
};
