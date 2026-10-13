const HeroSection = ({
  title,
  image,
  description,
}: {
  title: string
  image: string
  description?: string
}) => {
  return (
    <div
      className="relative flex h-120 flex-col items-center justify-center overflow-hidden px-3 text-center md:h-148"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />
      <h1 className="text-5xl font-normal tracking-wider text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed font-normal tracking-wider text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] md:text-xl">
          {description}
        </p>
      )}
    </div>
  )
}

export default HeroSection
