"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/cart-provider";
import { ShoppingCart, Info } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      },
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "firearm":
        return "bg-tactical-orange/20 text-tactical-orange border-tactical-orange/50";
      case "ammunition":
        return "bg-tactical-gold/20 text-tactical-gold border-tactical-gold/50";
      case "accessory":
        return "bg-tactical-red/20 text-tactical-red border-tactical-red/50";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background border border-border hover:border-tactical-orange/50 hover:shadow-tactical-orange/20 w-64 sm:w-72 md:w-80 flex flex-col">
      <CardContent className="p-3">
        <div className="h-40 relative mb-3 rounded-lg overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
              <Badge
                variant="secondary"
                className="bg-tactical-red/30 text-tactical-red border-tactical-red/50 font-semibold"
              >
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-sm leading-tight line-clamp-2 text-foreground group-hover:text-tactical-orange transition-colors">
              {product.name}
            </h3>
            <Badge
              variant="outline"
              className={`text-xs shrink-0 font-semibold ${getCategoryColor(
                product.category,
              )}`}
            >
              {product.category}
            </Badge>
          </div>

          <p className="text-xs text-foreground/80 line-clamp-2 font-medium">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-foreground">
              ₱{product.price.toFixed(2)}
            </span>
            {product.featured && (
              <Badge className="bg-tactical-gold/30 text-tactical-gold border-tactical-gold/50 hover:bg-tactical-gold/40 font-semibold">
                Featured
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 flex items-center justify-between gap-2">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="flex-grow bg-tactical-orange hover:bg-tactical-orange/90 text-white font-semibold group-hover:scale-105 transition-all duration-200 shadow-md"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="border-2 border-tactical-gold/50 hover:border-tactical-gold hover:bg-tactical-gold/20 hover:text-tactical-gold text-foreground font-semibold"
        >
          <Info className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
