import { Zap, Shield, Smartphone } from "lucide-react"

const features = [
  {
    name: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring your users have a smooth experience.",
    icon: Zap,
  },
  {
    name: "Secure by Default",
    description: "Built with security in mind, protecting your data and your users at every step.",
    icon: Shield,
  },
  {
    name: "Mobile Responsive",
    description: "Looks great on any device, from desktop to mobile, with no extra work required.",
    icon: Smartphone,
  },
]

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build web apps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides everything you need to create beautiful, responsive web applications.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
