import { Shield, Phone, MapPin, Clock, Mail } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-tactical-orange/5 to-tactical-gold/5 border-t border-tactical-orange/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-tactical-orange bg-clip-text text-transparent">
              EQUIPPED GUNS & AMMO
            </h3>
            <p className="text-sm text-muted-foreground">
              Trusted firearms dealer in Makati, offering premium products with
              safety and compliance at the forefront.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-tactical-orange" />
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-tactical-gold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/shop"
                className="block text-muted-foreground hover:text-tactical-orange transition-colors"
              >
                Shop Catalog
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-tactical-orange transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-tactical-orange transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-tactical-gold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Basement+1+Makati+Central+Square,+Chino+Roces+Avenue,+Makati,+Philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-tactical-orange transition-colors"
              >
                <MapPin className="h-4 w-4 text-tactical-gold" />
                <span>
                  Basement 1 Makati Central Square, Chino Roces Avenue, Makati,
                  Philippines
                </span>
              </Link>

              <a
                href="tel:09603336009"
                className="flex items-center gap-2 hover:text-tactical-orange transition-colors"
              >
                <Phone className="h-4 w-4 text-tactical-orange" />
                <span>0960 333 6009</span>
              </a>

              <a
                href="mailto:equippedguns.ammo@gmail.com"
                className="flex items-center gap-2 hover:text-tactical-orange transition-colors"
              >
                <Mail className="h-4 w-4 text-tactical-red" />
                <span>equippedguns.ammo@gmail.com</span>
              </a>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-tactical-red" />
                <span>Mon-Sat 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-tactical-gold">Legal Notice</h4>
            <p className="text-xs text-muted-foreground">
              All sales subject to Philippine firearms laws and regulations.
              Valid ID and proper licensing are required for purchase and pick-up.
            </p>
          </div>
        </div>

        <div className="border-t border-tactical-orange/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Equipped Guns & Ammo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
