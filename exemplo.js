const apiModule = require('./index');

// AVISO: Para usar este exemplo, você precisa fazer login em https://dark-lime-snapper-hat.cyclic.app/anikit para obter seu nome de usuário e chave de autenticação.

const username = 'username';
const key = 'key';

(async () => {
  try {
    // Exemplo: Obter informações de um anime
    const animeInfo = await apiModule.getAnimeInfo('waifu', username, key);
    console.log('Anime Info:', animeInfo);

    // Exemplo: Obter informações NSFW
    const nsfwInfo = await apiModule.getNSFWInfo('ahegao', username, key);
    console.log('NSFW Info:', nsfwInfo);

    // Exemplo: Obter link de download de vídeo do YouTube (MP4)
    const videoUrl = 'https://youtu.be/iV7D3SBZi5Y';
    const ytVideoDownloadLink = await apiModule.getYTVideoDownloadLink(videoUrl, username, key);
    console.log('YouTube Video Download Link:', ytVideoDownloadLink);

    // Exemplo: Obter link de download de áudio do YouTube (MP3)
    const ytAudioDownloadLink = await apiModule.getYTAudioDownloadLink(videoUrl, username, key);
    console.log('YouTube Audio Download Link:', ytAudioDownloadLink);

    // Exemplo: Reproduzir um vídeo em formato MP4
    const mp4Query = 'bille jeans';
    const playMP4 = await apiModule.playMP4(mp4Query, username, key);
    console.log('Play MP4:', playMP4);

    // Exemplo: Reproduzir um áudio em formato MP3
    const mp3Query = 'bille jeans';
    const playMP3 = await apiModule.playMP4(mp4Query, username, key);
    console.log('Play MP3:', playMP3);

    // Exemplo: Obter episódios recentes de um anime específico
    const recentEpisodes = await apiModule.getRecentEpisodes(username, key);
    console.log('Recent Episodes:', recentEpisodes);
  
    // Exemplo: Obter informações detalhadas de um anime específico
    const animeInfoById = await apiModule.getAnimeInfoById('black-clover', username, key);
    console.log('Anime Info by ID:', animeInfoById);

    // Exemplo: Obter link de download de um vídeo do TikTok
    const tiktokVideoUrl = 'https://vm.tiktok.com/ZM27vD33J/';
    const tiktokDownloadLink = await apiModule.getTikTokVideoDownloadLink(tiktokVideoUrl, username, key);
    console.log('TikTok Download Link:', tiktokDownloadLink);

 

  } catch (error) {
    console.error('Error:', error);
  }
})();
