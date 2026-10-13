import { useState, useEffect, useRef, ChangeEvent } from "react"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

export default function VideoPlayer() {
  const { currentLang } = useLanguage()

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // value from 0 to 100
  const [currentTimeSec, setCurrentTimeSec] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const totalDurationSec = 111 // 01:51 total duration
  const playerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= totalDurationSec) {
            setIsPlaying(false)
            setProgress(0)
            return 0
          }
          const nextTime = prev + 1
          setProgress((nextTime / totalDurationSec) * 100)
          return nextTime
        })
      }, 1000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleScrubberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setProgress(val)
    setCurrentTimeSec(Math.floor((val / 100) * totalDurationSec))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
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
          {/* Main Video View Screen */}
          <div className="relative flex h-full w-full flex-1 flex-col items-center justify-center bg-radial from-white to-emerald-50/70 text-center select-none">
            {/* Glowing D Animation Logo */}
            <div className="relative mb-6">
              {/* Outer Pulsing Aura */}
              <div
                className={`absolute inset-0 rounded-full bg-electric/15 blur-2xl transition-all duration-1000 ${isPlaying ? "scale-125 opacity-100" : "scale-90 opacity-40"}`}
              ></div>

              {/* Main Elegant Large D Letter Structure */}
              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-[3px] border-electric bg-white shadow-lg">
                <span className="font-display relative -left-0.5 text-7xl font-black text-electric select-none">
                  G
                </span>

                {/* Electric plug inside a clean badge attached to the side or center */}
                <div className="absolute top-10 -right-2 flex items-center justify-center rounded-sm border-2 border-electric bg-white px-1 py-1 text-electric shadow-xs">
                  <Zap className="h-5 w-5 fill-electric" />
                </div>
              </div>

              {/* Radial sound waves on play */}
              {isPlaying && (
                <>
                  <div className="absolute -inset-4 animate-ping rounded-full border-2 border-emerald-400/20"></div>
                  <div className="absolute -inset-8 animate-pulse rounded-full border border-emerald-400/10"></div>
                </>
              )}
            </div>

            {/* Video Subtitle & Slogan */}
            <h4 className="font-display relative z-10 mb-2 max-w-lg text-xl font-bold tracking-tight text-electric transition-colors sm:text-2xl">
              {textSlogan}
            </h4>

            <p className="relative z-10 font-mono text-xs tracking-widest text-slate-400 uppercase">
              {translate(currentLang, "home.videoLabel")}{" "}
              • {formatTime(currentTimeSec)}
            </p>

            {/* Big center play overlays if paused */}
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 m-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-emerald-700/90 text-xl text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-800"
                aria-label="Play Video"
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
                  onClick={() => setIsMuted(!isMuted)}
                  className="cursor-pointer p-1 transition-colors hover:text-emerald-300"
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
