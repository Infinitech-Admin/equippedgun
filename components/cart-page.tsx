"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart, useCartValue } from "@/components/cart-provider";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CartPage = () => {
  const { state, dispatch } = useCart();
  const cartValue = useCartValue();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // ✅ FIX: sum all item quantities (2 rifles + 3 ammo = 5 total)
  const totalQuantity = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  if (state.items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Looks like you havent added any items to your cart yet. Browse our
          catalog to find quality firearms, ammunition, and accessories.
        </p>
        <Link href="/shop">
          <Button size="lg" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Shopping Cart</h1>
        <p className="text-muted-foreground">
          Review your selected items. All items are for pick-up only with valid
          identification.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            {/* ✅ Show total quantity here */}
            <h2 className="text-xl font-semibold">Items ({totalQuantity})</h2>
            <Button
              variant="ghost"
              onClick={clearCart}
              className="text-destructive hover:text-destructive"
            >
              Clear Cart
            </Button>
          </div>

          <div className="space-y-4">
            {state.items.map((item) => (
              <Card key={item.id} className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1">
                        {item.name}
                      </h3>
                      <Badge variant="outline" className="mb-2">
                        {item.category}
                      </Badge>
                      <p className="text-lg font-bold text-primary">
                        ₱{item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive h-8 w-8 p-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Subtotal:
                    </span>
                    <span className="font-semibold">
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="bg-card/50 backdrop-blur-sm sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  {/* ✅ Show total quantity here */}
                  <span>Items ({totalQuantity}):</span>
                  <span>₱{cartValue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span className="text-green-600 font-medium">
                    Pick-up Only
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax:</span>
                  <span className="text-muted-foreground">
                    Calculated at pickup
                  </span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold text-lg">
                <span>Subtotal:</span>
                <span className="text-primary">₱{cartValue.toFixed(2)}</span>
              </div>

              <div className="space-y-3">
                <Link href="/checkout">
                  <Button size="lg" className="w-full group">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-transparent"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Legal Notice */}
              <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                <h4 className="font-semibold text-sm mb-2">
                  Pick-up Requirements
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Valid government-issued ID required</li>
                  <li>• Background check for firearm purchases</li>
                  <li>• Must be 18+ (21+ for handguns)</li>
                  <li>• Comply with all local laws</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
