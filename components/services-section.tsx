import { Shield, Wrench, FileText, Target } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "FFL Transfers",
      description: "Licensed Federal Firearms License transfers with competitive rates and fast processing.",
    },
    {
      icon: Wrench,
      title: "Gunsmithing",
      description: "Professional gunsmithing services including repairs, modifications, and custom work.",
    },
    {
      icon: Shield,
      title: "Safety Training",
      description: "Certified firearms safety courses and concealed carry permit training.",
    },
    {
      icon: Target,
      title: "Range Services",
      description: "Indoor shooting range with rental firearms and professional instruction available.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional firearms services backed by years of experience and proper licensing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-navy-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
