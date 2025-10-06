import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ProductCategories() {
  const categories = [
    {
      title: "Handguns",
      description: "Pistols and revolvers from top manufacturers",
      image: "/handgun-pistol-collection-display.jpg",
      href: "/shop?category=handguns",
    },
    {
      title: "Rifles",
      description: "Hunting, sporting, and tactical rifles",
      image: "/ar-15-rifle-on-display-in-gun-store.jpg",
      href: "/shop?category=rifles",
    },
    {
      title: "Shotguns",
      description: "Home defense and hunting shotguns",
      image: "/professional-gun-store-interior.jpg",
      href: "/shop?category=shotguns",
    },
    {
      title: "Ammunition",
      description: "Quality ammo for all calibers and purposes",
      image: "/ammunition-bullets-display-cases.jpg",
      href: "/shop?category=ammunition",
    },
    {
      title: "Accessories",
      description: "Scopes, holsters, and firearm accessories",
      image: "/hunting-rifle-with-scope-in-store.jpg",
      href: "/shop?category=accessories",
    },
    {
      title: "Optics",
      description: "Scopes, red dots, and sighting systems",
      image: "/professional-gun-store-interior.jpg",
      href: "/shop?category=optics",
    },
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our extensive selection of firearms, ammunition, and accessories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-800">
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
