"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "./sections/hero-section"
import StorySection from "./sections/story-section"
import FeaturesSection from "./sections/features-section"
import MenuSection from "./sections/menu-section"
import QuoteSection from "./sections/quote-section"
import ComboDealsSection from "./sections/combo-deals-section"
import ContactSection from "./sections/contact-section"
import VisitUsSection from "./sections/visit-us-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0]">
      <Navbar />
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <MenuSection />
      <QuoteSection />
      <ComboDealsSection />
      <ContactSection />
      <VisitUsSection />
      <Footer />
    </main>
  )
}
