import Image from "next/image"

export default function QuoteSection() {
  return (
    <section className="relative py-20 my-12">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/container.svg?height=500&width=1200"
          alt="Coffee beans background"
          fill
          className="object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">"Good Ideas Start With Brainstorming</h2>
        <h2 className="text-2xl md:text-3xl font-serif text-white">Great Ideas Start With Coffee"</h2>
      </div>
    </section>
  )
}
