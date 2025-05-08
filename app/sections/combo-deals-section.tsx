import Image from "next/image"

export default function ComboDealsSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="combos">
      <div className="text-center mb-12">
        <h2 className="inline-flex items-center text-2xl font-serif text-[#5c3a21] font-bold">
          <Image
            src="/images/beansicon.svg?height=24&width=24"
            alt="Coffee bean icon"
            width={24}
            height={24}
            className="mr-2"
          />
          Combo Deals
        </h2>
        <h3 className="text-3xl font-serif text-[#5c3a21] mt-2 font-bold                                     ">What We Have In Our Combo Deals</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#5c3a21]">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-serif text-[#5c3a21] font-bold">Double Delight</h4>
            <span className="bg-[#5c3a21] text-white text-xs px-2 py-1 rounded-full">Best Value</span>
          </div>
          <ul className="mb-4 space-y-2">
            <li className="flex items-center text-[#5c3a21]">
              <span className="mr-2">     <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M14.8602 2.9021C13.9597 3.20631 13.2281 3.48936 12.4761 3.70098C10.3183 4.30543 8.79796 5.61486 7.81983 7.55651C7.44111 8.3091 7.07875 9.07359 6.636 9.79047C5.54072 11.5655 3.82968 12.4159 1.76989 12.6262C1.47973 12.6553 1.04788 12.412 0.857159 12.1659C-0.145488 10.8777 -0.209516 9.4479 0.359922 7.97182C1.76989 4.32263 6.66188 0.980288 10.682 0.926059C12.3154 0.903574 13.7308 1.37179 14.8615 2.90078L14.8602 2.9021Z" fill="#603813"/>
  <path d="M2.36115 13.7333C3.22075 13.4912 3.91552 13.3074 4.60075 13.0997C6.40579 12.5522 7.69315 11.42 8.23262 9.66745C9.2884 6.23649 12.0089 4.80142 15.2607 3.99063C15.5141 3.92714 16.0386 4.22342 16.1693 4.48133C16.8205 5.76034 16.6856 7.09093 16.187 8.38713C14.7485 12.121 10.2883 15.1049 6.1851 15.0745C4.81599 15.0639 3.51773 14.8073 2.36115 13.7346V13.7333Z" fill="#603813"/>
</svg></span> Any Pastry of Choice
            </li>
            <li className="flex items-center text-[#5c3a21]">
              <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M14.8602 2.9021C13.9597 3.20631 13.2281 3.48936 12.4761 3.70098C10.3183 4.30543 8.79796 5.61486 7.81983 7.55651C7.44111 8.3091 7.07875 9.07359 6.636 9.79047C5.54072 11.5655 3.82968 12.4159 1.76989 12.6262C1.47973 12.6553 1.04788 12.412 0.857159 12.1659C-0.145488 10.8777 -0.209516 9.4479 0.359922 7.97182C1.76989 4.32263 6.66188 0.980288 10.682 0.926059C12.3154 0.903574 13.7308 1.37179 14.8615 2.90078L14.8602 2.9021Z" fill="#603813"/>
  <path d="M2.36115 13.7333C3.22075 13.4912 3.91552 13.3074 4.60075 13.0997C6.40579 12.5522 7.69315 11.42 8.23262 9.66745C9.2884 6.23649 12.0089 4.80142 15.2607 3.99063C15.5141 3.92714 16.0386 4.22342 16.1693 4.48133C16.8205 5.76034 16.6856 7.09093 16.187 8.38713C14.7485 12.121 10.2883 15.1049 6.1851 15.0745C4.81599 15.0639 3.51773 14.8073 2.36115 13.7346V13.7333Z" fill="#603813"/>
</svg></span> Coffee or Tea of Choice
            </li>
          </ul>
          <div className="flex justify-start items-center gap-x-2">
            <span className="text-xl  text-[#8b5a2b] font-bold">$7.99</span>
            <span className="text-sm text-gray-500 line-through text-medium"> $1.49</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#5c3a21]">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-serif text-[#5c3a21]">Triple Feast</h4>
            <span className="bg-[#5c3a21] text-white text-xs px-2 py-1 rounded-full">Best Value</span>
          </div>
          <ul className="mb-4 space-y-2">
            <li className="flex items-center text-[#5c3a21]">
              <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M14.8602 2.9021C13.9597 3.20631 13.2281 3.48936 12.4761 3.70098C10.3183 4.30543 8.79796 5.61486 7.81983 7.55651C7.44111 8.3091 7.07875 9.07359 6.636 9.79047C5.54072 11.5655 3.82968 12.4159 1.76989 12.6262C1.47973 12.6553 1.04788 12.412 0.857159 12.1659C-0.145488 10.8777 -0.209516 9.4479 0.359922 7.97182C1.76989 4.32263 6.66188 0.980288 10.682 0.926059C12.3154 0.903574 13.7308 1.37179 14.8615 2.90078L14.8602 2.9021Z" fill="#603813"/>
  <path d="M2.36115 13.7333C3.22075 13.4912 3.91552 13.3074 4.60075 13.0997C6.40579 12.5522 7.69315 11.42 8.23262 9.66745C9.2884 6.23649 12.0089 4.80142 15.2607 3.99063C15.5141 3.92714 16.0386 4.22342 16.1693 4.48133C16.8205 5.76034 16.6856 7.09093 16.187 8.38713C14.7485 12.121 10.2883 15.1049 6.1851 15.0745C4.81599 15.0639 3.51773 14.8073 2.36115 13.7346V13.7333Z" fill="#603813"/>
</svg></span> Any Sandwich of Choice
            </li>
            <li className="flex items-center text-[#5c3a21]">
              <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M14.8602 2.9021C13.9597 3.20631 13.2281 3.48936 12.4761 3.70098C10.3183 4.30543 8.79796 5.61486 7.81983 7.55651C7.44111 8.3091 7.07875 9.07359 6.636 9.79047C5.54072 11.5655 3.82968 12.4159 1.76989 12.6262C1.47973 12.6553 1.04788 12.412 0.857159 12.1659C-0.145488 10.8777 -0.209516 9.4479 0.359922 7.97182C1.76989 4.32263 6.66188 0.980288 10.682 0.926059C12.3154 0.903574 13.7308 1.37179 14.8615 2.90078L14.8602 2.9021Z" fill="#603813"/>
  <path d="M2.36115 13.7333C3.22075 13.4912 3.91552 13.3074 4.60075 13.0997C6.40579 12.5522 7.69315 11.42 8.23262 9.66745C9.2884 6.23649 12.0089 4.80142 15.2607 3.99063C15.5141 3.92714 16.0386 4.22342 16.1693 4.48133C16.8205 5.76034 16.6856 7.09093 16.187 8.38713C14.7485 12.121 10.2883 15.1049 6.1851 15.0745C4.81599 15.0639 3.51773 14.8073 2.36115 13.7346V13.7333Z" fill="#603813"/>
</svg></span> Any Pastry of Choice
            </li>
    
          </ul>
          <div className="flex justify-start items-center gap-x-2">
            <span className="text-xl  text-[#8b5a2b] font-bold">$7.99</span>
            <span className="text-sm text-gray-500 line-through text-medium"> $1.49</span>
          </div>
        </div>
      </div>
    </section>
  )
}
