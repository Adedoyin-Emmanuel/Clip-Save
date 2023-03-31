import $ from "jquery";

export const getYoutubeVideo = (videoId: string) => {
  const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics,contentDetails&key=${youtubeApiKey}`;

  return $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
  });
};

