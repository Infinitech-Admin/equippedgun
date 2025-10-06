import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Target, Award, Users, Clock, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"

export const AboutContent = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize safety in every aspect of our business, from storage to sales to customer education.",
    },
    {
      icon: Target,
      title: "Expert Knowledge",
      description: "Our team consists of experienced professionals with deep knowledge of firearms and regulations.",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "We partner with trusted manufacturers to offer only the highest quality firearms and accessories.",
    },
    {
      icon: Users,
      title: "Customer Service",
      description:
        "Personalized service and support for every customer, from first-time buyers to experienced collectors.",
    },
  ]

  const certifications = [
    "Federal Firearms License (FFL)",
    "State Licensed Dealer",
    "NICS Background Check Certified",
    "ATF Compliance Certified",
    "Industry Safety Standards",
    "Professional Training Certified",
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">
          Professional Firearms Dealership
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">About Our Dealership</h1>
        <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
          We are a professional firearms dealership committed to providing quality products, expert service, and
          complete compliance with all federal, state, and local regulations.
        </p>
      </div>

      {/* Company Story */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded with a commitment to excellence and safety, our dealership has been serving the community with
              professional firearms sales and expert guidance. We understand the responsibility that comes with firearms
              ownership and are dedicated to ensuring every transaction meets the highest standards.
            </p>
            <p>
              Our team brings decades of combined experience in the firearms industry, law enforcement, and military
              service. This expertise allows us to provide knowledgeable guidance to customers while maintaining strict
              compliance with all applicable laws and regulations.
            </p>
            <p>
              We believe in building long-term relationships with our customers based on trust, transparency, and
              exceptional service. Every interaction is an opportunity to demonstrate our commitment to safety and
              professionalism.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border">
            <Image src="/images/logo.jpg" alt="Professional Firearms Dealership" fill className="object-contain p-8" />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            These core principles guide everything we do and ensure we maintain the highest standards in our industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications & Compliance */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Licenses & Certifications</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            We maintain all required licenses and certifications to operate as a professional firearms dealership.
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Business Hours & Locations */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Business Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-muted-foreground">Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Hours may vary by location. Please call ahead to confirm availability and
                schedule appointments for specialized services.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Multiple Locations</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Downtown Location</p>
                <p className="text-sm text-muted-foreground">123 Main St, Downtown, ST 12345</p>
                <p className="text-sm text-muted-foreground">(555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium">North Side Branch</p>
                <p className="text-sm text-muted-foreground">456 North Ave, Northside, ST 12346</p>
                <p className="text-sm text-muted-foreground">(555) 234-5678</p>
              </div>
              <div>
                <p className="font-medium">West End Store</p>
                <p className="text-sm text-muted-foreground">789 West Blvd, West End, ST 12347</p>
                <p className="text-sm text-muted-foreground">(555) 345-6789</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
