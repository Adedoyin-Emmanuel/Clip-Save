import React, { useState, useEffect } from "react";
import AppHeader from "../components/header";
import AppInput from "../components/input";
import VideoComponent from "../components/video";
import {
  getYoutubeVideo,
  getYoutubeVideoDislikes,
  downloadVideo,
} from "./../apis/youtubeAPI";
import $, { data } from "jquery";
import Button from "../components/button";

interface videoStatsProps {}
const MainApp = (): JSX.Element => {
  const [dataGotten, setDataGotten] = useState<boolean>(false);
  const [videoData, setVideoData] = useState<any>("");
  const [videoStats, setVideoStats] = useState<any>("");
  const [channelTitle, setChannelTitle] = useState<string>("");
  const [videoTitle, setvideoTitle] = useState<string>("");
  const [videoImage, setVideoImage] = useState<string>("");
  const [relatedVideoData, setRelatedVideoData] = useState();
  const [dislikesData, setDislikesData] = useState<any>("");

  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    const videoId = `${event.target[0].value}`;

    const fetchData = async () => {
      const dataReturned = await getYoutubeVideo(videoId);
      const youtubeDislikes = await getYoutubeVideoDislikes(videoId);
      setDataGotten(true);
      setVideoData(dataReturned);
      setDislikesData(youtubeDislikes);
    };
    fetchData();
    //console.log(videoData);
    $(".search-input-element").val("");
  };

  useEffect(() => {
    if (dataGotten === true) {
      console.log(videoData.items[0]);
      setVideoStats(videoData.items[0].statistics);
      setChannelTitle(videoData.items[0].snippet.channelTitle);
      setvideoTitle(videoData.items[0].snippet.title);
      console.log(dislikesData);
      if (videoData.items[0].snippet.thumbnails.maxres !==   undefined) 
      {
        setVideoImage(videoData.items[0].snippet.thumbnails.maxres.url);
      
      }else{
        setVideoImage(videoData.items[0].snippet.thumbnails.standard.url);
        
      }

      //console.log(channelTitle);
    }
  });
  const handleDownload = ():void =>
  {
    downloadVideo();
  }
  return (
    <React.Fragment>
      <section className="container-fluid p-0 m-0">
        <AppHeader></AppHeader>
        <section className="my-5 p-3"></section>
        <section className="app-input-container m-2">
          <h3 className="fw-bold text-capitalize text-center my-4 py-2">
            Youtube downloader
          </h3>
          <AppInput
            onSubmit={(event: SubmitEvent) => handleSubmit(event)}
          ></AppInput>
          <br />
          <br />
          {dataGotten && (
            <VideoComponent
              videoTitle={videoTitle}
              videoImageUrl={videoImage}
              videoViews={videoStats.viewCount}
              videoDislikes={dislikesData.dislikes}
              videoRating={dislikesData.rating}
              videoLikes={videoStats.likeCount}
              commentCount={videoStats.commentCount}
            />
          )}
        </section>
        <section className="button-container my-5 width-toggle-3 m-auto d-flex align-items-center justify-content-center ">
          {dataGotten && (
            <Button
              text="download"
              className="text-light brand-button"
              onClick={handleDownload}
            />
          )}
        </section>
        <section className="my-4 py-3"></section>
      </section>
    </React.Fragment>
  );
};

export default MainApp;
