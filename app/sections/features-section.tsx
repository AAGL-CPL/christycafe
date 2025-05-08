import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="features">
      <div className="text-center mb-12">
        <h2 className="inline-flex items-center text-2xl font-serif text-[#5c3a21]">
          <Image
            src="/images/beansicon.svg?height=35&width=35"
            alt="Coffee bean icon"
            width={35}
            height={35}
            className="mr-2"
          />
          Our Features
        </h2>
        <h3 className="text-3xl font-serif text-[#5c3a21] mt-2">What We Provide You</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className=" rounded-lg ">
          <Image
            src="/images/hqcup.svg?height=300&width=300"
            alt="Coffee cup"
            width={300}
            height={354}
            className="w-full  object-cover rounded-md mb-4"
          />
          <h4 className="text-xl font-serif text-[#5c3a21] mb-2">High Quality Coffee</h4>
          <p className="text-[#5c3a21]">
            Crafted from premium coffee beans that are carefully selected and roasted to perfection. We take pride in
            our meticulous process to deliver an unforgettable coffee experience.
          </p>
        </div>

        <div className="rounded-lg ">
          <Image
            src="/images/coffeebeans.svg?height=300&width=300"
            alt="Coffee beans"
            width={300}
            height={300}
            className="w-full object-cover rounded-md mb-4"
          />
          <h4 className="text-xl font-serif text-[#5c3a21] mb-2">Best Coffee Beans</h4>
          <p className="text-[#5c3a21]">
            Sourced from the finest plantations, our coffee beans undergo strict quality control to ensure a smooth,
            satisfying brew every time.
          </p>
        </div>
      </div>
    </section>
  )
}
