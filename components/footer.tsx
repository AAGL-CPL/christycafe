import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bottom-0 bg-[#f8f5f0] border-t border-[#e6dfd4] pt-[25rem] pb-6">
    
     
    <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer.svg?height=800&width=1200"
          alt="Coffee beans background"
          fill
          className="object-cover brightness-50"
        />
      </div>
          {/* <div className="text-center md:text-left">
            <Image 
              src="/images/logo.svg?height=60&width=60" 
              alt="Café Logo" 
              width={100} 
              height={100} 
              className="mx-auto md:mx-0 mb-4" 
            />
            <p className="text-[#5c3a21] text-sm mb-8 max-w-[150px]">© 2025 Café's Delight. All Rights Reserved.</p>
          </div>
          <Image 
            src="/images/rightfooter.svg?height=400&width=400" 
            alt="Café Logo" 
            width={400} 
            height={400} 
            className="w-full max-w-[200px] md:max-w-[400px] mb-4" 
          /> */}
    
    </footer>
  )
}
