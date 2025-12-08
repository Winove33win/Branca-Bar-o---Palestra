import React from "react";

interface VideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  start?: number;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoId,
  title = "YouTube video player",
  className = "",
  start = 0,
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&start=${start}`;

  return (
    <div className={`relative w-full overflow-hidden bg-black rounded-2xl shadow-2xl border border-white/10 group ${className}`}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};