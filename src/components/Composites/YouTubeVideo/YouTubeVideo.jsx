import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import { extractVideoId } from "../../../../utils/extractVideoId";
import { useMediaQuery, useTheme } from "@mui/material";
import { YouTubeVideoContainer } from "./YouTubeVideo.styles";

const YouTubeVideo = ({ videoUrl, title, height, width }) => {
  const videoId = extractVideoId(videoUrl) || null;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const opts = {
    height: height || (isMobile ? "290" : "400"),
    width: width || (isMobile ? "327" : "600"),
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      {videoId ? (
        <YouTubeVideoContainer>
          <YouTube videoId={videoId} title={title} opts={opts} />
        </YouTubeVideoContainer>
      ) : null}
    </>
  );
};

YouTubeVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default YouTubeVideo;
