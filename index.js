const axios = require('axios');

const baseURL = 'https://happy-red-hummingbird.cyclic.app';

async function fetchData(route, queryParams) {
  const url = `${baseURL}${route}?${queryParams}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  getAnimeInfo: async function(animeType, username, key) {
    return fetchData(`/nime/${animeType}`, `username=${username}&key=${key}`);
  },
  
  getNSFWInfo: async function(nsfwType, username, key) {
    return fetchData(`/nsfw/${nsfwType}`, `username=${username}&key=${key}`);
  },
  
  getYTVideoDownloadLink: async function(videoUrl, username, key) {
    return fetchData(
      '/anikit/ytmp4', `username=${username}&key=${key}&videoUrl=${encodeURIComponent(videoUrl)}`
    );
  },
  
  getYTAudioDownloadLink: async function(videoUrl, username, key) {
    return fetchData(
      '/anikit/ytmp3',
      `username=${username}&key=${key}&videoUrl=${encodeURIComponent(videoUrl)}`
    );
  },

  playMP4: async function(query, username, key) {
    return fetchData(
      '/anikit/playmp4',
      `username=${username}&key=${key}&query=${encodeURIComponent(query)}`
    );
  },
  
  playMP3: async function(query, username, key) {
    return fetchData(
      '/anikit/playmp3',
      `username=${username}&key=${key}&query=${encodeURIComponent(query)}`
    );
  },
  
  getRecentEpisodes: async function(username, key) {
    return fetchData(
      '/recent-episodes',
      `&username=${username}&key=${key}`
    );
  },

  getEpisodeInfo: async function(animeId, username, key) {
    return fetchData(`/epis/${animeId}`, `animeId=${animeId}&username=${username}&key=${key}`);
  },

  getAnimeInfoById: async function(animeId, username, key) {
    return fetchData(`/info/${animeId}`, `animeId=${animeId}&username=${username}&key=${key}`);
  },
  
  getWatchEpisodeSource: async function(episodeId, username, key) {
    return fetchData(
      `/watch/${episodeId}`,
      `episodeId=${episodeId}&username=${username}&key=${key}`
    );
  },
  
  getTikTokVideoDownloadLink: async function(videoUrl, username, key) {
    return fetchData(
      '/anikit/tiktok',
      `videoUrl=${encodeURIComponent(videoUrl)}&username=${username}&key=${key}`
    );
  }
};
