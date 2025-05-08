import Image from "next/image"

export default function StorySection() {
  return (
    <section className="py-16 px-0 max-w-7xl mx-auto" id="about">
      <div>
      <div className="p-0 mb-6">
          <Image
            src="/images/storylefticon.svg?height=70&width=70"
            alt="Coffee cup made of beans"
            width={50}
            height={50}
            className="object-contain w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
          />
        </div>
        <div className="relative ">
        
          <div className="absolute bottom-0 left-0 mx-4 md:mx-8"><svg xmlns="http://www.w3.org/2000/svg" width="82" height="4" viewBox="0 0 82 4" fill="none">
  <path d="M80 4C81.1046 4 82 3.10457 82 2C82 0.89543 81.1046 0 80 0V4ZM0 2V4H80V2V0H0V2Z" fill="#D9D9D9"/>
</svg> </div>
                  
         
          <Image
            src="/images/storyrighticon.svg?height=70&width=70"
            alt="Coffee cup made of beans"
            width={70}
            height={70}
            className="object-contain absolute right-0 w-[35px] h-[35px] "
          />
      
    </div>
      
  

      </div>
      <div className="px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-serif text-[#5c3a21] mb-6">Our Story</h2>
          <p className="text-[#5c3a21] mb-4">
            Founded in 2008, Café's began with a simple mission: to serve exceptional coffee with unparalleled
            hospitality. Our experienced team has built a thriving establishment that celebrates the art of coffee
            making.
          </p>
          <p className="text-[#5c3a21] mb-4">
            We source our beans directly from sustainable farms around the world, ensuring you the freshest flavors.
            Each cup is carefully crafted by our skilled baristas who are passionate about what they do and take pride
            in their roasting.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/storycup.svg?height=500&width=500"
            alt="Coffee cup made of beans"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
