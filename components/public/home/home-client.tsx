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
      {/* 1. Hero Showcase Carousel */}
      <HomeHeroSection />

      {/* 2. Key Impact Metrics & Efficiency Counter Strip */}
      <ImpactMetrics />

      {/* 3. Solutions for Every Journey (Use Case Scenarios) */}
      <ScenarioGrid />

      {/* 4. Professional Fleet & Charging Hardware Showcase */}
      <FeaturedFleet />

      {/* 5. Interactive Electric Fleet Savings Calculator */}
      <SavingsCalculator />

      {/* 6. Why Choose GreenRide - End-to-End EV Ecosystem */}
      <WhyChooseGreenRide />

      {/* 7. Video Overview Presentation */}
      <VideoPlayer />

      {/* 8. Real-World Field Deployments & Case Stories */}
      <RealImpactStories />

      {/* 9. Bottom High-Impact Call to Action Banner */}
      <HomeCta />
    </>
  )
}
