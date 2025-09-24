import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew,
  onAddToCart 
}: ProductCardProps) => {
  const handleAddToCart = () => {
    onAddToCart?.(id);
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg bg-muted/20">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isNew && (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                Novo
              </Badge>
            )}
            {originalPrice && (
              <Badge variant="destructive">
                -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
              </Badge>
            )}
          </div>
          
          {/* Wishlist Button */}
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="text-sm text-muted-foreground mb-1">{category}</div>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{name}</h3>
          
          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-primary">
              R$ {price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;