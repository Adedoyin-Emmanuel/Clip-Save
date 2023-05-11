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
  const id = "FzrNHSGYu5c";

  const response = await fetch(`http://localhost:4000/download/${id}`);
  console.log(response);
  // const blob = await response.blob();
  // const url = URL.createObjectURL(blob);
  // const link = document.createElement("a");
  // link.href = url;
  // link.download = `video_${id}.mp4`;
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
};
