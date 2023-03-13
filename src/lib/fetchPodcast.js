export const getAllEpisodes = () =>
  fetch('https://dunder-mifflin-api.vercel.app/api/podcast/all')
  .then((response) => response.json())
  .then((data) => data.reverse().map(item => ({
    ...item,
    episode: item.episode.split('x')
  })))