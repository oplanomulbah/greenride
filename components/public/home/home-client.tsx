"use client"

import HomeHeroSection from "./home-hero-section"
import ImpactMetrics from "./impact-metrics"
import ScenarioGrid from "./scenario-grid"
import FeaturedFleet from "./featured-fleet"
import SavingsCalculator from "./savings-calculator"
import WhyChooseGreenRide from "./why-choose-us"
import VideoPlayer from "./video-player"
import RealImpactStories from "./impact-stories"
import HomeCta from "./home-cta"

export default function HomeClient() {
  return (
    <>
      <HomeHeroSection />
      <ScenarioGrid />
      <FeaturedFleet />
      <WhyChooseGreenRide />
      <VideoPlayer />
      <RealImpactStories />
      <HomeCta />
    </>
  )
}
