import Image from "next/image"

export default function VisitUsSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="visit">
      <div className="text-center mb-12">
        <h2 className="inline-flex items-center text-2xl font-serif text-[#5c3a21]">
          <Image
            src="/images/beansicon.svg?height=24&width=24"
            alt="Coffee bean icon"
            width={24}
            height={24}
            className="mr-2 font-bold"
          />
          Visit Us
        </h2>
        <h3 className="text-3xl font-serif text-[#5c3a21] mt-2">Visit us and sip something special.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f0e6d9] mb-4">
            <Image src="/images/location.svg?height=24&width=24" alt="Location" width={24} height={24} />
          </div>
          <h4 className="text-xl font-serif text-[#5c3a21] mb-2 font-bold">Location</h4>
        
          <p className="text-[#5c3a21]"> 422 Aylmer St N</p>
          <p className="text-[#5c3a21]">Peterborough,ON</p>
          <p className="text-[#5c3a21]">K9H 3W1</p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f0e6d9] mb-4">
            <Image src="/images/callicon.svg?height=24&width=24" alt="Phone" width={24} height={24} />
          </div>
          <h4 className="text-xl font-serif text-[#5c3a21] mb-2 font-bold">Call Us</h4>
          <a href="tel:+17057434233" className="text-[#5c3a21] hover:text-[#8B4513] transition-colors">+1 (705) 743-4233</a>

        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f0e6d9] mb-4">
            <Image src="/images/hoursicons.svg?height=24&width=24" alt="Hours" width={24} height={24} />
          </div>
          <h4 className="text-xl font-serif text-[#5c3a21] mb-2 font-bold">Hours</h4>
          <p className="text-[#5c3a21]">Monday - Friday </p>
          <p className="text-[#5c3a21]">8:00 AM - 8:00 PM</p>
        </div>
      </div>
    </section>
  )
}
