import Image from "next/image"

const hotBeverages = [
  {
    name: "Masala Chai",
    price: "$2.99",
    description: "Masala Coffee fuses rich coffee with vibrant spices for a flavor that's warm, energizing, and unmistakably fresh.",
    image: "/images/masalachai.svg?height=150&width=150",
  },
  {
    name: "Black Tea",
    price: "$1.99",
    description: "Bold and timeless, Black Tea offers a rich, full-bodied flavor that awakens your senses with every sip.",
    image: "/images/blacktea.svg?height=150&width=150",
  },
  {
    name: "Black Cofee",
    price: "$1.99",
    description: "Pure, strong, and unapologetic — Black Coffee delivers a deep, intense flavor that fuels your day.",
    image: "/images/blackcfe.svg?height=150&width=150",
  },
  {
    name: "Add on Milk/Cream",
    price: "$0.50 ",
    description: "Smooth, rich, and irresistibly creamy — Milk and Cream add a luxurious touch to every cup.",
    image: "/images/milk.svg?height=150&width=150",
  },
]

const quickBites = [
  {
    name: "Crunchy Pizza Roll",
    price: "$2.49",
    description: "Crispy on the outside, cheesy on the inside — the Crunchy Pizza Roll brings pizza perfection in every bite",
    image: "/images/q1.svg?height=150&width=150",
  },
  {
    name: "Jerk Chicken Roll",
    price: "$2.49",
    description: "Fiery, bold, and packed with island flavor — the Jerk Chicken Roll brings juicy, savory roll.",
    image: "/images/q2.svg?height=150&width=150",
  },
  {
    name: "Cheese Burger Roll",
    price: "$2.49",
    description: "The Cheese Burger Roll takes your favorite burger flavors on the go. A deliciously satisfying bite.",
    image: "/images/q3.svg?height=150&width=150",
  },
  {
    name: "Butter Paneer Roll",
    price: "$2.49",
    description: "Rich, creamy, and packed with flavor — the Butter Paneer Roll is a melt-in-your-mouth delight.",
    image: "/images/q4.svg?height=150&width=150",
  },
  {
    name: "Butter Chicken Roll",
    price: "$2.49",
    description: "Tender chicken in a rich, creamy butter sauce — the Butter Chicken Roll is a perfect blend of spices and indulgence.",
    image: "/images/q5.svg?height=150&width=150",
  },
  {
    name: "Vegan Soy Curry Roll",
    price: "$2.49",
    description: "Packed with savory soy and aromatic curry spices — the Vegan Soy Curry Roll offers a rich, plant-based twist.",
    image: "/images/q6.svg?height=150&width=150",
  },
  {
    name: "Chicken Curry Roll",
    price: "$2.49",
    description: "The Chicken Curry Roll brings bold, comforting taste in every bite. it's a deliciously satisfying experience!",
    image: "/images/q7.svg?height=150&width=150",
  },
  {
    name: "Mutton Curry Roll",
    price: "$2.49",
    description: "The Mutton Curry Roll is a flavorful feast in every bite. Wrapped in a soft roll, it's a hearty, mouthwatering delight!",
    image: "/images/q8.svg?height=150&width=150",
  },
  {
    name: "Samosa (3 Pieces)",
    price: "$2.49",
    description: "the Samosa is a savory, satisfying snack. A perfect balance of crunch and spice in every bite!",
    image: "/images/samosa.svg?height=150&width=150",
  },

]

export default function MenuSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto" id="menu">
      <div className="text-center mb-2 flex justify-between items-center">
        <div>
          <Image
            src="/images/menulefticon.svg?height=100&width=100"
            alt="Coffee bean icon"
            width={150}
            height={150}
            className="mr-2"
          />
        </div>
        <div>
          <h2 className="inline-flex items-center text-lg md:text-2xl font-serif text-[#5c3a21]">
            <Image
              src="/images/coffeeicon.svg?height=24&width=24"
              alt="Coffee bean icon"
              width={24}
              height={24}
              className="mr-2 text-nowrap whitespace-nowrap"
            />
            Our Menu
          </h2>
          <h3 className="hidden md:block text-base md:text-3xl font-serif text-[#5c3a21] mt-2">What We Have In Here</h3>
        </div>
        <div>
          <Image
            src="/images/menurighticon.svg?height=150&width=150"
            alt="Coffee bean icon"
            width={150}
            height={150}
            className="mr-2"
          />
        </div>
      </div>

      <div className="px-4 md:px-8 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="4" viewBox="0 0 82 4" fill="none">
          <path d="M80 4C81.1046 4 82 3.10457 82 2C82 0.895431 81.1046 0 80 0V4ZM0 2V4H80V2V0H0V2Z" fill="#D9D9D9"/>
        </svg>

        {/* Hot Beverages */}
        <div className="mb-12">
          <h4 className="text-lg md:text-xl font-serif text-[#5c3a21] mb-6">Hot Beverages</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {hotBeverages.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border p-2 border-[#5c3a21] rounded-lg shadow-sm flex justify-center items-center
                transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:border-[#8b5a2b]
                hover:bg-[#f8f5f0] group"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={150}
                  height={100}
                  className="rounded-md object-cover mr-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-sm md:text-base text-[#5c3a21] font-bold group-hover:text-[#8b5a2b] transition-colors duration-300">{item.name}</h5>
                    <span className="text-sm md:text-base text-[#8b5a2b] font-bold group-hover:text-[#6d4522] transition-colors duration-300">{item.price}</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#5c3a21] group-hover:text-[#6d4522] transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Bites */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="4" viewBox="0 0 82 4" fill="none">
          <path d="M80 4C81.1046 4 82 3.10457 82 2C82 0.895431 81.1046 0 80 0V4ZM0 2V4H80V2V0H0V2Z" fill="#D9D9D9"/>
        </svg>
          <h4 className="text-lg md:text-xl font-serif text-[#5c3a21] mb-6">Quick Bites</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {quickBites.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-2 border border-[#5c3a21] rounded-lg shadow-sm flex justify-center items-center
                transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:border-[#8b5a2b]
                hover:bg-[#f8f5f0] group"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-md object-cover mr-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-sm md:text-base text-[#5c3a21] font-bold group-hover:text-[#8b5a2b] transition-colors duration-300">{item.name}</h5>
                    <span className="text-sm md:text-base text-[#8b5a2b] font-bold group-hover:text-[#6d4522] transition-colors duration-300">{item.price}</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#5c3a21] group-hover:text-[#6d4522] transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
