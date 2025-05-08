import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    content:
      "This platform has completely transformed how we build our web applications. The responsive design works flawlessly across all devices.",
    author: {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      image: "/placeholder.svg?height=80&width=80",
    },
  },
  {
    content:
      "I've never been able to deploy so quickly. The mobile responsiveness saved us countless hours of development time.",
    author: {
      name: "Michael Chen",
      role: "Lead Developer at StartupX",
      image: "/placeholder.svg?height=80&width=80",
    },
  },
  {
    content:
      "Our conversion rates increased by 40% after switching to this platform. The mobile experience is simply outstanding.",
    author: {
      name: "Emily Rodriguez",
      role: "Marketing Director at GrowthCo",
      image: "/placeholder.svg?height=80&width=80",
    },
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Trusted by developers worldwide</h2>
        <div className="mt-12 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105"
            >
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 rounded-full mr-4">
                  <AvatarImage src={testimonial.author.image || "/placeholder.svg"} alt={testimonial.author.name} />
                  <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{testimonial.author.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
