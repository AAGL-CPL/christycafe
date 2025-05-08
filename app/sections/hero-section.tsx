"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center" id="home">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.svg?height=500&width=1200"
          alt="Coffee background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Brewed to Perfection</h1>
        <p className="text-white text-lg mb-8">
          Experience the perfect blend of artisan roasted beans and modern culinary excellence
        </p>
        <Button
          className="bg-[#8b5a2b] hover:bg-[#6d4522] text-white px-8 py-2 rounded"
          onClick={() => {
            document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          DISCOVER MORE
        </Button>
      </div>
    </section>
  )
}
