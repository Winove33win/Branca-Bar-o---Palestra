import React, { useMemo } from "react";

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
  const normalizedId = useMemo(() => {
    const match = videoId.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
    );
    return match ? match[1] : videoId;
  }, [videoId]);

  const safeStart = Number.isFinite(start) && start > 0 ? start : 0;

  const embedUrl = `https://www.youtube.com/embed/${normalizedId}?rel=0&modestbranding=1&start=${safeStart}`;

  return (
    <div className={`relative w-full overflow-hidden bg-black rounded-2xl shadow-2xl border border-white/10 group ${className}`}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};