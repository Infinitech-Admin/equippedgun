export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: "firearm" | "ammunition" | "accessory"
  description: string
  featured: boolean
  inStock: boolean
  specifications?: Record<string, string>
}

export interface Branch {
  id: string
  name: string
  address: string
  phone: string
  hours: string
}

export interface CheckoutData {
  customerName: string
  contactNumber: string
  branchId: string
  pickupDate: string
  items: Array<{
    productId: string
    quantity: number
    price: number
  }>
}

export interface ReservationResponse {
  success: boolean
  reservationId: string
  message: string
}
