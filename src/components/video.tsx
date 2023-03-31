import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
interface videoProps {
  videoTitle: string;
  videoImageUrl: string;
  videoLikes: number;
  videoViews: number;
  commentCount: number;
}
const VideoComponent = ({
  videoTitle,
  videoImageUrl,
  videoViews,
  videoLikes,
  commentCount,
}: videoProps): JSX.Element => {

const  formatVideoLikesOrView = (args: number): string => {
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
              {formatVideoLikesOrView(videoViews)} views
            </p>
          </section>
        </section>
        <section className="video-stats d-flex  align-items-center justify-content-around justify-content-md-center">
          <section className="video-likes brand-small-text-2 mx-md-3">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="mx-2"
              color="#6E41E2"
            />
            {formatVideoLikesOrView(videoLikes)}
          </section>
          <section className="video-dislikes brand-small-text-2 mx-md-3">
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="mx-2 dislike-icon"
              color="#6E41E2"
            />
            221k
          </section>

          <section className="video-dislikes brand-small-text-2 mx-md-3">
            <FontAwesomeIcon
              icon={faDotCircle}
              className="mx-2 dislike-icon"
              color="#6E41E2"
            />
            {formatVideoLikesOrView(commentCount)}
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};

export default VideoComponent;
