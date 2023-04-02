import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
interface videoProps {
  videoTitle: string;
  videoImageUrl: string;
  videoLikes: number;
  videoDislikes:number;
  videoRating:number;
  videoViews: number;
  commentCount: number;
}
const VideoComponent = ({
  videoTitle,
  videoImageUrl,
  videoViews,
  videoLikes,
  videoDislikes,
  videoRating,
  commentCount,
}: videoProps): JSX.Element => {

const  formatVideoData = (args: number): string => {
  if (args >= 1000) {
   
    return `${Math.floor(args / 1000)}k`;
  } else {
   
    return `${args}`;
  }
}

  return (
    <React.Fragment>
      <section className="m-auto video-section d-flex flex-column">
        <section className="video-container d-flex m-auto">
          <img src={videoImageUrl} className="img-fluid" />
        </section>
        <br />
        <section className="video-heading text-md-center">
          {videoTitle}
          <section className="video-views">
            <p className="brand-small-text-2 text-muted my-2">
              {formatVideoData(videoViews)} views
            </p>
          </section>
        </section>
        <section className="video-stats d-flex  align-items-center justify-content-between justify-content-md-center">
          <section className="video-likes brand-small-text-2 mx-md-3">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="mx-2"
              color="#6E41E2"
            />
            {formatVideoData(videoLikes)}
          </section>
          <section className="video-dislikes brand-small-text-2 mx-md-3">
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="mx-2 dislike-icon"
              color="#6E41E2"
            />
            {formatVideoData(videoDislikes)}
          </section>

          <section className="video-dislikes brand-small-text-2 mx-md-3">
            <FontAwesomeIcon
              icon={faPen}
              className="mx-2 dislike-icon"
              color="#6E41E2"
            />
            {formatVideoData(commentCount)}
          </section>

          <section className="video-dislikes brand-small-text-2 mx-md-3">
            <FontAwesomeIcon
              icon={faStar}
              className="mx-2 dislike-icon"
              color="#6E41E2"
            />
            {Math.floor(videoRating)}
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};

export default VideoComponent;
