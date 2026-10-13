import { useState, useRef, type ChangeEvent, type SyntheticEvent } from "react"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

export default function VideoPlayer() {
  const { currentLang } = useLanguage()

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // value from 0 to 100
  const [currentTimeSec, setCurrentTimeSec] = useState(0)
  const [totalDurationSec, setTotalDurationSec] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [playbackError, setPlaybackError] = useState<string | null>(null)

  const playerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      setPlaybackError(null)
      try {
        await video.play()
      } catch {
        setPlaybackError("This video could not be played. Please try again.")
      }
    } else {
      video.pause()
    }
  }

  const handleScrubberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration)) return

    video.currentTime = (val / 100) * video.duration
    setProgress(val)
    setCurrentTimeSec(video.currentTime)
  }

  const handleTimeUpdate = (e: SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget
    setCurrentTimeSec(video.currentTime)
    setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0)
  }

  const handleLoadedMetadata = (e: SyntheticEvent<HTMLVideoElement>) => {
    const duration = e.currentTarget.duration
    setTotalDurationSec(Number.isFinite(duration) ? duration : 0)
  }

  const handleToggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const formatTime = (seconds: number) => {
    const wholeSeconds = Math.floor(seconds)
    const mins = Math.floor(wholeSeconds / 60)
    const secs = wholeSeconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const textSlogan = translate(currentLang, "home.videoTitle")

  return (
    <section className="relative overflow-hidden bg-emerald-50 py-16">
      {/* Dynamic Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-electric)_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Animated Brand Player Frame */}
        <div
          ref={playerRef}
          className={`group relative overflow-hidden border border-slate-200/60 bg-white shadow-2xl transition-all duration-300 ${
            isFullscreen
              ? "fixed inset-0 z-50 flex flex-col justify-between bg-slate-900 p-0"
              : "flex h-150 w-full flex-col"
          }`}
          id="brand-video-frame"
        >
          {/* Video View Screen */}
          <div className="relative min-h-0 w-full flex-1 bg-black">
            <video
              ref={videoRef}
              src="/Electric_car_charging_at_station_20261013213500.mp4"
              poster="/home-hero.jpg"
              preload="metadata"
              playsInline
              muted={isMuted}
              aria-label={textSlogan}
              className="h-full w-full object-contain"
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onError={() =>
                setPlaybackError("This video could not be loaded. Please try again later.")
              }
            >
              Your browser does not support video playback.
            </video>

            <div className="pointer-events-none absolute top-4 left-4 z-10 text-left">
              <h4 className="max-w-lg font-display text-lg font-bold tracking-tight text-white drop-shadow-md sm:text-xl">
                {textSlogan}
              </h4>
              <p className="mt-1 font-mono text-xs tracking-widest text-white/80 uppercase drop-shadow-md">
                {translate(currentLang, "home.videoLabel")} • {formatTime(currentTimeSec)}
              </p>
            </div>

            {playbackError && (
              <p
                role="alert"
                className="absolute right-4 bottom-4 left-4 z-10 rounded bg-black/75 p-3 text-sm text-white"
              >
                {playbackError}
              </p>
            )}

            {/* Big center play overlays if paused */}
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 m-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-emerald-700/90 text-xl text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-800"
                aria-label="Play video"
              >
                <Play className="h-8 w-8 translate-x-0.5 fill-white" />
              </button>
            )}
          </div>

          {/* Control Bar */}
          <div className="relative z-20 flex flex-col gap-2 bg-[#121212] px-4 py-3 text-white select-none">
            {/* Scrubber Timeline track */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleScrubberChange}
                disabled={!totalDurationSec}
                aria-label="Seek video"
                className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-700 accent-emerald-400 focus:outline-hidden"
                id="video-scrubber"
              />
            </div>

            {/* Icons & Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button
                  onClick={handlePlayPause}
                  className="cursor-pointer p-1 transition-colors hover:text-emerald-300"
                  id="ctrl-play-pause"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 fill-white" />
                  ) : (
                    <Play className="h-5 w-5 fill-white" />
                  )}
                </button>

                {/* Duration Display */}
                <span
                  className="font-mono text-[14px] font-medium text-slate-300"
                  id="time-indicator"
                >
                  {formatTime(currentTimeSec)} / {formatTime(totalDurationSec)}
                </span>
              </div>

              {/* Volume & Details & Fullscreen */}
              <div className="flex items-center gap-4">
                {/* Volume Button */}
                <button
                  onClick={handleToggleMute}
                  className="cursor-pointer p-1 transition-colors hover:text-emerald-300"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  id="ctrl-volume"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={handleToggleFullscreen}
                  className="cursor-pointer p-1 transition-colors hover:text-emerald-300"
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  id="ctrl-fullscreen"
                >
                  {isFullscreen ? (
                    <Minimize className="h-5 w-5" />
                  ) : (
                    <Maximize className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
