import $ from "jquery";

export const getYoutubeVideo = (videoId: string) => {
  if (!videoId) return null;
  const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics,contentDetails&key=${youtubeApiKey}`;

  return $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
  });
};

export const getYoutubeVideoDislikes = (videoId: string) => {
  if (!videoId) return null;
  const apiUrl = `https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`;

  return $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
  });
};

export const downloadVideo = async (): Promise<void> => {
  const url = "https://www.youtube.com/watch?v=pID9yFm5_CE";

    const response = await fetch(`http://localhost:3001/download?url=${url}`);
    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = `${url}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

};
