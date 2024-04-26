import React from "react";

interface VideoPlayerControlsProps {
  progress: number;
  isPaused: boolean;
  onPlayPause: () => void;
  size: number | undefined;
  width: number | undefined;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  isPaused,
  onPlayPause,
  size = 24,
  width = 3,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = isNaN(dashArray * (1 - progress)) ? 0 : dashArray * (1 - progress);

  return (
    <div className="relative flex justify-center items-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#aaaaaa"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default VideoPlayerControls;
