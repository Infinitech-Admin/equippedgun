"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCart, useCartValue } from "@/components/cart-provider";
import {
  Calendar,
  MapPin,
  Phone,
  User,
  ShoppingBag,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Branch, CheckoutData } from "@/types";

// Single fixed pickup branch — pickup location is no longer selectable.
const pickupBranch: Branch = {
  id: "makati-square-b1",
  name: "Makati Square Basement 1",
  address: "Makati Square, Basement 1, Makati City",
  phone: "(555) 123-4567",
  hours: "Mon-Sat 9AM-6PM",
};

export const CheckoutForm = () => {
  const { state, dispatch } = useCart();
  const cartValue = useCartValue();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reservationId, setReservationId] = useState<string>("");
  const [formData, setFormData] = useState<CheckoutData>({
    customerName: "",
    contactNumber: "",
    branchId: pickupBranch.id,
    pickupDate: "",
    items: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Update form data when cart changes
    setFormData((prev) => ({
      ...prev,
      items: state.items.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
    }));
  }, [state.items]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Full name is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^$$\d{3}$$ \d{3}-\d{4}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number";
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = "Please select a pickup date";
    } else {
      const selectedDate = new Date(formData.pickupDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.pickupDate = "Pickup date cannot be in the past";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handleInputChange = (field: keyof CheckoutData, value: string) => {
    if (field === "contactNumber") {
      value = formatPhoneNumber(value);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // In a real app, this would submit to Laravel API
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock successful response
      const mockReservationId = `GUN-${Date.now().toString().slice(-6)}`;
      setReservationId(mockReservationId);
      setSubmitted(true);

      // Clear cart after successful submission
      dispatch({ type: "CLEAR_CART" });
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // Redirect to cart if empty
  if (state.items.length === 0 && !submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Add some items to your cart before proceeding to checkout.
        </p>
        <Link href="/shop">
          <Button size="lg">Browse Products</Button>
        </Link>
      </div>
    );
  }

  // Success page
  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl text-green-600">
              Order Confirmed!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-lg mb-2">
                Your reservation has been successfully submitted.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-semibold">Reservation ID:</p>
                <p className="text-2xl font-mono text-primary">
                  {reservationId}
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold">Pickup Details</h3>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{pickupBranch.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {pickupBranch.address}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {pickupBranch.phone}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {pickupBranch.hours}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>
                  Pickup Date:{" "}
                  {new Date(formData.pickupDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-yellow-800 mb-2">
                    Important Reminders:
                  </p>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• Bring valid government-issued photo ID</li>
                    <li>• Background check required for firearm purchases</li>
                    <li>• Payment due at pickup (cash, card accepted)</li>
                    <li>• Must comply with all local and federal laws</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/shop" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button className="w-full">Return Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Checkout</h1>
        <p className="text-muted-foreground">
          Complete your order for pickup at one of our locations.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="customerName">Full Name *</Label>
                  <Input
                    id="customerName"
                    value={formData.customerName}
                    onChange={(e) =>
                      handleInputChange("customerName", e.target.value)
                    }
                    placeholder="Enter your full legal name"
                    className={errors.customerName ? "border-destructive" : ""}
                  />
                  {errors.customerName && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.customerName}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      handleInputChange("contactNumber", e.target.value)
                    }
                    placeholder="(555) 123-4567"
                    maxLength={14}
                    className={errors.contactNumber ? "border-destructive" : ""}
                  />
                  {errors.contactNumber && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.contactNumber}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Pickup Information */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Pickup Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="branchId">Pickup Location</Label>
                  {/* Single fixed location — read-only, nothing to select. */}
                  <div
                    id="branchId"
                    className="flex items-start gap-3 rounded-md border border-input bg-muted/50 px-3 py-3 mt-1.5"
                  >
                    <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium">{pickupBranch.name}</p>
                      <p className="text-muted-foreground">
                        {pickupBranch.address}
                      </p>
                      <p className="text-muted-foreground">
                        {pickupBranch.phone}
                      </p>
                      <p className="text-muted-foreground">
                        {pickupBranch.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="pickupDate">Preferred Pickup Date *</Label>
                  <Input
                    id="pickupDate"
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) =>
                      handleInputChange("pickupDate", e.target.value)
                    }
                    min={new Date().toISOString().split("T")[0]}
                    className={errors.pickupDate ? "border-destructive" : ""}
                  />
                  {errors.pickupDate && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.pickupDate}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-semibold">
                        ₱{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Items ({totalItems}):</span>
                    <span>₱{cartValue.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax:</span>
                    <span className="text-muted-foreground">At pickup</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal:</span>
                  <span className="text-primary">₱{cartValue.toFixed(2)}</span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Complete Reservation"}
                </Button>

                <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                  <h4 className="font-semibold text-sm mb-2">Pickup Only</h4>
                  <p className="text-xs text-muted-foreground">
                    All orders are for pickup only. Payment due at pickup with
                    valid ID and background check completion.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};
