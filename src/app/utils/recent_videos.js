import React from "react";
import moment from "moment";
import { useEffect, useState } from "react";

export const RecentVideos = ({ videoURL }) => {
  const [video, setVideo] = useState({});
  useEffect(() => {
    const getYoutubeVideos = async () => {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${videoURL}`
      );
      const data = await response.json();
      if (data.status === "ok") {
        const latestVideo = data.items[0];
        setVideo(latestVideo);
      }
    };
    getYoutubeVideos();
  }, []);

  return (
    <div className="rounded-lg overflow-x-auto h-full">
      <div className="video-responsive">
        <iframe
          width="530"
          height="340"
          src={generateEmbedURL(video?.link)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <span className="text-sm text-right"> {relativeDateString(video.pubDate)}</span>
      </div>
    </div>
  );
};

export const generateEmbedURL = (url) => {
  if (!url) {
    return "";
  }
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
};

export const formatDate = (dateString) => {
  if (!dateString) {
    return "";
  }
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export const relativeDateString = (dateString) => {
  if (!dateString) {
    return "";
  }
  const now = moment();
  const articleDate = moment(new Date(dateString));

  var diffDays = now.diff(articleDate, "days");
  var diffWeeks = now.diff(articleDate, "weeks");
  var diffMonths = now.diff(articleDate, "months");
  var diffYears = now.diff(articleDate, "years");

  if (diffDays <= 0) {
    return "Today";
  } else if (diffDays >= 1 && diffDays <= 6) {
    return diffDays > 1 ? `${diffDays} days ago` : "1 day ago";
  } else if (diffWeeks >= 1 && diffWeeks <= 3) {
    return diffWeeks > 1 ? `${diffWeeks} weeks ago` : "1 week ago";
  } else if (diffMonths >= 1 && diffMonths <= 12) {
    return diffMonths > 1 ? `${diffMonths} months ago` : "1 month ago";
  } else {
    return diffYears > 1 ? `${diffYears} years ago` : "1 year ago";
  }
};
