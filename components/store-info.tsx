import Image from "next/image"
import { Clock, MapPin, Phone, Mail } from "lucide-react"

export function StoreInfo() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Visit Our Store</h2>
            <p className="text-lg text-gray-300 mb-8">
              Come see our extensive inventory in person. Our knowledgeable staff is ready to help you find exactly what
              you need.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-gray-300">
                    123 Main Street
                    <br />
                    Anytown, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">Store Hours</p>
                  <p className="text-gray-300">
                    Mon-Fri: 9:00 AM - 7:00 PM
                    <br />
                    Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">info@gunsandammo.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center border border-gray-700 relative overflow-hidden">
            <Image
              src="/professional-gun-store-interior.jpg"
              alt="Gun store interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
