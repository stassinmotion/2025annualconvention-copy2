import { useVideoLoading } from '@/hooks/use-video-loading';

interface VideoBackgroundProps {
  videoUrl: string;
  posterUrl: string;
}

const VideoBackground = ({ videoUrl, posterUrl }: VideoBackgroundProps) => {
  const { videoRef, isLoading, isError } = useVideoLoading(videoUrl);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
          <div className="animate-pulse text-racing-silver/50 text-sm">Loading video...</div>
        </div>
      )}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        className={`object-cover w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
        poster={posterUrl}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/80"></div>
      
      {/* Checker pattern overlay removed for clean look */}
    </div>
  );
};

export default VideoBackground;
