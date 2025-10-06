import { Award, Clock, Users, MapPin } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "Fully licensed FFL dealer with all required certifications and insurance",
    },
    {
      icon: Clock,
      title: "25+ Years Experience",
      description: "Over two decades serving the firearms community with expertise and integrity",
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Knowledgeable team ready to help with selection, training, and maintenance",
    },
    {
      icon: MapPin,
      title: "Local & Trusted",
      description: "Proud member of the community with thousands of satisfied customers",
    },
  ]

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Guns & Ammo</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for all firearms needs with unmatched service and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
